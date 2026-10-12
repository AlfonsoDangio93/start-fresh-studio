import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BOOKING_LINK, withUtmParams } from "@/lib/utmContentLink";
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
import Landing1MobileBottomCTA from "@/components/landing/Landing1MobileBottomCTA";

export default function Landing1() {
  const location = useLocation();

  // Ogni click su un link verso prenota.hommi.it spara InitiateCheckout prima della navigazione
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (!href.includes("prenota.hommi.it")) return;
      const w = window as Window & { fbq?: (...args: unknown[]) => void };
      if (typeof w.fbq !== "function") return;
      w.fbq("track", "InitiateCheckout");
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  // utm_content deve arrivare a prenota.hommi.it anche quando non è in localStorage
  useEffect(() => {
    const search = window.location.search;
    if (!/utm_/.test(search)) return;

    const apply = () => {
      document.querySelectorAll(`a[href*="${BOOKING_LINK}"]`).forEach((el) => {
        const a = el as HTMLAnchorElement;
        const href = a.getAttribute("href");
        if (!href) return;
        a.setAttribute("href", withUtmParams(href, search));
      });
    };

    apply();
    const t = window.setTimeout(apply, 400);
    return () => window.clearTimeout(t);
  }, [location.pathname, location.search]);

  return (
    <div className="landing-theme">
      <LandingNavbar />
      <HeroSection />
      <ClientLogosSection />
      <FeatureShowcase />
      <HowItWorksSection />
      <ServicesSection />
      <Landing1Pricing />
      <ComparisonSection />
      <LandingTestimonials />
      <PressBar />
      <LandingFAQ />
      <CTASection />
      <LandingFooter />
      <Landing1MobileBottomCTA />
    </div>
  );
}
