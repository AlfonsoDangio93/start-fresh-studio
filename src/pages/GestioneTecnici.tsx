import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import GestioneTecniciSection from "@/components/sections/GestioneTecniciSection";

export default function GestioneTecnici() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen overflow-x-hidden">
      <Navbar />
      <GestioneTecniciSection />
      <Footer />
    </main>
  );
}
