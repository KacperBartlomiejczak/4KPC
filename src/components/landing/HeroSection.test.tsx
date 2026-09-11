import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HeroSection } from "./HeroSection";

describe("HeroSection", () => {
  it("ma dokładnie jeden nagłówek h1 — reszta strony wisi pod nim", () => {
    render(<HeroSection />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /bez ograniczeń/i,
    );
  });

  it("prowadzi do gotowych zestawów dla tych, którzy nie chcą opisywać potrzeb", () => {
    render(<HeroSection />);

    expect(
      screen.getByRole("link", { name: /zobacz gotowe zestawy/i }),
    ).toHaveAttribute("href", "#zestawy");
  });

  it("zawiera formularz briefu pod kotwicą #brief", () => {
    const { container } = render(<HeroSection />);

    expect(
      screen.getByLabelText(/opisz, do czego potrzebujesz komputera/i),
    ).toBeInTheDocument();
    expect(container.querySelector("#brief")).not.toBeNull();
  });
});
