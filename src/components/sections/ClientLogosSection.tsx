import accomodo from "@/assets/accomodo_logo_green._low-1.png.asset.json";
import cleanbnb from "@/assets/cleanbnb.jpg.asset.json";
import horizon from "@/assets/horizon-luxury-homes-affitti-brevi-ville-lusso.png.asset.json";
import flexyrent from "@/assets/Logo-flexyrent-Nuovo.png.asset.json";
import rentalPro from "@/assets/rental-pro.png.asset.json";
import mago from "@/assets/logoooo.png.asset.json";

const LOGOS = [
  { name: "Accomodo", url: accomodo.url, invert: true },
  { name: "CleanBnB", url: cleanbnb.url, invert: false },
  { name: "Horizon Luxury Homes", url: horizon.url, invert: false },
  { name: "Flexyrent", url: flexyrent.url, invert: false },
  { name: "Rental Pro", url: rentalPro.url, invert: false },
  { name: "MAGO Property Management", url: mago.url, invert: false },
];

export default function ClientLogosSection() {
  return (
    <section className="bg-dark py-16 md:py-20">
      <div className="max-w-site mx-auto px-6">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-[0.15em] mb-4">
            Ci hanno gi&agrave; scelto
          </span>
          <h2 className="font-display text-[24px] md:text-[32px] font-bold text-white leading-[1.15] tracking-tight">
            Property manager che gestiscono
            <br className="hidden md:block" /> la manutenzione con Hommi
          </h2>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 md:gap-y-12 items-center">
          {LOGOS.map((logo) => (
            <li key={logo.name} className="flex items-center justify-center">
              <img
                src={logo.url}
                alt={`Logo ${logo.name}`}
                loading="lazy"
                className={`max-h-10 md:max-h-12 w-auto max-w-[150px] md:max-w-[180px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-200 ${
                  logo.invert ? "brightness-0 invert" : ""
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
