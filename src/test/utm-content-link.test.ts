import { describe, it, expect } from "vitest";
import { withUtmContent, BOOKING_LINK } from "@/lib/utmContentLink";

describe("utm_content sui link di prenotazione", () => {
  const base = `https://${BOOKING_LINK}`;

  it("accoda utm_content quando il link non ha parametri", () => {
    expect(withUtmContent(base, "variante-a")).toBe(`${base}?utm_content=variante-a`);
  });

  it("accoda utm_content senza toccare gli altri parametri", () => {
    expect(withUtmContent(`${base}?utm_source=meta&utm_medium=cpc`, "variante-a")).toBe(
      `${base}?utm_source=meta&utm_medium=cpc&utm_content=variante-a`
    );
  });

  it("non duplica un utm_content gia presente", () => {
    expect(withUtmContent(`${base}?utm_content=vecchia`, "nuova")).toBe(
      `${base}?utm_content=vecchia`
    );
  });

  it("lascia il link invariato senza utm_content", () => {
    expect(withUtmContent(base, "")).toBe(base);
  });

  it("codifica i caratteri speciali", () => {
    expect(withUtmContent(base, "variante a&b")).toBe(`${base}?utm_content=variante%20a%26b`);
  });
});

import { withUtmParams } from "@/lib/utmContentLink";
describe("withUtmParams", () => {
  it("aggiunge tutti gli UTM presenti", () => {
    expect(withUtmParams("https://prenota.hommi.it/richiedi-accesso", "?utm_source=fb&utm_medium=cpc&utm_campaign=c1&utm_content=a"))
      .toBe("https://prenota.hommi.it/richiedi-accesso?utm_source=fb&utm_medium=cpc&utm_campaign=c1&utm_content=a");
  });
  it("non rimuove né duplica quelli esistenti", () => {
    expect(withUtmParams("https://x.it/a?utm_source=fb", "?utm_source=g&utm_content=a"))
      .toBe("https://x.it/a?utm_source=fb&utm_content=a");
  });
});
