import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteFooter } from "./SiteFooter";

describe("SiteFooter", () => {
  it("jest landmarkiem contentinfo", () => {
    render(<SiteFooter />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("prowadzi do planszy design systemu", () => {
    render(<SiteFooter />);

    expect(
      screen.getByRole("link", { name: "Design System" }),
    ).toHaveAttribute("href", "/design-system");
  });

  it("pokazuje bieżący rok w nocie o prawach", () => {
    render(<SiteFooter />);

    expect(
      screen.getByText(new RegExp(`${new Date().getFullYear()}`)),
    ).toBeInTheDocument();
  });
});
