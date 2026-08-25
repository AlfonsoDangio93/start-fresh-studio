import Navbar from "@/components/sections/Navbar";
import LandingFooter from "@/components/landing/LandingFooter";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
import PressBar from "@/components/sections/PressBar";
import FAQSection from "@/components/sections/FAQSection";

export default function Faq() {
  return (
    <>
      <Navbar />
      <FAQSection />
      <ClientLogosSection />
      <PressBar />
      <LandingFooter />
    </>
  );
}
