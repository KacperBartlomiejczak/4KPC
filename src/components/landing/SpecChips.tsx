import type { SpecChip } from "@/types/spec";

/**
 * Rząd chipów specyfikacji — dokładnie jak na karcie produktu z planszy.
 * Świadomie bez `<ul>`: chipy siedzą wewnątrz kart, które same są elementami
 * listy sekcji, a zagnieżdżona lista rozmywa strukturę dla czytnika ekranu.
 */
export function SpecChips({ specs }: { specs: readonly SpecChip[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {specs.map((spec) => (
        <div
          key={`${spec.value}-${spec.label}`}
          className="min-w-0 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2"
        >
          <span className="block text-label-m text-neutral-950">
            {spec.value}
          </span>
          <span className="block text-caption text-neutral-400">
            {spec.label}
          </span>
        </div>
      ))}
    </div>
  );
}
