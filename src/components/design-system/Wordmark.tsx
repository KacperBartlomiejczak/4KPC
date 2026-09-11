/** Logotyp 4KPC z planszy — używany w headerze i w panelu marki na dole. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="font-display text-heading-l leading-none font-bold text-white">
        4K<span className="text-primary-500">PC</span>
      </p>
      <p className="mt-1.5 text-caption tracking-[0.28em] text-neutral-400">
        BUILT FOR A HIGHER REALITY
      </p>
    </div>
  );
}
