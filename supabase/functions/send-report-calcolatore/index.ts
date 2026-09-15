import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { sendTemplateEmail } from '../_shared/transactional-email-templates/send-email.ts'
import { withSendLog } from '../_shared/transactional-email-templates/log-send.ts'

const TEMPLATE = 'report-calcolatore'

function json(data: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  let body: Record<string, any>
  try {
    body = await req.json()
  } catch {
    return json({ error: 'Invalid JSON in request body' }, 400)
  }

  const recipientEmail = String(body.recipientEmail ?? '').trim()
  if (!recipientEmail || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(recipientEmail)) {
    return json({ error: 'A valid recipientEmail is required' }, 400)
  }

  const templateData =
    body.templateData && typeof body.templateData === 'object'
      ? body.templateData
      : {}
  const idempotencyKey =
    typeof body.idempotencyKey === 'string' && body.idempotencyKey
      ? body.idempotencyKey
      : `${TEMPLATE}-${recipientEmail}-${Date.now()}`

  try {
    const result = await withSendLog(TEMPLATE, recipientEmail, () =>
      sendTemplateEmail(TEMPLATE, recipientEmail, {
        templateData,
        idempotencyKey,
      }),
    )
    return json({ success: result.sent, reason: (result as any).reason ?? null })
  } catch (error) {
    console.error('Failed to send calculator report email', {
      message: error instanceof Error ? error.message : String(error),
    })
    return json({ error: 'Failed to send email' }, 500)
  }
})
