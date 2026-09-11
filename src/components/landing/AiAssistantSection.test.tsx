import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AiAssistantSection } from "./AiAssistantSection";

describe("AiAssistantSection", () => {
  it("siedzi pod kotwicą #asystent", () => {
    const { container } = render(<AiAssistantSection />);

    expect(container.querySelector("#asystent")).not.toBeNull();
  });

  it("pokazuje przykładową rozmowę — pytanie i odpowiedź", () => {
    render(<AiAssistantSection />);

    expect(screen.getByText(/montuję filmy 4k/i)).toBeInTheDocument();
    expect(screen.getByText(/proponuję/i)).toBeInTheDocument();
  });

  it("nie udaje działającego czatu — mówi wprost, że to przykład", () => {
    render(<AiAssistantSection />);

    expect(screen.getByText(/przykładowa rozmowa/i)).toBeInTheDocument();
  });

  it("kieruje do formularza briefu", () => {
    render(<AiAssistantSection />);

    expect(
      screen.getByRole("link", { name: /opisz swoje potrzeby/i }),
    ).toHaveAttribute("href", "#brief");
  });
});
