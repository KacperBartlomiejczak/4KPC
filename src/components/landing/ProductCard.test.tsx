import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { formatPricePln } from "@/lib/price";
import { productSchema, type Product } from "@/types/product";

import { ProductCard } from "./ProductCard";
import { productCategoryLabels } from "./labels";

const product: Product = productSchema.parse({
  id: "product-rtx-4090",
  name: "NVIDIA GeForce RTX 4090",
  category: "gpu",
  tagline: "Maksymalna wydajność w 4K.",
  pricePln: 8999,
  specs: [
    { value: "24GB", label: "GDDR6X" },
    { value: "4K", label: "Ready" },
    { value: "DLSS 3", label: "AI Powered" },
  ],
  imagePath: "/media/product-gpu.jpg",
});

/**
 * RTL normalizuje twardą spację z `Intl` do zwykłej, więc porównanie
 * z literałem „8 999 zł” nigdy by nie trafiło. Dopasowujemy wzorcem.
 */
const priceMatcher = (pricePln: number) =>
  new RegExp(formatPricePln(pricePln).replace(/\s/gu, "\\s"));

describe("ProductCard", () => {
  it("pokazuje nazwę, kategorię po polsku i opis", () => {
    render(<ProductCard product={product} />);

    expect(
      screen.getByRole("heading", { name: product.name }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(productCategoryLabels[product.category]),
    ).toBeInTheDocument();
    expect(screen.getByText(product.tagline)).toBeInTheDocument();
  });

  it("formatuje cenę po polsku", () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText(priceMatcher(8999))).toBeInTheDocument();
  });

  it("pokazuje wszystkie chipy specyfikacji", () => {
    render(<ProductCard product={product} />);

    for (const spec of product.specs) {
      expect(screen.getByText(spec.value)).toBeInTheDocument();
      expect(screen.getByText(spec.label)).toBeInTheDocument();
    }
  });

  it("ma CTA, które w nazwie dostępnej niesie nazwę podzespołu", () => {
    render(<ProductCard product={product} />);

    const cta = screen.getByRole("link", {
      name: `Dodaj do zestawu: ${product.name}`,
    });

    expect(cta).toHaveAttribute("href", "#brief");
  });
});
