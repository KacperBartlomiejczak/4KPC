import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { productCategorySchema, productSchema } from "@/types/product";

import { ProductsSection, featuredProducts } from "./ProductsSection";
import { productCategoryLabels } from "./labels";

describe("ProductsSection", () => {
  it("siedzi pod kotwicą #podzespoly", () => {
    const { container } = render(<ProductsSection />);

    expect(container.querySelector("#podzespoly")).not.toBeNull();
  });

  it("wszystkie dane podzespołów przechodzą przez schemat domenowy", () => {
    for (const product of featuredProducts) {
      expect(productSchema.safeParse(product).success).toBe(true);
    }
  });

  it("pokazuje po jednym podzespole na każdą kategorię", () => {
    render(<ProductsSection />);

    expect(screen.getAllByRole("listitem")).toHaveLength(
      productCategorySchema.options.length,
    );

    for (const category of productCategorySchema.options) {
      expect(
        screen.getByText(productCategoryLabels[category]),
      ).toBeInTheDocument();
    }
  });
});
