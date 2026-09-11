import { z } from "zod";

/**
 * Warianty i stany komponentów z sekcji 09 planszy `design/design-system.png`.
 *
 * Wszystko jako unie literałów (`z.enum` → `'a' | 'b'`), nie TS `enum` —
 * dzięki temu te same wartości da się bezpiecznie przepuścić przez zod,
 * gdy trafią kiedyś do formularza albo do odpowiedzi modelu.
 */

export const buttonVariantSchema = z.enum(["primary", "secondary", "ghost"]);

export type ButtonVariant = z.infer<typeof buttonVariantSchema>;

export const buttonStateSchema = z.enum([
  "default",
  "hover",
  "pressed",
  "disabled",
  "loading",
]);

export type ButtonState = z.infer<typeof buttonStateSchema>;

export const inputStateSchema = z.enum([
  "default",
  "focus",
  "error",
  "disabled",
]);

export type InputState = z.infer<typeof inputStateSchema>;

export const cardVariantSchema = z.enum([
  "default",
  "outlined",
  "elevated",
  "hover",
  "selected",
  "disabled",
]);

export type CardVariant = z.infer<typeof cardVariantSchema>;

/** Chip ze specyfikacją na karcie produktu ("24GB / GDDR6X"). */
export const productSpecSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
});

export type ProductSpec = z.infer<typeof productSpecSchema>;
