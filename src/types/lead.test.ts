import { describe, expect, it } from "vitest";

import { buildBriefSchema } from "./lead";

describe("buildBriefSchema", () => {
  it("przyjmuje sensowny opis potrzeb", () => {
    const result = buildBriefSchema.safeParse({
      prompt: "Gram w 4K i montuję filmy, budżet do 9000 zł.",
    });

    expect(result.success).toBe(true);
  });

  it("przycina białe znaki przed walidacją długości", () => {
    const result = buildBriefSchema.safeParse({ prompt: "   krótko   " });

    expect(result.success).toBe(false);
  });

  it("odrzuca zbyt krótki opis z czytelnym komunikatem", () => {
    const result = buildBriefSchema.safeParse({ prompt: "gram" });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toContain("10 znaków");
    }
  });

  it("odrzuca opis dłuższy niż 500 znaków", () => {
    const result = buildBriefSchema.safeParse({ prompt: "a".repeat(501) });

    expect(result.success).toBe(false);
  });
});
