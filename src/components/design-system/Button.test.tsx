import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import {
  buttonStateSchema,
  buttonVariantSchema,
} from "@/types/design-component";

import { Button } from "./Button";

const variants = buttonVariantSchema.options;
const states = buttonStateSchema.options;

describe("Button", () => {
  it("renderuje etykietę w każdej kombinacji wariantu i stanu z sekcji 09", () => {
    for (const variant of variants) {
      for (const state of states) {
        const { unmount } = render(
          <Button variant={variant} state={state}>
            Button
          </Button>,
        );

        expect(
          screen.getByRole("button", { name: /button/i }),
        ).toBeInTheDocument();

        unmount();
      }
    }
  });

  it("oznacza wariant i stan atrybutami data-* , żeby dało się je testować i stylować", () => {
    render(
      <Button variant="ghost" state="pressed">
        Button
      </Button>,
    );

    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("data-variant", "ghost");
    expect(button).toHaveAttribute("data-state", "pressed");
  });

  it("domyślnie jest klikalny", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={onClick}>Button</Button>);
    await user.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it("w stanie disabled ma atrybut disabled i nie reaguje na klik", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(
      <Button state="disabled" onClick={onClick}>
        Button
      </Button>,
    );

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("w stanie loading ma aria-busy, spinner i jest zablokowany", () => {
    render(<Button state="loading">Button</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveAttribute("aria-busy", "true");
    expect(button).toBeDisabled();
    const spinner = button.querySelector("svg");

    expect(spinner).not.toBeNull();
    // Button jest `inline-flex`, więc bez `shrink-0` spinner zgniata się
    // do szerokości 0 obok etykiety i znika — to już raz wyszło na stronie.
    expect(spinner).toHaveClass("shrink-0");
    expect(screen.getByRole("button", { name: /button/i })).toBeInTheDocument();
  });

  it("nie ustawia aria-busy poza stanem loading", () => {
    render(<Button state="hover">Button</Button>);

    expect(screen.getByRole("button")).not.toHaveAttribute("aria-busy");
  });
});
