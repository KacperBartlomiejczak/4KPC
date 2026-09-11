import { z } from "zod";

/**
 * Opis potrzeb wpisany przez użytkownika w hero („Gram w 4K i montuję filmy,
 * budżet 9000 zł”). To wejście od użytkownika, więc idzie przez zod — nawet
 * zanim trafi do modelu.
 */
export const buildBriefSchema = z.object({
  prompt: z
    .string()
    .trim()
    .min(10, "Napisz kilka słów więcej — minimum 10 znaków.")
    .max(500, "Za długi opis — zmieść się w 500 znakach."),
});

export type BuildBrief = z.infer<typeof buildBriefSchema>;
