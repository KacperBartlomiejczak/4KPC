import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PrinciplesSection } from "./PrinciplesSection";

describe("PrinciplesSection", () => {
  it("siedzi pod kotwicą #dlaczego i ma nagłówek sekcji", () => {
    const { container } = render(<PrinciplesSection />);

    expect(container.querySelector("#dlaczego")).not.toBeNull();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("pokazuje trzy zasady z numeracją z planszy", () => {
    render(<PrinciplesSection />);

    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(3);
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();
  });
});
