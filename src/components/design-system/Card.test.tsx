import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { cardVariantSchema } from "@/types/design-component";

import { Card } from "./Card";

const variants = cardVariantSchema.options;

describe("Card", () => {
  it("renderuje treść w każdym wariancie z sekcji 09", () => {
    for (const variant of variants) {
      const { unmount } = render(
        <Card variant={variant}>
          <p>NVIDIA GeForce RTX 4090</p>
        </Card>,
      );

      expect(screen.getByText("NVIDIA GeForce RTX 4090")).toBeInTheDocument();
      unmount();
    }
  });

  it("wystawia wariant jako data-variant", () => {
    render(<Card variant="elevated">treść</Card>);

    expect(screen.getByText("treść")).toHaveAttribute(
      "data-variant",
      "elevated",
    );
  });

  it("wariant selected jest oznaczony dla czytników ekranu", () => {
    render(<Card variant="selected">treść</Card>);

    expect(screen.getByText("treść")).toHaveAttribute("aria-current", "true");
  });

  it("wariant disabled jest oznaczony jako niedostępny", () => {
    render(<Card variant="disabled">treść</Card>);

    expect(screen.getByText("treść")).toHaveAttribute("aria-disabled", "true");
  });

  it("domyślny wariant nie dokłada stanów ARIA", () => {
    render(<Card>treść</Card>);

    const card = screen.getByText("treść");

    expect(card).toHaveAttribute("data-variant", "default");
    expect(card).not.toHaveAttribute("aria-current");
    expect(card).not.toHaveAttribute("aria-disabled");
  });
});
