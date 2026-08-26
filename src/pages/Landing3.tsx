import LandingNavbar from "@/components/landing/LandingNavbar";
import HeroSection from "@/components/sections/HeroSection";
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
import Landing3MobileBottomCTA from "@/components/landing/Landing3MobileBottomCTA";
import { useSeo } from "@/hooks/useSeo";

const CALL_URL = "https://prenota.hommi.it/richiedi-accesso";


export default function Landing3() {
  useSeo({
    title: "Tecnico in 4 ore anche sabato sera | Hommi",
    description:
      "Caldaia rotta alle 18:30 di sabato? Con Hommi l'ospite scansiona un QR code, un tecnico affidabile arriva in 4 ore. Anche di agosto. Tu continui la tua serata.",
    canonical: "https://www.hommi.it/landing-3",
  });

  return (
    <div className="landing-theme">
      <LandingNavbar ctaLabel="Prenota una call gratuita" ctaHref={CALL_URL} />
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
        ctaLabel="Prenota una call gratuita"
        ctaHref={CALL_URL}
        testimonial={{
          quote: "Guasto segnalato alle 20, tecnico alle 23:45. L'ospite ha dormito caldo.",
          author: "Elena",
          role: "Host, 6 appartamenti a Milano",
        }}
      />
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
            Non lasciare che una caldaia rotta
            <br />
            rovini la tua recensione
          </>
        }
        subtitle="Tecnico in 4 ore, anche di sabato sera e ad agosto. Tu continui la tua serata."
        ctaLabel="Prenota una call gratuita"
        ctaHref={CALL_URL}
      />
      <LandingFooter />
      <Landing3MobileBottomCTA />
    </div>
  );
}
