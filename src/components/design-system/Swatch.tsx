type SwatchProps = {
  /** Etykieta z planszy: "900", "Success", "Hover". */
  name: string;
  /**
   * Zmienna z `globals.css` — to ona maluje próbkę. `hex` jest tylko podpisem,
   * więc każda rozjazd między tokenem a podpisem od razu widać na stronie.
   */
  variable: string;
  hex: string;
};

export function Swatch({ name, variable, hex }: SwatchProps) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <div
        className="h-14 w-full rounded-md border border-neutral-200"
        style={{ backgroundColor: `var(${variable})` }}
      />
      <div className="min-w-0">
        <p className="text-label-m text-neutral-950">{name}</p>
        <p className="truncate text-caption text-neutral-600">{hex}</p>
      </div>
    </div>
  );
}
