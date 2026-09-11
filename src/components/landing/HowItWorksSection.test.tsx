import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HowItWorksSection } from "./HowItWorksSection";

describe("HowItWorksSection", () => {
  it("siedzi pod kotwicą #jak-to-dziala", () => {
    const { container } = render(<HowItWorksSection />);

    expect(container.querySelector("#jak-to-dziala")).not.toBeNull();
  });

  it("opisuje cztery kroki, w kolejności", () => {
    render(<HowItWorksSection />);

    const steps = screen.getAllByRole("listitem");

    expect(steps).toHaveLength(4);
    expect(steps[0]).toHaveTextContent(/opisz/i);
    expect(steps[1]).toHaveTextContent(/dobiera/i);
    expect(steps[2]).toHaveTextContent(/porówn/i);
    expect(steps[3]).toHaveTextContent(/zamawiasz/i);
  });

  it("numeruje kroki od 01 do 04", () => {
    render(<HowItWorksSection />);

    for (const number of ["01", "02", "03", "04"]) {
      expect(screen.getByText(number)).toBeInTheDocument();
    }
  });
});
