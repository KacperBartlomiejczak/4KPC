import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useCaseSchema } from "@/types/build";

import { UseCasesSection } from "./UseCasesSection";
import { useCaseLabels } from "./labels";

describe("UseCasesSection", () => {
  it("siedzi pod kotwicą #zastosowania", () => {
    const { container } = render(<UseCasesSection />);

    expect(container.querySelector("#zastosowania")).not.toBeNull();
  });

  it("pokazuje po jednym kafelku na każde zastosowanie ze schematu", () => {
    render(<UseCasesSection />);

    expect(screen.getAllByRole("listitem")).toHaveLength(
      useCaseSchema.options.length,
    );

    for (const useCase of useCaseSchema.options) {
      expect(screen.getByText(useCaseLabels[useCase])).toBeInTheDocument();
    }
  });
});
