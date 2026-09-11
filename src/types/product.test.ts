import { describe, expect, it } from "vitest";

import { productCategorySchema, productSchema } from "./product";

const validProduct = {
  id: "product-rtx-4090",
  name: "NVIDIA GeForce RTX 4090",
  category: "gpu",
  tagline: "Maksymalna wydajność w 4K.",
  pricePln: 8999,
  specs: [
    { value: "24GB", label: "GDDR6X" },
    { value: "4K", label: "Ready" },
  ],
  imagePath: "/media/product-gpu.jpg",
};

describe("productSchema", () => {
  it("przyjmuje poprawny podzespół", () => {
    expect(productSchema.safeParse(validProduct).success).toBe(true);
  });

  it("odrzuca nieznaną kategorię", () => {
    expect(
      productSchema.safeParse({ ...validProduct, category: "obudowa" }).success,
    ).toBe(false);
  });

  it("odrzuca pustą nazwę i zerową cenę", () => {
    expect(productSchema.safeParse({ ...validProduct, name: "" }).success).toBe(
      false,
    );
    expect(
      productSchema.safeParse({ ...validProduct, pricePln: 0 }).success,
    ).toBe(false);
  });

  it("wymienia wszystkie kategorie podzespołów pokazywane na landingu", () => {
    expect(productCategorySchema.options).toEqual([
      "gpu",
      "cpu",
      "ram",
      "storage",
    ]);
  });
});
