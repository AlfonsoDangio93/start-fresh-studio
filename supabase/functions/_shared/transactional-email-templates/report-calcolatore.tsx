/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Hommi'
const PRIMARY = '#E35210'
const TEXT_DARK = '#3F4444'
const TEXT_MUTED = '#6B7280'
const BORDER = '#E5E7EB'
const LOGO_URL =
  'https://clgdigtnhoqwnmjwyiwh.supabase.co/storage/v1/object/public/email-assets/hommi-logo.png'
const CALENDLY_URL = 'https://calendly.com/simone-calderoni-hommi/30min'

interface ReportCalcolatoreProps {
  nome?: string
  numImmobili?: number
  costoGuastiDiretti?: number
  costoTempoPM?: number
  costoRecensioni?: number
  costoTotaleAnnuo?: number
  costoHommi?: number
  risparmio?: number
  risparmioPercentuale?: number
}

const fmt = (n?: number) =>
  typeof n === 'number'
    ? new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
      }).format(n)
    : '—'

const ReportCalcolatoreEmail = ({
  nome,
  numImmobili,
  costoGuastiDiretti,
  costoTempoPM,
  costoRecensioni,
  costoTotaleAnnuo,
  costoHommi,
  risparmio,
  risparmioPercentuale,
}: ReportCalcolatoreProps) => (
  <Html lang="it" dir="ltr">
    <Head />
    <Preview>
      Il tuo report Hommi: scopri quanto puoi risparmiare sulla manutenzione
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ textAlign: 'center', padding: '24px 0 8px' }}>
          <Img
            src={LOGO_URL}
            alt="Hommi"
            width="120"
            style={{ margin: '0 auto' }}
          />
        </Section>

        <Section style={card}>
          <Heading style={h1}>
            {nome ? `Ciao ${nome},` : 'Ciao,'} ecco il tuo report 📊
          </Heading>
          <Text style={text}>
            Abbiamo analizzato i dati che ci hai fornito
            {numImmobili ? ` sui tuoi ${numImmobili} immobili` : ''} per
            calcolare il costo reale della manutenzione e quanto potresti
            risparmiare con {SITE_NAME}.
          </Text>

          <Section style={savingsBox}>
            <Text style={savingsLabel}>Risparmio stimato annuo</Text>
            <Text style={savingsAmount}>{fmt(risparmio)}</Text>
            {typeof risparmioPercentuale === 'number' && (
              <Text style={savingsPct}>
                -{risparmioPercentuale}% sui costi attuali
              </Text>
            )}
          </Section>

          <Heading style={h2}>Dettaglio costi attuali</Heading>

          <Section style={row}>
            <Text style={rowLabel}>🔧 Guasti & manutenzione</Text>
            <Text style={rowValue}>{fmt(costoGuastiDiretti)}/anno</Text>
          </Section>
          <Hr style={hr} />
          <Section style={row}>
            <Text style={rowLabel}>⏱️ Tempo PM dedicato</Text>
            <Text style={rowValue}>{fmt(costoTempoPM)}/anno</Text>
          </Section>
          <Hr style={hr} />
          <Section style={row}>
            <Text style={rowLabel}>⭐ Impatto recensioni negative</Text>
            <Text style={rowValue}>{fmt(costoRecensioni)}/anno</Text>
          </Section>
          <Hr style={hr} />
          <Section style={rowTotal}>
            <Text style={rowLabelTotal}>Totale attuale</Text>
            <Text style={rowValueTotal}>{fmt(costoTotaleAnnuo)}/anno</Text>
          </Section>

          <Section style={hommiBox}>
            <Text style={rowLabel}>Con Hommi pagheresti</Text>
            <Text style={hommiAmount}>{fmt(costoHommi)}/anno</Text>
          </Section>

          <Section style={{ textAlign: 'center', padding: '32px 0 16px' }}>
            <Text style={text}>
              Vuoi vedere come funziona Hommi per la tua attività? Prenota una
              demo gratuita di 30 minuti con il nostro team.
            </Text>
            <Button href={CALENDLY_URL} style={button}>
              📅 Prenota una demo
            </Button>
          </Section>

          <Text style={footerText}>
            Hai domande? Rispondi a questa email o scrivici su WhatsApp al{' '}
            <a href="https://wa.me/393759752657" style={link}>
              +39 375 975 2657
            </a>
            .
          </Text>
        </Section>

        <Text style={signature}>Il team {SITE_NAME}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ReportCalcolatoreEmail,
  subject: (data: Record<string, any>) =>
    data?.risparmio
      ? `Il tuo report Hommi: risparmio stimato ${fmt(data.risparmio)}/anno`
      : 'Il tuo report Hommi è pronto',
  displayName: 'Report Calcolatore',
  previewData: {
    nome: 'Marco',
    numImmobili: 12,
    costoGuastiDiretti: 4800,
    costoTempoPM: 6200,
    costoRecensioni: 2100,
    costoTotaleAnnuo: 13100,
    costoHommi: 4296,
    risparmio: 8804,
    risparmioPercentuale: 67,
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
  margin: 0,
  padding: 0,
}
const container = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px 16px 40px',
}
const card = {
  backgroundColor: '#ffffff',
  border: `1px solid ${BORDER}`,
  borderRadius: '12px',
  padding: '32px 28px',
}
const h1 = {
  fontFamily: "'Poppins', Arial, sans-serif",
  fontSize: '24px',
  fontWeight: 700,
  color: TEXT_DARK,
  margin: '0 0 16px',
  lineHeight: '1.3',
}
const h2 = {
  fontFamily: "'Poppins', Arial, sans-serif",
  fontSize: '16px',
  fontWeight: 700,
  color: TEXT_DARK,
  margin: '24px 0 12px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
}
const text = {
  fontSize: '15px',
  color: TEXT_DARK,
  lineHeight: '1.6',
  margin: '0 0 16px',
}
const savingsBox = {
  backgroundColor: PRIMARY,
  borderRadius: '12px',
  padding: '24px 20px',
  textAlign: 'center' as const,
  margin: '20px 0 8px',
}
const savingsLabel = {
  fontSize: '13px',
  color: '#ffffff',
  margin: '0 0 6px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  fontWeight: 600,
  opacity: 0.95,
}
const savingsAmount = {
  fontFamily: "'Poppins', Arial, sans-serif",
  fontSize: '36px',
  fontWeight: 800,
  color: '#ffffff',
  margin: '0',
  lineHeight: '1.1',
}
const savingsPct = {
  fontSize: '14px',
  color: '#ffffff',
  margin: '6px 0 0',
  fontWeight: 600,
  opacity: 0.95,
}
const row = {
  display: 'flex' as const,
  justifyContent: 'space-between' as const,
  alignItems: 'center' as const,
  padding: '10px 0',
}
const rowTotal = {
  ...row,
  padding: '14px 0 4px',
}
const rowLabel = {
  fontSize: '14px',
  color: TEXT_DARK,
  margin: 0,
}
const rowValue = {
  fontSize: '14px',
  color: TEXT_DARK,
  margin: 0,
  fontWeight: 600,
  textAlign: 'right' as const,
}
const rowLabelTotal = {
  ...rowLabel,
  fontWeight: 700,
  fontSize: '15px',
}
const rowValueTotal = {
  ...rowValue,
  fontWeight: 800,
  fontSize: '16px',
}
const hr = {
  border: 'none',
  borderTop: `1px solid ${BORDER}`,
  margin: '0',
}
const hommiBox = {
  backgroundColor: '#FFF4EE',
  border: `1px solid ${PRIMARY}33`,
  borderRadius: '10px',
  padding: '16px 20px',
  margin: '16px 0 8px',
  textAlign: 'center' as const,
}
const hommiAmount = {
  fontFamily: "'Poppins', Arial, sans-serif",
  fontSize: '24px',
  fontWeight: 800,
  color: PRIMARY,
  margin: '4px 0 0',
}
const button = {
  backgroundColor: PRIMARY,
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 700,
  textDecoration: 'none',
  padding: '14px 28px',
  borderRadius: '10px',
  display: 'inline-block',
  marginTop: '8px',
}
const link = {
  color: PRIMARY,
  textDecoration: 'none',
  fontWeight: 600,
}
const footerText = {
  fontSize: '13px',
  color: TEXT_MUTED,
  lineHeight: '1.6',
  margin: '24px 0 0',
  textAlign: 'center' as const,
}
const signature = {
  fontSize: '13px',
  color: TEXT_MUTED,
  textAlign: 'center' as const,
  margin: '20px 0 0',
}
