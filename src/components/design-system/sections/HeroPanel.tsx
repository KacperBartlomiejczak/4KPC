/**
 * Ciemny panel marketingowy obok sekcji 01.
 * Oryginalne zdjęcie obudowy nie jest dostępne w repo — tło robi gradient
 * zbudowany na tokenach kolorów.
 */
export function HeroPanel({ className }: { className?: string }) {
  return (
    <aside
      className={[
        "relative flex min-w-0 flex-col justify-center overflow-hidden rounded-xl p-8",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        background:
          "radial-gradient(120% 120% at 78% 30%, var(--color-primary-700) 0%, var(--color-primary-900) 38%, var(--color-neutral-950) 74%)",
      }}
    >
      <p className="text-caption tracking-[0.28em] text-neutral-400">
        HIGH PERFORMANCE COMPUTERS
      </p>
      <p className="mt-4 font-display text-heading-l leading-[1.05] font-bold text-white uppercase">
        <span className="block">Built</span>
        <span className="block">Without</span>
        <span className="block">Limits.</span>
      </p>
      <div className="mt-5 h-1 w-12 bg-primary-500" />
      <p className="mt-5 max-w-xs text-body-s text-neutral-400">
        4K performance for creators, professionals and everyone who demands
        more.
      </p>
      <button
        type="button"
        className="mt-7 inline-flex w-fit cursor-pointer items-center rounded-full bg-cta px-6 py-2.5 text-label-l text-white shadow-level-2 transition-colors duration-component-min ease-4kpc hover:bg-cta-hover active:bg-cta-pressed"
      >
        Explore Systems
      </button>
    </aside>
  );
}
