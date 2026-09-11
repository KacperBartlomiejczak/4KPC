import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { formatPricePln } from "@/lib/price";
import { buildSchema, type Build } from "@/types/build";

import { BuildCard } from "./BuildCard";
import { buildTierLabels, useCaseLabels } from "./labels";

const build: Build = buildSchema.parse({
  id: "build-prime",
  name: "4KPC Prime",
  tier: "performance",
  useCase: "gaming-4k",
  tagline: "144 FPS w 4K i zapas na kolejne premiery.",
  pricePln: 9499,
  specs: [
    { value: "Ryzen 7 7800X3D", label: "procesor" },
    { value: "RTX 4080 SUPER", label: "grafika" },
  ],
  imagePath: "/media/build-performance.jpg",
});

/**
 * RTL normalizuje twardą spację z `Intl` do zwykłej, więc porównanie
 * z literałem „8 999 zł” nigdy by nie trafiło. Dopasowujemy wzorcem.
 */
const priceMatcher = (pricePln: number) =>
  new RegExp(formatPricePln(pricePln).replace(/\s/gu, "\\s"));

describe("BuildCard", () => {
  it("pokazuje nazwę, półkę, zastosowanie i cenę", () => {
    render(<BuildCard build={build} />);

    expect(
      screen.getByRole("heading", { name: build.name }),
    ).toBeInTheDocument();
    expect(screen.getByText(buildTierLabels[build.tier])).toBeInTheDocument();
    expect(screen.getByText(useCaseLabels[build.useCase])).toBeInTheDocument();
    expect(screen.getByText(priceMatcher(9499))).toBeInTheDocument();
  });

  it("wypisuje specyfikację zestawu", () => {
    render(<BuildCard build={build} />);

    for (const spec of build.specs) {
      expect(screen.getByText(spec.value)).toBeInTheDocument();
      expect(screen.getByText(spec.label)).toBeInTheDocument();
    }
  });

  it("ma CTA z nazwą zestawu w nazwie dostępnej", () => {
    render(<BuildCard build={build} />);

    expect(
      screen.getByRole("link", { name: `Wybierz ten zestaw: ${build.name}` }),
    ).toHaveAttribute("href", "#brief");
  });

  it("wyróżniony zestaw dostaje plakietkę i aria-current", () => {
    const { container } = render(<BuildCard build={build} highlighted />);

    expect(screen.getByText(/najczęściej wybierany/i)).toBeInTheDocument();
    expect(container.querySelector("[aria-current]")).not.toBeNull();
  });

  it("zwykły zestaw nie udaje wyróżnionego", () => {
    const { container } = render(<BuildCard build={build} />);

    expect(screen.queryByText(/najczęściej wybierany/i)).not.toBeInTheDocument();
    expect(container.querySelector("[aria-current]")).toBeNull();
  });
});
