/**
 * Treść i wartości przepisane 1:1 z `design/design-system.png`.
 * Klasy Tailwinda trzymamy tu jako pełne literały (`"shadow-level-1"`,
 * `"rounded-md"`), bo skaner Tailwinda nie widzi nazw sklejanych w runtime.
 */

export const colorGroups = [
  {
    label: "Primary",
    tokens: [
      { name: "900", variable: "--color-primary-900", hex: "#07111F" },
      { name: "700", variable: "--color-primary-700", hex: "#102A46" },
      { name: "500", variable: "--color-primary-500", hex: "#1976D2" },
      { name: "400", variable: "--color-primary-400", hex: "#42A5F5" },
      { name: "300", variable: "--color-primary-300", hex: "#90CAF9" },
    ],
  },
  {
    label: "Secondary",
    tokens: [
      { name: "700", variable: "--color-secondary-700", hex: "#006778" },
      { name: "500", variable: "--color-secondary-500", hex: "#00B8DA" },
      { name: "400", variable: "--color-secondary-400", hex: "#26C6DA" },
      { name: "300", variable: "--color-secondary-300", hex: "#80DEEA" },
    ],
  },
  {
    label: "Neutral",
    tokens: [
      { name: "950", variable: "--color-neutral-950", hex: "#05070A" },
      { name: "800", variable: "--color-neutral-800", hex: "#141A21" },
      { name: "600", variable: "--color-neutral-600", hex: "#3A4652" },
      { name: "400", variable: "--color-neutral-400", hex: "#8D99A6" },
      { name: "200", variable: "--color-neutral-200", hex: "#D8DEE4" },
      { name: "100", variable: "--color-neutral-100", hex: "#EEF1F4" },
      { name: "50", variable: "--color-neutral-50", hex: "#F8FAFC" },
    ],
  },
  {
    label: "Semantic / Feedback",
    tokens: [
      { name: "Success", variable: "--color-success", hex: "#16A34A" },
      { name: "Warning", variable: "--color-warning", hex: "#F59E0B" },
      { name: "Error", variable: "--color-error", hex: "#DC2626" },
      { name: "Info", variable: "--color-info", hex: "#2563EB" },
    ],
  },
  {
    label: "CTA (Primary Action)",
    tokens: [
      { name: "Default", variable: "--color-cta", hex: "#1976D2" },
      { name: "Hover", variable: "--color-cta-hover", hex: "#1565C0" },
      { name: "Pressed", variable: "--color-cta-pressed", hex: "#0D47A1" },
      { name: "Disabled", variable: "--color-cta-disabled", hex: "#B7C0C9" },
    ],
  },
] as const;

export const typeScale = [
  { name: "Display XL", size: 72, lineHeight: 80, weight: 700 },
  { name: "Display L", size: 64, lineHeight: 72, weight: 700 },
  { name: "Display M", size: 56, lineHeight: 64, weight: 700 },
  { name: "Heading XL", size: 48, lineHeight: 56, weight: 700 },
  { name: "Heading L", size: 40, lineHeight: 48, weight: 700 },
  { name: "Heading M", size: 32, lineHeight: 40, weight: 600 },
  { name: "Heading S", size: 24, lineHeight: 32, weight: 600 },
  { name: "Title", size: 20, lineHeight: 28, weight: 600 },
  { name: "Body L", size: 18, lineHeight: 28, weight: 400 },
  { name: "Body M", size: 16, lineHeight: 24, weight: 400 },
  { name: "Body S", size: 14, lineHeight: 20, weight: 400 },
  { name: "Label L", size: 14, lineHeight: 20, weight: 600 },
  { name: "Label M", size: 12, lineHeight: 16, weight: 600 },
  { name: "Caption", size: 11, lineHeight: 16, weight: 500 },
] as const;

/** Skala odstępów (baza 8). Krok 1–12, wartość w px. */
export const spacingScale = [
  4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160,
] as const;

export const gridSpec = [
  { label: "Columns", value: "12" },
  { label: "Gutter", value: "32px" },
  { label: "Side margin", value: "160px" },
  { label: "Max content", value: "3520px" },
] as const;

export const radiusTokens = [
  { label: "4px", name: "S", className: "rounded-sm" },
  { label: "8px", name: "M", className: "rounded-md" },
  { label: "12px", name: "L", className: "rounded-lg" },
  { label: "16px", name: "XL", className: "rounded-xl" },
  { label: "24px", name: "2XL", className: "rounded-2xl" },
  { label: "999px", name: "Full", className: "rounded-full" },
] as const;

export const elevationTokens = [
  {
    name: "Level 0",
    offset: "None",
    color: "",
    className: "shadow-level-0 border border-neutral-200",
  },
  {
    name: "Level 1",
    offset: "0 2px 8px",
    color: "rgba(5, 7, 10, 0.08)",
    className: "shadow-level-1",
  },
  {
    name: "Level 2",
    offset: "0 8px 24px",
    color: "rgba(5, 7, 10, 0.12)",
    className: "shadow-level-2",
  },
  {
    name: "Level 3",
    offset: "0 16px 48px",
    color: "rgba(5, 7, 10, 0.18)",
    className: "shadow-level-3",
  },
] as const;

export const breakpoints = [
  { name: "Mobile", range: "320–767", columns: "4 columns", margin: "16px margin" },
  { name: "Tablet", range: "768–1439", columns: "8 columns", margin: "48px margin" },
  { name: "Desktop", range: "1440–3840", columns: "12 columns", margin: "160px margin" },
] as const;

export const motionTokens = [
  { label: "Micro", value: "120–160ms" },
  { label: "Component", value: "180–240ms" },
  { label: "Large", value: "300–400ms" },
  { label: "Easing", value: "cubic-bezier(0.2, 0.8, 0.2, 1)" },
] as const;

export const designPrinciples = [
  {
    index: "01",
    title: ["Precision", "by Default"],
    description: ["Consistent. Intentional.", "Engineered."],
  },
  {
    index: "02",
    title: ["Performance", "Is Visible"],
    description: ["Fast. Powerful.", "Confident."],
  },
  {
    index: "03",
    title: ["Premium", "Simplicity"],
    description: ["Sophisticated.", "Clear. Effortless."],
  },
] as const;

export const implementationGuidelines = [
  { title: "Use design tokens", description: "Keep the same naming in Figma and code." },
  { title: "Accessible by default", description: "Follow WCAG 2.2 AA standards." },
  { title: "Responsive design", description: "Build for mobile, tablet and desktop." },
  { title: "Component driven", description: "Use reusable components with clear API." },
  { title: "Consistent naming", description: "Use predictable, semantic names." },
  { title: "Document everything", description: "Include usage, states and examples." },
] as const;

export const productSpecs = [
  { value: "24GB", label: "GDDR6X" },
  { value: "4K", label: "Ready" },
  { value: "DLSS 3", label: "AI Powered" },
] as const;
