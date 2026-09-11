import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { BuildBriefForm } from "./BuildBriefForm";

const label = /opisz, do czego potrzebujesz komputera/i;

describe("BuildBriefForm", () => {
  it("pokazuje pole z etykietą i przycisk", () => {
    render(<BuildBriefForm />);

    expect(screen.getByLabelText(label)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Dobierz zestaw" }),
    ).toBeInTheDocument();
  });

  it("odrzuca zbyt krótki opis i pokazuje komunikat ze schematu", async () => {
    const user = userEvent.setup();
    render(<BuildBriefForm />);

    await user.type(screen.getByLabelText(label), "gram");
    await user.click(screen.getByRole("button", { name: "Dobierz zestaw" }));

    expect(await screen.findByRole("alert")).toHaveTextContent(/10 znaków/i);
    expect(screen.getByLabelText(label)).toHaveAttribute("aria-invalid", "true");
  });

  it("po poprawnym opisie potwierdza go i kieruje do zestawów", async () => {
    const user = userEvent.setup();
    render(<BuildBriefForm />);

    await user.type(
      screen.getByLabelText(label),
      "Montuję filmy 4K i gram, budżet 12000 zł",
    );
    await user.click(screen.getByRole("button", { name: "Dobierz zestaw" }));

    expect(await screen.findByText(/Montuję filmy 4K i gram/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /zobacz zestawy/i })).toHaveAttribute(
      "href",
      "#zestawy",
    );
  });

  it("mówi wprost, że asystent jeszcze nie działa — zamiast udawać, że coś wysłał", async () => {
    const user = userEvent.setup();
    render(<BuildBriefForm />);

    await user.type(
      screen.getByLabelText(label),
      "Praca zdalna i lekki gaming, budżet 6000 zł",
    );
    await user.click(screen.getByRole("button", { name: "Dobierz zestaw" }));

    expect(await screen.findByText(/asystent ai jest w budowie/i)).toBeInTheDocument();
  });

  it("pozwala wrócić do edycji opisu", async () => {
    const user = userEvent.setup();
    render(<BuildBriefForm />);

    await user.type(
      screen.getByLabelText(label),
      "Gram w 4K, budżet do 9000 zł",
    );
    await user.click(screen.getByRole("button", { name: "Dobierz zestaw" }));
    await user.click(screen.getByRole("button", { name: "Zmień opis" }));

    expect(screen.getByLabelText(label)).toHaveValue("Gram w 4K, budżet do 9000 zł");
  });
});
