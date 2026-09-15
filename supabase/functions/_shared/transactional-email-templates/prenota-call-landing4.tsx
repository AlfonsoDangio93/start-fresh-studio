/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  nome?: string
  calendlyUrl?: string
}

const DEFAULT_CALENDLY =
  'https://calendly.com/simone-calderoni-hommi/30min?utm_source=landing-4&utm_medium=email&utm_campaign=meta-ads'

const Email = ({ nome, calendlyUrl }: Props) => (
  <Html lang="it" dir="ltr">
    <Head />
    <Preview>Richiesta ricevuta — prenota la tua call gratuita con Hommi</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ textAlign: 'center' as const, marginBottom: '8px' }}>
          <Img
            src="https://www.hommi.it/android-chrome-192x192.png"
            alt="Hommi"
            width="48"
            height="48"
            style={{ margin: '0 auto', borderRadius: '10px' }}
          />
        </Section>
        <Heading style={h1}>
          {nome ? `Ricevuto, ${nome}!` : 'Richiesta ricevuta!'}
        </Heading>
        <Text style={text}>
          Grazie per aver richiesto la prova di Hommi. Ti richiamiamo entro un
          giorno lavorativo per attivare i tuoi 3 mesi di prova.
        </Text>
        <Text style={text}>
          Se preferisci scegliere tu il momento migliore, puoi prenotare
          direttamente una call gratuita con un nostro esperto:
        </Text>
        <Section style={{ textAlign: 'center' as const, margin: '24px 0' }}>
          <Button style={button} href={calendlyUrl || DEFAULT_CALENDLY}>
            Prenota una call gratuita
          </Button>
        </Section>
        <Text style={small}>
          Nessun impegno e nessuna carta di credito: ti mostreremo come Hommi
          gestisce le manutenzioni dei tuoi immobili senza che tu debba alzare
          il telefono.
        </Text>
        <Text style={footer}>Hommi — Milano · Monza · Como · Lecco · Torino</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `${data?.nome ? `${data.nome}, la` : 'La'} tua prova Hommi è quasi attiva — prenota la call`,
  displayName: 'Prenota call — Landing 4',
  previewData: { nome: 'Mario' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '28px 25px', maxWidth: '560px' }
const h1 = { fontSize: '22px', color: '#3F4444', margin: '12px 0', textAlign: 'center' as const }
const text = { fontSize: '15px', lineHeight: '1.6', color: '#3F4444', margin: '0 0 12px' }
const button = {
  backgroundColor: '#E35210',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold' as const,
  padding: '14px 32px',
  borderRadius: '10px',
  textDecoration: 'none',
}
const small = { fontSize: '13px', lineHeight: '1.5', color: '#8A8F8F', margin: '0 0 16px' }
const footer = {
  fontSize: '12px',
  color: '#8A8F8F',
  textAlign: 'center' as const,
  margin: '24px 0 0',
}
