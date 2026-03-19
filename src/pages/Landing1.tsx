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
import LandingMobileBottomCTA from "@/components/landing/LandingMobileBottomCTA";

export default function Landing1() {
  return (
    <div className="landing-theme">
      <LandingNavbar />
      <HeroSection />
      <PressBar />
      <FeatureShowcase />
      <HowItWorksSection />
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
