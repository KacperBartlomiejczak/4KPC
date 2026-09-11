type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  headingId: string;
  tone?: "light" | "dark";
  className?: string;
};

/** Nagłówek sekcji w rytmie planszy: eyebrow → tytuł → akcent → lead. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  headingId,
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className={["max-w-2xl", className ?? ""].filter(Boolean).join(" ")}>
      <p
        className={`text-caption tracking-[0.28em] uppercase ${
          isDark ? "text-primary-300" : "text-cta"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className={`mt-4 font-display text-heading-m leading-tight sm:text-heading-l ${
          isDark ? "text-white" : "text-neutral-950"
        }`}
      >
        {title}
      </h2>
      <div className="mt-5 h-1 w-12 bg-primary-500" />
      {lead ? (
        <p
          className={`mt-5 text-body-l ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
