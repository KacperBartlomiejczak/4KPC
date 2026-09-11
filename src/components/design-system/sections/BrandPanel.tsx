import { Wordmark } from "../Wordmark";

/**
 * Ciemny panel marki pod sekcją 10.
 * Zdjęcie gór z planszy nie jest dostępne w repo — zastępuje je gradient
 * na tokenach kolorów.
 */
export function BrandPanel({ className }: { className?: string }) {
  return (
    <aside
      className={[
        "relative flex min-w-0 flex-col justify-between overflow-hidden rounded-xl p-7",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        background:
          "linear-gradient(160deg, var(--color-primary-900) 0%, var(--color-neutral-950) 55%, var(--color-neutral-800) 100%)",
      }}
    >
      <div>
        <p className="text-caption tracking-[0.28em] text-neutral-400">
          MORE THAN COMPUTERS
        </p>
        <p className="mt-3 font-display text-heading-m leading-tight font-bold text-white uppercase">
          <span className="block">Higher</span>
          <span className="block">Possibilities.</span>
        </p>
        <div className="mt-4 h-1 w-12 bg-primary-500" />
      </div>

      <Wordmark className="mt-10" />
    </aside>
  );
}
