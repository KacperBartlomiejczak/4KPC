import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ImageSlot, hasPublicAsset } from "./ImageSlot";

describe("hasPublicAsset", () => {
  it("widzi plik, który leży w public/", () => {
    expect(hasPublicAsset("/media/.gitkeep")).toBe(true);
  });

  it("zwraca false dla pliku, którego nie podrzucono", () => {
    expect(hasPublicAsset("/media/nie-ma-takiego-pliku.jpg")).toBe(false);
  });

  it("nie daje się wyprowadzić poza public/", () => {
    expect(hasPublicAsset("/../package.json")).toBe(false);
  });
});

describe("ImageSlot", () => {
  it("renderuje obrazek, gdy asset istnieje", () => {
    render(<ImageSlot src="/media/.gitkeep" alt="Obudowa 4KPC" />);

    expect(screen.getByRole("img", { name: "Obudowa 4KPC" })).toBeInTheDocument();
  });

  it("bez assetu pokazuje dekoracyjny placeholder zamiast zepsutego obrazka", () => {
    const { container } = render(
      <ImageSlot src="/media/brak.jpg" alt="Obudowa 4KPC" />,
    );

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(container.querySelector("[data-slot='placeholder']")).not.toBeNull();
  });
});
