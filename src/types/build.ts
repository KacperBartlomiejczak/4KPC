import { z } from "zod";

import { specChipSchema } from "./spec";

/**
 * Gotowy zestaw komputerowy. Ten sam kształt wróci później z bazy (Drizzle/Neon)
 * i z odpowiedzi modelu, dlatego `BuildId` jest brandowany — żeby nie dało się
 * go podstawić tam, gdzie ma być `UserId` czy `ProductId`.
 */

export const buildIdSchema = z.string().min(1).brand<"BuildId">();

export type BuildId = z.infer<typeof buildIdSchema>;

/** Do czego komputer ma służyć — sterowniki doboru po stronie AI i filtrów. */
export const useCaseSchema = z.enum([
  "gaming-4k",
  "streaming",
  "video-editing",
  "work-study",
  "ai-ml",
]);

export type UseCase = z.infer<typeof useCaseSchema>;

/** Półka wydajnościowa zestawu. */
export const buildTierSchema = z.enum(["starter", "performance", "ultra"]);

export type BuildTier = z.infer<typeof buildTierSchema>;

export const buildSchema = z.object({
  id: buildIdSchema,
  name: z.string().min(1),
  tier: buildTierSchema,
  useCase: useCaseSchema,
  tagline: z.string().min(1),
  /** Cena w pełnych złotówkach. */
  pricePln: z.int().positive(),
  specs: z.array(specChipSchema).min(1),
  /** Ścieżka względem `public/`, np. `/media/build-ultra.jpg`. */
  imagePath: z.string().startsWith("/"),
});

export type Build = z.infer<typeof buildSchema>;
