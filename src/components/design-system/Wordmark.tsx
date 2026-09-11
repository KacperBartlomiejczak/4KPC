type WordmarkProps = {
  className?: string;
  /**
   * `lg` to logotyp z planszy (header i panel marki). `sm` jest dla pasków
   * nawigacji, gdzie 40px wersalik nie ma prawa się zmieścić.
   */
  size?: "lg" | "sm";
};

/** Logotyp 4KPC z planszy — używany w headerze i w panelu marki na dole. */
export function Wordmark({ className, size = "lg" }: WordmarkProps) {
  const isSmall = size === "sm";

  return (
    <div className={className}>
      <p
        className={`font-display leading-none font-bold text-white ${
          isSmall ? "text-heading-s" : "text-heading-l"
        }`}
      >
        4K<span className="text-primary-500">PC</span>
      </p>
      <p
        className={`text-caption text-neutral-400 ${
          isSmall ? "mt-1 tracking-[0.18em]" : "mt-1.5 tracking-[0.28em]"
        }`}
      >
        BUILT FOR A HIGHER REALITY
      </p>
    </div>
  );
}
