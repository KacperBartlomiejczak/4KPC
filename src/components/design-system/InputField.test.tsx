import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { InputField } from "./InputField";

describe("InputField", () => {
  it("wiąże label z inputem, więc da się go znaleźć po etykiecie", () => {
    render(<InputField label="Label" placeholder="Enter your email" />);

    expect(screen.getByLabelText("Label")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your email"),
    ).toBeInTheDocument();
  });

  it("przyjmuje tekst w stanie domyślnym", async () => {
    const user = userEvent.setup();
    render(<InputField label="Label" />);

    const input = screen.getByLabelText("Label");
    await user.type(input, "hello@4kpc.com");

    expect(input).toHaveValue("hello@4kpc.com");
  });

  it("w stanie error pokazuje komunikat, aria-invalid i opisuje nim pole", () => {
    render(
      <InputField
        label="Label"
        state="error"
        errorMessage="This field is required."
      />,
    );

    const input = screen.getByLabelText("Label");
    const message = screen.getByRole("alert");

    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(message).toHaveTextContent("This field is required.");
    expect(input.getAttribute("aria-describedby")).toBe(message.id);
  });

  it("poza stanem error nie renderuje komunikatu ani aria-invalid", () => {
    render(
      <InputField label="Label" errorMessage="This field is required." />,
    );

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(screen.getByLabelText("Label")).not.toHaveAttribute("aria-invalid");
  });

  it("w stanie disabled blokuje pole", () => {
    render(<InputField label="Label" state="disabled" />);

    expect(screen.getByLabelText("Label")).toBeDisabled();
  });

  it("każda instancja dostaje własne id, więc labele się nie mylą", () => {
    render(
      <>
        <InputField label="Pierwszy" />
        <InputField label="Drugi" />
      </>,
    );

    const first = screen.getByLabelText("Pierwszy");
    const second = screen.getByLabelText("Drugi");

    expect(first.id).not.toBe("");
    expect(first.id).not.toBe(second.id);
  });
});
