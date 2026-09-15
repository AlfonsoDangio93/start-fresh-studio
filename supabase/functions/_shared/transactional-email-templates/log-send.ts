import { createClient } from 'npm:@supabase/supabase-js@2'

/**
 * Appends a row to the project's email_send_log table.
 * Logging never decides the send result — failures are logged only.
 */
export async function logSend(params: {
  templateName: string
  recipientEmail: string
  status: 'sent' | 'suppressed' | 'failed'
  errorMessage?: string
}) {
  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!supabaseUrl || !supabaseServiceKey) return

  const supabase = createClient(supabaseUrl, supabaseServiceKey)
  const { error } = await supabase.from('email_send_log').insert({
    message_id: null,
    template_name: params.templateName,
    recipient_email: params.recipientEmail,
    status: params.status,
    error_message: params.errorMessage ?? null,
  })

  if (error) {
    console.error('Failed to write email_send_log', {
      code: error.code,
      message: error.message,
    })
  }
}

/** Runs a send and records its outcome. Rethrows unexpected failures. */
export async function withSendLog(
  templateName: string,
  recipientEmail: string,
  send: () => Promise<{ sent: boolean; reason?: string }>,
) {
  try {
    const result = await send()
    if (result.sent) {
      await logSend({ templateName, recipientEmail, status: 'sent' })
    } else {
      await logSend({ templateName, recipientEmail, status: 'suppressed' })
    }
    return result
  } catch (error) {
    await logSend({
      templateName,
      recipientEmail,
      status: 'failed',
      errorMessage: error instanceof Error ? error.message : String(error),
    })
    throw error
  }
}
