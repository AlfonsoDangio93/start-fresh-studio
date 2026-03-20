import Navbar from "@/components/sections/Navbar";
import LandingFooter from "@/components/landing/LandingFooter";
import DashboardSection from "@/components/sections/DashboardSection";
import CTASection from "@/components/sections/CTASection";

export default function DashboardRealtime() {
  return (
    <>
      <Navbar />
      <DashboardSection />
      <CTASection />
      <LandingFooter />
    </>
  );
}
