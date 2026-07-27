import LandingNavbar from "@/components/landing/LandingNavbar";
import HeroSection from "@/components/sections/HeroSection";
import PressBar from "@/components/sections/PressBar";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Landing1Pricing from "@/components/landing/Landing1Pricing";
import ComparisonSection from "@/components/sections/ComparisonSection";
import LandingTestimonials from "@/components/landing/LandingTestimonials";
import LandingFAQ from "@/components/landing/LandingFAQ";
import CTASection from "@/components/sections/CTASection";
import LandingFooter from "@/components/landing/LandingFooter";
import Landing2MobileBottomCTA from "@/components/landing/Landing2MobileBottomCTA";
import { useSeo } from "@/hooks/useSeo";

const CALL_URL = "https://prenota.hommi.it/richiedi-accesso";


export default function Landing2() {
  useSeo({
    title: "Manutenzione affitti brevi in 4 ore | Hommi",
    description:
      "Negli affitti brevi i problemi vanno risolti in ore, non in giorni. Con Hommi un tecnico affidabile interviene entro 4 ore, anche in alta stagione.",
    canonical: "https://www.hommi.it/landing-2",
  });

  return (
    <div className="landing-theme">
      <LandingNavbar ctaLabel="Prenota una call" ctaHref={CALL_URL} />
      <HeroSection
        lines={["Negli affitti brevi", "i problemi si risolvono", "in ore, non in giorni."]}
        subtitle={
          <>
            Negli Airbnb ogni ora conta. Con Hommi basta un clic: un tecnico affidabile interviene
            entro 4 ore, anche in alta stagione. Tu non alzi il telefono — e gli ospiti spesso
            nemmeno se ne accorgono. Interventi urgenti, recensioni salve.
          </>
        }
        ctaLabel="Prenota una call"
        ctaHref={CALL_URL}
        testimonial={{
          quote: "Guasto segnalato alle 9, risolto prima del check-in delle 15.",
          author: "Andrea",
          role: "Host, 8 appartamenti a Milano",
        }}
      />
      <PressBar />
      <FeatureShowcase ctaLabel="Prenota una call" ctaHref={CALL_URL} />
      <HowItWorksSection ctaLabel="Prenota una call" ctaHref={CALL_URL} />
      <ServicesSection ctaLabel="Prenota una call" ctaHref={CALL_URL} />
      <Landing1Pricing ctaLabel="Prenota una call" ctaHref={CALL_URL} />
      <ComparisonSection ctaLabel="Prenota una call" ctaHref={CALL_URL} />
      <LandingTestimonials />
      <LandingFAQ />
      <CTASection
        title={
          <>
            Affida le emergenze a chi risponde
            <br />
            anche quando nessun altro lo fa
          </>
        }
        subtitle="Interventi urgenti entro 4 ore, anche in alta stagione. Recensioni salve."
        ctaLabel="Prenota una call"
        ctaHref={CALL_URL}
      />
      <LandingFooter />
      <Landing2MobileBottomCTA />
    </div>
  );
}
