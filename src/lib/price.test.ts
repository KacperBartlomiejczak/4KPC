import { describe, expect, it } from "vitest";

import { formatPricePln } from "./price";

describe("formatPricePln", () => {
  it("formatuje cenę po polsku, z separatorem tysięcy i złotówką", () => {
    // Separator w pl-PL to twarda spacja (U+00A0), więc porównujemy wzorcem,
    // a nie literałem — inaczej test wywraca się na innym ICU.
    expect(formatPricePln(9499)).toMatch(/^9\s499\szł$/u);
  });

  it("nie pokazuje groszy — landing operuje na pełnych złotówkach", () => {
    expect(formatPricePln(799)).toMatch(/^799\szł$/u);
    expect(formatPricePln(799)).not.toContain(",");
  });

  it("radzi sobie z ceną sześciocyfrową", () => {
    expect(formatPricePln(123456)).toMatch(/^123\s456\szł$/u);
  });
});
