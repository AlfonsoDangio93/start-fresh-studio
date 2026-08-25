import Navbar from "@/components/sections/Navbar";
import LandingFooter from "@/components/landing/LandingFooter";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
import PressBar from "@/components/sections/PressBar";
import ManutentoriSection from "@/components/sections/ManutentoriSection";

export default function PerManutentori() {
  return (
    <>
      <Navbar />
      <ManutentoriSection />
      <ClientLogosSection />
      <PressBar />
      <LandingFooter />
    </>
  );
}
