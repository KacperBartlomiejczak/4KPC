import { AiAssistantSection } from "@/components/landing/AiAssistantSection";
import { FeaturedBuildsSection } from "@/components/landing/FeaturedBuildsSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { PrinciplesSection } from "@/components/landing/PrinciplesSection";
import { ProductsSection } from "@/components/landing/ProductsSection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteNav } from "@/components/landing/SiteNav";
import { UseCasesSection } from "@/components/landing/UseCasesSection";

/**
 * Landing 4KPC. Ten plik odpowiada wyłącznie za kolejność sekcji —
 * cała treść i układ siedzą w `@/components/landing`.
 */
export default function Home() {
  return (
    <>
      <SiteNav />

      <main className="flex-1">
        <HeroSection />
        <PrinciplesSection />
        <HowItWorksSection />
        <UseCasesSection />
        <ProductsSection />
        <FeaturedBuildsSection />
        <AiAssistantSection />
        <FinalCtaSection />
      </main>

      <SiteFooter />
    </>
  );
}
