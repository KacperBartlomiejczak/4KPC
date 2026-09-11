import type { BuildTier, UseCase } from "@/types/build";
import type { ProductCategory } from "@/types/product";

/**
 * Warstwa tłumaczeń dla enumów domenowych. Leży osobno, bo te same etykiety
 * czyta kilka sekcji (kafelki zastosowań, karta zestawu, karta podzespołu) —
 * trzymanie ich w jednym miejscu gwarantuje, że nie rozjadą się między sekcjami.
 */

export const useCaseLabels: Record<UseCase, string> = {
  "gaming-4k": "Granie w 4K",
  streaming: "Streaming",
  "video-editing": "Montaż wideo",
  "work-study": "Praca i studia",
  "ai-ml": "AI i modele lokalne",
};

export const buildTierLabels: Record<BuildTier, string> = {
  starter: "Start",
  performance: "Wydajność",
  ultra: "Ultra",
};

export const productCategoryLabels: Record<ProductCategory, string> = {
  gpu: "Karta graficzna",
  cpu: "Procesor",
  ram: "Pamięć RAM",
  storage: "Dysk SSD",
};
