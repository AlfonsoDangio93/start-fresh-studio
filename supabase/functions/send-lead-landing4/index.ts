import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { sendTemplateEmail } from '../_shared/transactional-email-templates/send-email.ts'
import { withSendLog } from '../_shared/transactional-email-templates/log-send.ts'

const NOTIFY_TEMPLATE = 'notifica-lead-landing4'
const INVITE_TEMPLATE = 'prenota-call-landing4'
const NOTIFY_EMAIL = 'simone.calderoni@hommi.it'

function json(data: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

function str(value: unknown, max = 200) {
  return String(value ?? '').trim().slice(0, max)
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

  const nome = str(body.nome)
  const email = str(body.email)
  const telefono = str(body.telefono, 40)
  const numImmobili = str(body.numImmobili, 40)
  const citta = str(body.citta, 120)
  const source = str(body.source, 60) || 'landing-4'
  const key = str(body.idempotencyKey, 120) || `landing4-${email}-${Date.now()}`

  if (!nome || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ error: 'nome and a valid email are required' }, 400)
  }

  // 1. Internal notification to the team
  try {
    await withSendLog(NOTIFY_TEMPLATE, NOTIFY_EMAIL, () =>
      sendTemplateEmail(NOTIFY_TEMPLATE, NOTIFY_EMAIL, {
        templateData: { nome, email, telefono, numImmobili, citta, source },
        idempotencyKey: `${NOTIFY_TEMPLATE}-${key}`,
      }),
    )
  } catch (error) {
    console.error('Failed to send internal lead notification', {
      message: error instanceof Error ? error.message : String(error),
    })
  }

  // 2. Call invite to the lead — skipped when the lead used the internal
  // address, so the same inbox never receives both emails.
  if (email.toLowerCase() === NOTIFY_EMAIL.toLowerCase()) {
    console.log('Lead email matches internal address — skipping call invite')
  } else {
    try {
      await withSendLog(INVITE_TEMPLATE, email, () =>
        sendTemplateEmail(INVITE_TEMPLATE, email, {
          templateData: { nome },
          idempotencyKey: `${INVITE_TEMPLATE}-${key}`,
        }),
      )
    } catch (error) {
      console.error('Failed to send lead call invite', {
        message: error instanceof Error ? error.message : String(error),
      })
    }
  }

  return json({ success: true })
})
