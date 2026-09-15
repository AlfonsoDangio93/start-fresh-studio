/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  nome?: string
  email?: string
  telefono?: string
  numImmobili?: string
  citta?: string
  source?: string
  timestamp?: string
}

const Row = ({ label, value }: { label: string; value?: string }) => (
  <Text style={row}>
    <span style={labelStyle}>{label}: </span>
    <span style={valueStyle}>{value && value.trim() ? value : '—'}</span>
  </Text>
)

const Email = ({ nome, email, telefono, numImmobili, citta, source, timestamp }: Props) => (
  <Html lang="it" dir="ltr">
    <Head />
    <Preview>{`Nuovo lead Landing 4: ${nome || 'senza nome'}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Nuovo lead da Landing 4</Heading>
        <Section style={card}>
          <Row label="Nome" value={nome} />
          <Row label="Email" value={email} />
          <Row label="Telefono" value={telefono} />
          <Row label="Immobili gestiti" value={numImmobili} />
          <Row label="Città" value={citta} />
          <Hr style={hr} />
          <Row label="Origine" value={source} />
          <Row label="Data" value={timestamp} />
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `Nuovo lead Landing 4 — ${data?.nome || 'senza nome'}`,
  displayName: 'Notifica lead Landing 4',
  to: 'simone.calderoni@hommi.it',
  previewData: {
    nome: 'Mario Rossi',
    email: 'mario@example.com',
    telefono: '+39 333 1234567',
    numImmobili: '6-15',
    citta: 'Milano',
    source: 'landing-4-hero',
    timestamp: new Date().toISOString(),
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '24px 25px', maxWidth: '560px' }
const h1 = { fontSize: '20px', color: '#3F4444', margin: '0 0 16px' }
const card = {
  border: '1px solid #ECECEC',
  borderRadius: '10px',
  padding: '16px 18px',
}
const row = { fontSize: '14px', margin: '0 0 8px', color: '#3F4444' }
const labelStyle = { color: '#8A8F8F' }
const valueStyle = { fontWeight: 'bold' as const, color: '#3F4444' }
const hr = { borderColor: '#ECECEC', margin: '14px 0' }
