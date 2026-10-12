export const BOOKING_LINK = "prenota.hommi.it/richiedi-accesso";

/**
 * Accoda utm_content a un link di prenotazione quando è presente e non c'è già.
 * Non tocca gli altri parametri e non duplica mai utm_content.
 */
export function withUtmContent(href: string, utmContent: string): string {
  if (!utmContent || /[?&]utm_content=/.test(href)) return href;
  const separator = href.includes("?") ? "&" : "?";
  return `${href}${separator}utm_content=${encodeURIComponent(utmContent)}`;
}
