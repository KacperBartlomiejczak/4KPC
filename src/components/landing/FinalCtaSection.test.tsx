import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FinalCtaSection } from "./FinalCtaSection";

describe("FinalCtaSection", () => {
  it("powtarza claim marki i kieruje do briefu", () => {
    render(<FinalCtaSection />);

    expect(
      screen.getByRole("heading", { name: /większe możliwości/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /dobierz swój komputer/i }),
    ).toHaveAttribute("href", "#brief");
  });
});
