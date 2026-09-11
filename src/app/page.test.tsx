import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("Landing page", () => {
  it("ma jeden nagłówek h1 na całą stronę", () => {
    render(<Home />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("wystawia wszystkie kotwice, do których kieruje nawigacja", () => {
    const { container } = render(<Home />);

    for (const anchor of [
      "brief",
      "dlaczego",
      "jak-to-dziala",
      "zastosowania",
      "podzespoly",
      "zestawy",
      "asystent",
    ]) {
      expect(container.querySelector(`#${anchor}`)).not.toBeNull();
    }
  });

  it("nie zostawia linków prowadzących donikąd", () => {
    const { container } = render(<Home />);

    const hrefs = [...container.querySelectorAll("a")].map((link) =>
      link.getAttribute("href"),
    );

    for (const href of hrefs) {
      expect(href).toBeTruthy();
      if (href?.startsWith("#")) {
        expect(container.querySelector(`#${href.slice(1)}`)).not.toBeNull();
      }
    }
  });
});
