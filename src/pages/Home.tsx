import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PressBar from "@/components/sections/PressBar";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PricingHomeSection from "@/components/sections/PricingHomeSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import LandingFooter from "@/components/landing/LandingFooter";

const CTA_LABEL = "Prenota una call gratuita";
const CTA_HREF = "https://prenota.hommi.it/richiedi-accesso";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection
        lines={["Un guasto durante", "il soggiorno, risolto", "in poche ore."]}
        subtitle="Senza cercare, chiamare e coordinare un artigiano ogni volta. Apri un ticket su WhatsApp: interviene un tecnico assegnato che conosce già l'impianto di quell'alloggio, e ricevi un report con foto, costi e tempi da girare al proprietario. L'ospite resta soddisfatto, la tua reputazione intatta."
        ctaLabel={CTA_LABEL}
        ctaHref={CTA_HREF}
        testimonial={{
          quote: "Caldaia ko di sabato sera. Risolta prima del check-in successivo, e nessuna recensione negativa.",
          author: "Francesca",
          role: "PM, 14 alloggi tra Milano e Como",
        }}
      />
      <ClientLogosSection />
      <FeatureShowcase ctaLabel={CTA_LABEL} ctaHref={CTA_HREF} />
      <HowItWorksSection ctaLabel={CTA_LABEL} ctaHref={CTA_HREF} />
      <ServicesSection ctaLabel={CTA_LABEL} ctaHref={CTA_HREF} />
      <PricingHomeSection />
      <ComparisonSection ctaLabel={CTA_LABEL} ctaHref={CTA_HREF} />
      <TestimonialsSection />
      <PressBar />
      <CTASection
        title={<>Il prossimo guasto non deve<br />costarti una recensione.</>}
        subtitle="Property manager con portafogli distribuiti risolvono con Hommi in poche ore, senza costruire un team interno."
        ctaLabel={CTA_LABEL}
        ctaHref={CTA_HREF}
      />
      <LandingFooter />
    </>
  );
}
