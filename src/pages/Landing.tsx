import LandingNavbar from "@/components/landing/LandingNavbar";
import HeroSection from "@/components/sections/HeroSection";
import PressBar from "@/components/sections/PressBar";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import LandingHowItWorks from "@/components/landing/LandingHowItWorks";
import ServicesSection from "@/components/sections/ServicesSection";
import LandingPricing from "@/components/landing/LandingPricing";
import ComparisonSection from "@/components/sections/ComparisonSection";
import LandingTestimonials from "@/components/landing/LandingTestimonials";
import LandingFAQ from "@/components/landing/LandingFAQ";
import CTASection from "@/components/sections/CTASection";
import LandingFooter from "@/components/landing/LandingFooter";
import LandingMobileBottomCTA from "@/components/landing/LandingMobileBottomCTA";

export default function Landing() {
  return (
    <div className="landing-theme">
      <LandingNavbar />
      <HeroSection />
      <PressBar />
      <FeatureShowcase />
      <LandingHowItWorks />
      <ServicesSection />
      <LandingPricing />
      <ComparisonSection />
      <LandingTestimonials />
      <LandingFAQ />
      <CTASection />
      <LandingFooter />
      <LandingMobileBottomCTA />
    </div>
  );
}
