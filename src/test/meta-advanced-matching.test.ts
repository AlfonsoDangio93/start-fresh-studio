import { describe, it, expect } from "vitest";
import { buildAdvancedMatching } from "@/lib/metaAdvancedMatching";

describe("advanced matching Meta da query string", () => {
  it("normalizza email in minuscolo e aggiunge il prefisso 39 al telefono di 10 cifre", () => {
    expect(buildAdvancedMatching("?em=Mario.Rossi%40Email.com&ph=3331234567")).toEqual({
      em: "mario.rossi@email.com",
      ph: "393331234567",
    });
  });

  it("lascia intatto un telefono che inizia gia per 39", () => {
    expect(buildAdvancedMatching("?ph=393331234567")).toEqual({ ph: "393331234567" });
  });

  it("tiene solo le cifre del telefono", () => {
    expect(buildAdvancedMatching("?ph=%2B39%20333-123%204567")).toEqual({ ph: "393331234567" });
  });

  it("non aggiunge il prefisso a un telefono lungo 11 cifre", () => {
    expect(buildAdvancedMatching("?ph=33312345678")).toEqual({ ph: "33312345678" });
  });

  it("scarta un'email senza chiocciola o con la chiocciola in prima posizione", () => {
    expect(buildAdvancedMatching("?em=mario.rossi&ph=3331234567")).toEqual({
      ph: "393331234567",
    });
    expect(buildAdvancedMatching("?em=%40email.com")).toEqual({});
  });

  it("scarta un telefono non valido", () => {
    expect(buildAdvancedMatching("?em=a%40b.com&ph=abc")).toEqual({ em: "a@b.com" });
  });

  it("restituisce un oggetto vuoto senza parametri", () => {
    expect(buildAdvancedMatching("")).toEqual({});
  });
});
