import { z } from "zod";

import { specChipSchema } from "./spec";

/**
 * Pojedynczy podzespół. Ten kształt przyjdzie docelowo z Ice Cat API
 * i z bazy — landing jest tylko jego pierwszym konsumentem.
 */

export const productIdSchema = z.string().min(1).brand<"ProductId">();

export type ProductId = z.infer<typeof productIdSchema>;

export const productCategorySchema = z.enum([
  "gpu",
  "cpu",
  "ram",
  "storage",
]);

export type ProductCategory = z.infer<typeof productCategorySchema>;

export const productSchema = z.object({
  id: productIdSchema,
  name: z.string().min(1),
  category: productCategorySchema,
  tagline: z.string().min(1),
  /** Cena w pełnych złotówkach. Grosze wchodzą dopiero przy koszyku. */
  pricePln: z.int().positive(),
  specs: z.array(specChipSchema).min(1),
  /** Ścieżka względem `public/`, np. `/media/product-gpu.jpg`. */
  imagePath: z.string().startsWith("/"),
});

export type Product = z.infer<typeof productSchema>;
