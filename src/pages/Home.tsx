import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PressBar from "@/components/sections/PressBar";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PricingHomeSection from "@/components/sections/PricingHomeSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import LandingFooter from "@/components/landing/LandingFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PressBar />
      <FeatureShowcase />
      <HowItWorksSection />
      <ServicesSection />
      <PricingHomeSection />
      <ComparisonSection />
      <TestimonialsSection />
      <CTASection />
      <LandingFooter />
    </>
  );
}
