import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PropertyManagerSection from "@/components/sections/PropertyManagerSection";

export default function PerPropertyManager() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen overflow-x-hidden">
      <Navbar />
      <PropertyManagerSection />
      <Footer />
    </main>
  );
}
