import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ManutentoriSection from "@/components/sections/ManutentoriSection";

export default function PerManutentori() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen overflow-x-hidden">
      <Navbar />
      <ManutentoriSection />
      <Footer />
    </main>
  );
}
