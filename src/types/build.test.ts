import { describe, expect, it } from "vitest";

import { buildSchema, buildTierSchema, useCaseSchema } from "./build";

const validBuild = {
  id: "build-prime",
  name: "4KPC Prime",
  tier: "performance",
  useCase: "gaming-4k",
  tagline: "4K i 144 Hz bez kompromisów.",
  pricePln: 9499,
  specs: [{ value: "RTX 4080", label: "SUPER" }],
  imagePath: "/media/build-performance.jpg",
};

describe("buildSchema", () => {
  it("przyjmuje poprawny zestaw", () => {
    const result = buildSchema.safeParse(validBuild);

    expect(result.success).toBe(true);
  });

  it("odrzuca cenę, która nie jest dodatnią liczbą całkowitą", () => {
    expect(buildSchema.safeParse({ ...validBuild, pricePln: -1 }).success).toBe(
      false,
    );
    expect(
      buildSchema.safeParse({ ...validBuild, pricePln: 9499.5 }).success,
    ).toBe(false);
  });

  it("odrzuca nieznane zastosowanie", () => {
    expect(
      buildSchema.safeParse({ ...validBuild, useCase: "kopanie-krypto" })
        .success,
    ).toBe(false);
  });

  it("wymaga co najmniej jednego chipa specyfikacji", () => {
    expect(buildSchema.safeParse({ ...validBuild, specs: [] }).success).toBe(
      false,
    );
  });

  it("wymaga ścieżki do zdjęcia względem public/", () => {
    expect(
      buildSchema.safeParse({ ...validBuild, imagePath: "media/x.jpg" }).success,
    ).toBe(false);
  });

  it("trzyma komplet zastosowań i półek wydajnościowych", () => {
    expect(useCaseSchema.options).toHaveLength(5);
    expect(buildTierSchema.options).toEqual([
      "starter",
      "performance",
      "ultra",
    ]);
  });
});
