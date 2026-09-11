import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { SiteNav } from "./SiteNav";

describe("SiteNav", () => {
  it("wystawia landmark nawigacji z kompletem kotwic", () => {
    render(<SiteNav />);

    const nav = screen.getByRole("navigation", { name: /główna/i });

    expect(nav).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Jak to działa" })).toHaveAttribute(
      "href",
      "#jak-to-dziala",
    );
    expect(screen.getByRole("link", { name: "Zastosowania" })).toHaveAttribute(
      "href",
      "#zastosowania",
    );
    expect(screen.getByRole("link", { name: "Podzespoły" })).toHaveAttribute(
      "href",
      "#podzespoly",
    );
    expect(screen.getByRole("link", { name: "Zestawy" })).toHaveAttribute(
      "href",
      "#zestawy",
    );
    expect(screen.getByRole("link", { name: "Asystent AI" })).toHaveAttribute(
      "href",
      "#asystent",
    );
  });

  it("kieruje CTA do formularza w hero", () => {
    render(<SiteNav />);

    expect(
      screen.getByRole("link", { name: "Dobierz komputer" }),
    ).toHaveAttribute("href", "#brief");
  });

  it("otwiera i zamyka menu mobilne", async () => {
    const user = userEvent.setup();
    render(<SiteNav />);

    const toggle = screen.getByRole("button", { name: /menu/i });

    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("zamyka menu po kliknięciu w kotwicę — inaczej zasłania sekcję na mobile", async () => {
    const user = userEvent.setup();
    render(<SiteNav />);

    const toggle = screen.getByRole("button", { name: /menu/i });

    await user.click(toggle);
    await user.click(screen.getByRole("link", { name: "Zestawy" }));

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
