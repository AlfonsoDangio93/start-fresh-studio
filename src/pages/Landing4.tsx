import LandingNavbar from "@/components/landing/LandingNavbar";
import Landing4Hero from "@/components/landing/Landing4Hero";
import PressBar from "@/components/sections/PressBar";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Landing1Pricing from "@/components/landing/Landing1Pricing";
import ComparisonSection from "@/components/sections/ComparisonSection";
import LandingTestimonials from "@/components/landing/LandingTestimonials";
import LandingFAQ from "@/components/landing/LandingFAQ";
import CTASection from "@/components/sections/CTASection";
import LandingFooter from "@/components/landing/LandingFooter";
import Landing4MobileBottomCTA from "@/components/landing/Landing4MobileBottomCTA";
import { useSeo } from "@/hooks/useSeo";

const CALL_URL = "#hero-form";
const CTA_LABEL = "Attiva 3 mesi di prova";


export default function Landing4() {
  useSeo({
    title: "La rete di tecnici che non va mai in ferie | Hommi",
    description:
      "Il tuo manutentore è bravissimo, ma è uno solo. Hommi è la rete di tecnici per il tuo affitto breve: intervento entro 4 ore, prezzo chiaro, tutto tracciato. Più immobili gestisci, più ti serve un sistema.",
    canonical: "https://www.hommi.it/landing-4",
  });

  return (
    <div className="landing-theme">
      <LandingNavbar ctaLabel={CTA_LABEL} ctaHref={CALL_URL} />
      <Landing4Hero />
      <ClientLogosSection />
      <FeatureShowcase ctaLabel="Prenota una call gratuita" ctaHref={CALL_URL} />
      <HowItWorksSection ctaLabel="Prenota una call gratuita" ctaHref={CALL_URL} />
      <ServicesSection ctaLabel="Prenota una call gratuita" ctaHref={CALL_URL} />
      <Landing1Pricing ctaLabel="Prenota una call gratuita" ctaHref={CALL_URL} />
      <ComparisonSection ctaLabel="Prenota una call gratuita" ctaHref={CALL_URL} />
      <LandingTestimonials />
      <PressBar />
      <LandingFAQ />
      <CTASection
        title={
          <>
            Più immobili gestisci,
            <br />
            più ti serve un sistema — non una persona
          </>
        }
        subtitle="Hommi è la rete di tecnici per il tuo affitto breve. Intervento entro 4 ore, prezzo chiaro, tutto tracciato."
        ctaLabel="Prenota una call gratuita"
        ctaHref={CALL_URL}
      />
      <LandingFooter />
      <Landing4MobileBottomCTA />
    </div>
  );
}
