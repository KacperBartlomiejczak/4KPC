import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { buildSchema } from "@/types/build";

import { FeaturedBuildsSection, featuredBuilds } from "./FeaturedBuildsSection";

describe("FeaturedBuildsSection", () => {
  it("siedzi pod kotwicą #zestawy", () => {
    const { container } = render(<FeaturedBuildsSection />);

    expect(container.querySelector("#zestawy")).not.toBeNull();
  });

  it("wszystkie zestawy przechodzą przez schemat domenowy", () => {
    for (const build of featuredBuilds) {
      expect(buildSchema.safeParse(build).success).toBe(true);
    }
  });

  it("pokazuje trzy zestawy, po jednym na każdą półkę wydajnościową", () => {
    render(<FeaturedBuildsSection />);

    expect(screen.getAllByRole("listitem")).toHaveLength(3);
    expect(new Set(featuredBuilds.map((build) => build.tier)).size).toBe(3);
  });

  it("wyróżnia dokładnie jeden zestaw", () => {
    render(<FeaturedBuildsSection />);

    expect(screen.getAllByText(/najczęściej wybierany/i)).toHaveLength(1);
  });
});
