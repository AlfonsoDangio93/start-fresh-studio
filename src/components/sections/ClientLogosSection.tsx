import accomodo from "@/assets/accomodo_logo_green._low-1.png.asset.json";
import cleanbnb from "@/assets/cleanbnb.jpg.asset.json";
import horizon from "@/assets/horizon-luxury-homes-affitti-brevi-ville-lusso.png.asset.json";
import flexyrent from "@/assets/Logo-flexyrent-Nuovo.png.asset.json";
import rentalPro from "@/assets/rental-pro.png.asset.json";
import maggi from "@/assets/logoooo.png.asset.json";

/** `darken`: logo bianco/chiaro, va reso scuro per leggerlo su fondo bianco */
const LOGOS = [
  { name: "Accomodo", url: accomodo.url, darken: false },
  { name: "CleanBnB", url: cleanbnb.url, darken: false },
  { name: "Horizon Luxury Homes", url: horizon.url, darken: true },
  { name: "Flexyrent", url: flexyrent.url, darken: false },
  { name: "Rental Pro", url: rentalPro.url, darken: true },
  { name: "Maggi Property Management", url: maggi.url, darken: true },
];

export default function ClientLogosSection() {
  return (
    <section className="py-12 md:py-16 border-t border-border">
      <div className="max-w-site mx-auto px-6">
        <p className="text-[13px] md:text-[14px] text-dark font-semibold leading-snug text-center mb-8 md:mb-10">
          Property manager che ci hanno gi&agrave; scelto:
        </p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8 md:gap-y-10 items-center">
          {LOGOS.map((logo) => (
            <li key={logo.name} className="flex items-center justify-center">
              <img
                src={logo.url}
                alt={`Logo ${logo.name}`}
                loading="lazy"
                className={`max-h-9 md:max-h-10 w-auto max-w-[140px] object-contain transition-opacity duration-200 opacity-40 hover:opacity-70 ${
                  logo.darken ? "brightness-0" : "grayscale"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
