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
import Landing3MobileBottomCTA from "@/components/landing/Landing3MobileBottomCTA";
import { useSeo } from "@/hooks/useSeo";

const CALL_URL =
  "https://calendly.com/simone-calderoni-hommi/30min?utm_source=landing-3&utm_medium=meta&utm_campaign=guasto-sabato-sera";

export default function Landing3() {
  useSeo({
    title: "Tecnico in 4 ore anche sabato sera | Hommi",
    description:
      "Caldaia rotta alle 18:30 di sabato? Con Hommi l'ospite scansiona un QR code, un tecnico affidabile arriva in 4 ore. Anche di agosto. Tu continui la tua serata.",
    canonical: "https://www.hommi.it/landing-3",
  });

  return (
    <div className="landing-theme">
      <LandingNavbar />
      <HeroSection
        lines={["Sabato, 18:30.", "Caldaia rotta.", "Tu continui la tua serata."]}
        subtitle={
          <>
            Se gestisci immobili in affitto breve, conosci questo momento: trovare un tecnico la
            sera, capire chi è disponibile, contrattare il prezzo. Intanto l'ospite scrive la
            recensione. Con Hommi è una conversazione di 30 secondi: l'ospite scansiona un QR code,
            tecnico sul posto in 4 ore. Anche di sabato. Anche d'agosto.
          </>
        }
        ctaLabel="Prenota una call"
        ctaHref={CALL_URL}
        testimonial={{
          quote: "Guasto segnalato alle 20, tecnico alle 23:45. L'ospite ha dormito caldo.",
          author: "Elena",
          role: "Host, 6 appartamenti a Milano",
        }}
      />
      <PressBar />
      <FeatureShowcase />
      <HowItWorksSection />
      <ServicesSection />
      <Landing1Pricing />
      <ComparisonSection />
      <LandingTestimonials />
      <LandingFAQ />
      <CTASection
        title={
          <>
            Non lasciare che una caldaia rotta
            <br />
            rovini la tua recensione
          </>
        }
        subtitle="Tecnico in 4 ore, anche di sabato sera e ad agosto. Tu continui la tua serata."
        ctaLabel="Prenota una call"
        ctaHref={CALL_URL}
      />
      <LandingFooter />
      <Landing3MobileBottomCTA />
    </div>
  );
}
