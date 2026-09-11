import type { SVGProps } from "react";

/**
 * Ikony przerysowane z planszy `design/design-system.png`.
 * Wszystkie rysują się `currentColor`, żeby kolor brał się z tokenów tekstu.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

/** 01 — Precision by Default. */
export function CrosshairIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      <circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** 01 — Performance Is Visible / 08 — Motion. */
export function BoltIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13.5 2 4.5 13.5h6L10 22l9.5-11.5h-6L13.5 2Z" />
    </svg>
  );
}

/** 01 — Premium Simplicity. */
export function OverlapIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9.5" cy="14" r="6" />
      <circle cx="15" cy="9.5" r="5.5" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

/* ------------------------------------------------------------ 07 Breakpoints */

export function MobileIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M10.75 18.5h2.5" />
    </svg>
  );
}

export function TabletIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="2.5" width="16" height="19" rx="2.5" />
      <path d="M10.5 18.75h3" />
    </svg>
  );
}

export function DesktopIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M8.5 21h7M12 17v4" />
    </svg>
  );
}

/* ------------------------------------------------- 10 Implementation Guidelines */

export function TokensIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" />
      <path d="M4.5 12v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6" />
    </svg>
  );
}

export function AccessibilityIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="4" r="1.75" />
      <path d="M5 8.5h14M12 8.5v6M12 14.5 8.5 21M12 14.5 15.5 21" />
    </svg>
  );
}

export function ResponsiveIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="5" width="12" height="10" rx="1.75" />
      <rect x="16" y="9" width="5.5" height="10" rx="1.5" />
      <path d="M6 19h5" />
    </svg>
  );
}

export function ComponentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="2.5" width="6" height="6" rx="1.5" />
      <rect x="2.5" y="15.5" width="6" height="6" rx="1.5" />
      <rect x="15.5" y="15.5" width="6" height="6" rx="1.5" />
      <path d="M12 8.5v3M12 11.5H5.5v4M12 11.5h6.5v4" />
    </svg>
  );
}

export function TagIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 11.5V4.5a1 1 0 0 1 1-1h7l9 9-8 8-9-9Z" />
      <circle cx="7.75" cy="7.75" r="1.25" />
    </svg>
  );
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14 2.5H6.5a1.5 1.5 0 0 0-1.5 1.5v16a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V7.5L14 2.5Z" />
      <path d="M13.75 2.5v5.25H19M8.5 13h7M8.5 17h5" />
    </svg>
  );
}

/* ------------------------------------------------------------- 09 Components */

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-7.5-4.6-7.5-9.75A4.25 4.25 0 0 1 12 7.5a4.25 4.25 0 0 1 7.5 2.75C19.5 15.4 12 20 12 20Z" />
    </svg>
  );
}

export function ChipIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4.5" y="4.5" width="15" height="15" rx="2" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

/** Placeholder karty produktu — oryginalne zdjęcie GPU nie jest dostępne w repo. */
export function GraphicsCardPlaceholder(props: IconProps) {
  return (
    <svg
      viewBox="0 0 320 140"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <rect x="10" y="26" width="300" height="86" rx="10" fill="#141A21" />
      <rect
        x="10"
        y="26"
        width="300"
        height="86"
        rx="10"
        stroke="#3A4652"
        strokeWidth="1.5"
      />
      <rect x="0" y="40" width="18" height="34" rx="3" fill="#3A4652" />
      <rect x="18" y="112" width="120" height="10" rx="2" fill="#3A4652" />
      {[85, 160, 235].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="69" r="33" fill="#05070A" />
          <circle
            cx={cx}
            cy="69"
            r="33"
            stroke="#3A4652"
            strokeWidth="1.5"
          />
          {Array.from({ length: 7 }, (_, index) => {
            const angle = (index / 7) * Math.PI * 2;
            return (
              <path
                key={index}
                d={`M${cx} ${69} L${cx + Math.cos(angle) * 29} ${
                  69 + Math.sin(angle) * 29
                }`}
                stroke="#3A4652"
                strokeWidth="7"
                strokeLinecap="round"
              />
            );
          })}
          <circle cx={cx} cy="69" r="9" fill="#141A21" />
          <circle cx={cx} cy="69" r="9" stroke="#8D99A6" strokeWidth="1.25" />
        </g>
      ))}
    </svg>
  );
}
