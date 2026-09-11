import { existsSync } from "node:fs";
import path from "node:path";

import Image from "next/image";

const publicDir = path.join(process.cwd(), "public");

/**
 * Czy plik faktycznie leży w `public/`. Dzięki temu landing nie pokazuje
 * zepsutych obrazków, dopóki zdjęcia nie trafią do repo — a gdy trafią,
 * wchodzą same, bez przełącznika w kodzie.
 */
export function hasPublicAsset(src: string): boolean {
  if (!src.startsWith("/")) {
    return false;
  }

  const target = path.resolve(publicDir, `.${src}`);

  // Zabezpieczenie przed wyjściem poza `public/` (`/../package.json`).
  if (!target.startsWith(`${publicDir}${path.sep}`)) {
    return false;
  }

  return existsSync(target);
}

type ImageSlotProps = {
  /** Ścieżka względem `public/`, np. `/media/hero-case.jpg`. */
  src: string;
  alt: string;
  /** Proporcje i zaokrąglenie ustawia rodzic (`aspect-[4/5] rounded-xl`). */
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function ImageSlot({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false,
}: ImageSlotProps) {
  const isAvailable = hasPublicAsset(src);

  return (
    <div
      className={[
        "relative isolate overflow-hidden bg-neutral-950",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {isAvailable ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div
          data-slot="placeholder"
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 110% at 75% 25%, var(--color-primary-700) 0%, var(--color-primary-900) 42%, var(--color-neutral-950) 78%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "repeating-linear-gradient(115deg, rgba(255,255,255,0.14) 0px, rgba(255,255,255,0.14) 1px, transparent 1px, transparent 22px)",
            }}
          />
          {/* Znak dekoracyjny rysowany, nie pisany — gdyby był tekstem,
              wchodziłby w wyniki zapytań o treść karty (np. chip „4K”). */}
          <svg
            viewBox="0 0 120 120"
            className="absolute top-1/2 left-1/2 size-24 -translate-x-1/2 -translate-y-1/2 text-white/15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="26" y="26" width="68" height="68" rx="10" />
            <rect x="46" y="46" width="28" height="28" rx="4" />
            <path d="M60 8v18M60 94v18M8 60h18M94 60h18" />
          </svg>
          {process.env.NODE_ENV === "development" ? (
            <span className="absolute bottom-2 left-2 rounded-sm bg-neutral-950/70 px-2 py-1 font-mono text-caption text-neutral-400">
              {`public${src}`}
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
}
