const priceFormatter = new Intl.NumberFormat("pl-PL", {
  style: "currency",
  currency: "PLN",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
  // Bez tego `pl-PL` nie grupuje czterocyfrowych kwot („9499 zł”), a ceny
  // zestawów siedzą właśnie w tym przedziale i mają się czytać na raz.
  useGrouping: "always",
});

/** Cena w pełnych złotówkach → „9 499 zł”. */
export function formatPricePln(pricePln: number): string {
  return priceFormatter.format(pricePln);
}
