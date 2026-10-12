export type AdvancedMatching = { em?: string; ph?: string };

/**
 * Costruisce l'advanced matching Meta dai parametri "em" e "ph" della query string.
 * em: minuscolo, senza spazi, valido solo se contiene "@" non in prima posizione.
 * ph: solo cifre; se ha 10 cifre e non inizia per 39, il prefisso 39 viene anteposto.
 */
export function buildAdvancedMatching(search: string): AdvancedMatching {
  const params = new URLSearchParams(search);
  const advancedMatching: AdvancedMatching = {};

  const em = (params.get("em") || "").trim().toLowerCase();
  if (em.indexOf("@") > 0) advancedMatching.em = em;

  let ph = (params.get("ph") || "").replace(/[^0-9]/g, "");
  if (ph && ph.length === 10 && ph.indexOf("39") !== 0) ph = "39" + ph;
  if (ph) advancedMatching.ph = ph;

  return advancedMatching;
}
