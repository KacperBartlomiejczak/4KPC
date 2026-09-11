import { buildSchema, type Build } from "@/types/build";

import { BuildCard } from "./BuildCard";
import { SectionHeading } from "./SectionHeading";

/**
 * Wyróżniamy półkę środkową — na landingu ma być dokładnie jedna taka karta,
 * a `tier` jest unią literałów, więc kompilator pilnuje, że porównanie ma sens
 * (surowy `BuildId` jest brandowany i nie da się go porównać z literałem).
 */
const highlightedTier = "performance";

export const featuredBuilds: readonly Build[] = [
  {
    id: "build-core",
    name: "4KPC Core",
    tier: "starter",
    useCase: "work-study",
    tagline: "Cicho i oszczędnie — do pracy, nauki i codziennych zadań.",
    pricePln: 4499,
    specs: [
      { value: "Ryzen 5 7600", label: "procesor" },
      { value: "RTX 4060", label: "grafika" },
      { value: "32 GB", label: "DDR5" },
    ],
    imagePath: "/media/build-starter.jpg",
  },
  {
    id: "build-prime",
    name: "4KPC Prime",
    tier: "performance",
    useCase: "gaming-4k",
    tagline: "Wysokie klatki w 4K i zapas na kolejne premiery.",
    pricePln: 9499,
    specs: [
      { value: "Ryzen 7 7800X3D", label: "procesor" },
      { value: "RTX 4080 SUPER", label: "grafika" },
      { value: "32 GB", label: "DDR5" },
    ],
    imagePath: "/media/build-performance.jpg",
  },
  {
    id: "build-apex",
    name: "4KPC Apex",
    tier: "ultra",
    useCase: "ai-ml",
    tagline: "Lokalne modele i montaż 8K bez plików proxy.",
    pricePln: 17999,
    specs: [
      { value: "Ryzen 9 7950X", label: "procesor" },
      { value: "RTX 4090", label: "grafika" },
      { value: "128 GB", label: "DDR5" },
    ],
    imagePath: "/media/build-ultra.jpg",
  },
].map((build) => buildSchema.parse(build));

export function FeaturedBuildsSection() {
  return (
    <section
      id="zestawy"
      aria-labelledby="zestawy-heading"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <SectionHeading
          headingId="zestawy-heading"
          eyebrow="Gotowe zestawy"
          title="Zestawy, które możesz wziąć od ręki."
          lead="Trzy półki wydajności na start. Asystent i tak dopasuje je do tego, co wpiszesz w briefie."
        />

        <ul className="mt-12 grid gap-4 lg:grid-cols-3">
          {featuredBuilds.map((build) => (
            <li key={build.id} className="min-w-0">
              <BuildCard
                build={build}
                highlighted={build.tier === highlightedTier}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
