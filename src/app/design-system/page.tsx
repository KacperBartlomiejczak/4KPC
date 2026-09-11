import type { Metadata } from "next";

import { BorderRadiusSection } from "@/components/design-system/sections/BorderRadiusSection";
import { BrandPanel } from "@/components/design-system/sections/BrandPanel";
import { BreakpointsSection } from "@/components/design-system/sections/BreakpointsSection";
import { ColorPaletteSection } from "@/components/design-system/sections/ColorPaletteSection";
import { ComponentsSection } from "@/components/design-system/sections/ComponentsSection";
import { ElevationSection } from "@/components/design-system/sections/ElevationSection";
import { GuidelinesSection } from "@/components/design-system/sections/GuidelinesSection";
import { HeroPanel } from "@/components/design-system/sections/HeroPanel";
import { MotionSection } from "@/components/design-system/sections/MotionSection";
import { PrinciplesSection } from "@/components/design-system/sections/PrinciplesSection";
import { SiteHeader } from "@/components/design-system/sections/SiteHeader";
import { SpacingGridSection } from "@/components/design-system/sections/SpacingGridSection";
import { TypographySection } from "@/components/design-system/sections/TypographySection";

export const metadata: Metadata = {
  title: "4KPC — Design System v1.0",
  description: "Components for a higher standard.",
};

/**
 * Plansza design systemu 4KPC — układ 1:1 z `design/design-system.png`.
 * Ten plik odpowiada wyłącznie za rozkład sekcji na siatce; cała treść
 * siedzi w `@/components/design-system/sections`.
 */
export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-neutral-100 font-body text-neutral-950">
      <SiteHeader />

      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 p-4 sm:p-5">
        <div className="grid gap-4 lg:grid-cols-12">
          <PrinciplesSection className="lg:col-span-7" />
          <HeroPanel className="lg:col-span-5" />
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <ColorPaletteSection className="lg:col-span-6" />
          <TypographySection className="lg:col-span-6" />
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <SpacingGridSection className="lg:col-span-5" />

          <div className="grid min-w-0 content-start gap-4 lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-12">
              <BorderRadiusSection className="sm:col-span-4" />
              <ElevationSection className="sm:col-span-8" />
            </div>
            <div className="grid gap-4 sm:grid-cols-12">
              <BreakpointsSection className="sm:col-span-7" />
              <MotionSection className="sm:col-span-5" />
            </div>
          </div>
        </div>

        <ComponentsSection />

        <div className="grid gap-4 lg:grid-cols-12">
          <GuidelinesSection className="lg:col-span-8" />
          <BrandPanel className="lg:col-span-4" />
        </div>
      </div>
    </main>
  );
}
