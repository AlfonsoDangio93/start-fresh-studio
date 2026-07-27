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
import Landing4MobileBottomCTA from "@/components/landing/Landing4MobileBottomCTA";
import { useSeo } from "@/hooks/useSeo";

const CALL_URL =
  "https://calendly.com/simone-calderoni-hommi/30min?utm_source=landing-4&utm_medium=meta&utm_campaign=manutentore-solo";

export default function Landing4() {
  useSeo({
    title: "La rete di tecnici che non va mai in ferie | Hommi",
    description:
      "Il tuo manutentore è bravissimo, ma è uno solo. Hommi è la rete di tecnici per il tuo affitto breve: intervento entro 4 ore, prezzo chiaro, tutto tracciato. Più immobili gestisci, più ti serve un sistema.",
    canonical: "https://www.hommi.it/landing-4",
  });

  return (
    <div className="landing-theme">
      <LandingNavbar ctaLabel="Prenota una call" ctaHref={CALL_URL} />
      <HeroSection
        lines={["Il tuo manutentore", "è bravissimo.", "Il problema: è uno solo."]}
        subtitle={
          <>
            Va in ferie ad agosto. Si ammala a gennaio. Ha già tre lavori quando la tua caldaia si
            ferma di venerdì sera. E ogni volta che lui non c'è, il piano B sei tu: telefonate,
            preventivi al buio, ospiti che aspettano. Hommi è la rete di tecnici che non va mai in
            ferie. Intervento entro 4 ore, prezzo chiaro prima di iniziare, tutto tracciato in
            piattaforma. Tu non alzi il telefono.
          </>
        }
        ctaLabel="Prenota una call"
        ctaHref={CALL_URL}
        testimonial={{
          quote: "Prima ero io il numero di emergenza. Ora apro solo la notifica di chiusura.",
          author: "Davide",
          role: "Host, 12 appartamenti a Milano",
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
            Più immobili gestisci,
            <br />
            più ti serve un sistema — non una persona
          </>
        }
        subtitle="Hommi è la rete di tecnici per il tuo affitto breve. Intervento entro 4 ore, prezzo chiaro, tutto tracciato."
        ctaLabel="Prenota una call"
        ctaHref={CALL_URL}
      />
      <LandingFooter />
      <Landing4MobileBottomCTA />
    </div>
  );
}
