import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingFooter from "@/components/landing/LandingFooter";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
import PressBar from "@/components/sections/PressBar";
import Landing5MobileBottomCTA from "@/components/landing/Landing5MobileBottomCTA";
import ManutentoriSection from "@/components/sections/ManutentoriSection";
import { useSeo } from "@/hooks/useSeo";

const FORM_URL = "https://form.hommi.it/diventa-partner-operativo";


export default function Landing5() {
  useSeo({
    title: "Diventa manutentore partner Hommi | Lavoro stabile e pagamenti puntuali",
    description:
      "Entra nella rete Hommi: ricevi incarichi da property manager verificati, gestisci tutto dall'app e vieni pagato puntualmente. Iscriviti gratuitamente.",
    canonical: "https://www.hommi.it/landing-5",
  });

  return (
    <div className="landing-theme">
      <LandingNavbar ctaLabel="Diventa partner operativo" ctaHref={FORM_URL} />
      <ManutentoriSection
        ctaHref={FORM_URL}
        ctaLabel="Diventa partner operativo"
      />
      <ClientLogosSection />
      <PressBar />
      <LandingFooter />
      <Landing5MobileBottomCTA />
    </div>
  );
}
