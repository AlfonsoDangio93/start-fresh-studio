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

export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;

/**
 * Accoda al link tutti gli UTM presenti nella query string della landing,
 * solo se presenti e senza rimuovere né duplicare quelli già nel link.
 */
export function withUtmParams(href: string, search: string): string {
  const params = new URLSearchParams(search);
  let out = href;
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (!value || new RegExp(`[?&]${key}=`).test(out)) continue;
    out += `${out.includes("?") ? "&" : "?"}${key}=${encodeURIComponent(value)}`;
  }
  return out;
}
