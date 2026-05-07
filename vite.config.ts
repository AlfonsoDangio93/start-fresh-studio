import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { seoPrerender } from "./vite-plugins/seo-prerender";

const SEO_PAGES = [
  {
    path: "/seo/gestione-manutenzione-property-manager",
    title: "Gestione Manutenzione per Property Manager | Hommi",
    description:
      "Hommi è la piattaforma di gestione manutenzione per property manager a Milano, Monza, Como, Torino e Lecco. Tecnici verificati, ticketing su WhatsApp, costi trasparenti.",
    image: "/og/seo-property-manager.jpg",
    imageAlt: "Hommi — Gestione manutenzione per Property Manager",
  },
  {
    path: "/seo/gestione-manutenzione-agenzie-immobiliari",
    title: "Gestione Manutenzione per Agenzie Immobiliari | Hommi",
    description:
      "Hommi supporta agenzie immobiliari nella gestione della manutenzione di affitti residenziali e brevi a Milano, Monza, Como, Torino e Lecco.",
    image: "/og/seo-agenzie.jpg",
    imageAlt: "Hommi — Gestione manutenzione per Agenzie Immobiliari",
  },
  {
    path: "/seo/gestione-manutenzione-host-airbnb",
    title: "Manutenzione Case Vacanza e Airbnb per Host Professionali | Hommi",
    description:
      "Hommi è il servizio di manutenzione per host Airbnb e case vacanza a Milano, Monza, Como, Torino e Lecco. Interventi rapidi, tecnici verificati.",
    image: "/og/seo-host.jpg",
    imageAlt: "Hommi — Manutenzione Airbnb e Host Professionali",
  },
  {
    path: "/seo/ticketing-guasti-immobili",
    title: "Software Ticketing Guasti per Immobili | Hommi",
    description:
      "Sistema di ticketing guasti per property manager, agenzie e host. Apertura ticket via WhatsApp, assegnazione automatica al tecnico, tracciabilità completa.",
    image: "/og/seo-ticketing.jpg",
    imageAlt: "Hommi — Ticketing Guasti per Immobili",
  },
  {
    path: "/seo/gestione-tecnici-manutentori",
    title: "Gestione Tecnici e Manutentori per Immobili | Hommi",
    description:
      "Hommi seleziona, coordina e valuta tecnici e manutentori per property manager, agenzie e host a Milano, Monza, Como, Torino e Lecco.",
    image: "/og/seo-tecnici.jpg",
    imageAlt: "Hommi — Gestione Tecnici e Manutentori",
  },
  {
    path: "/seo/gestione-manutenzione-immobili",
    title: "Gestione Manutenzione Immobili a Milano, Torino e Como | Hommi",
    description:
      "Hommi è il servizio completo di gestione manutenzione immobiliare a Milano, Monza, Como, Torino e Lecco. Per property manager, agenzie e host professionali.",
    image: "/og/seo-manutenzione.jpg",
    imageAlt: "Hommi — Gestione Manutenzione Immobili",
  },
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    seoPrerender(SEO_PAGES),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
