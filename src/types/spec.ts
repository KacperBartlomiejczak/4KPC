import { z } from "zod";

/**
 * Chip specyfikacji — „24GB / GDDR6X” z karty produktu na planszy.
 * Wspólny dla podzespołu (`Product`) i gotowego zestawu (`Build`), bo to
 * dokładnie ten sam byt: krótka wartość plus etykieta, co ta wartość znaczy.
 */
export const specChipSchema = z.object({
  value: z.string().min(1),
  label: z.string().min(1),
});

export type SpecChip = z.infer<typeof specChipSchema>;
