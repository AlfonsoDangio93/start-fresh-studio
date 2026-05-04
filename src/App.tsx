import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { useUtmPersistence } from "@/hooks/useUtmPersistence";

// Pages
import Home from "@/pages/Home";
import Landing from "@/pages/Landing";
import Landing1 from "@/pages/Landing1";
import Prezzi from "@/pages/Prezzi";
import Faq from "@/pages/Faq";
import PerPropertyManager from "@/pages/PerPropertyManager";
import PerAgenzie from "@/pages/PerAgenzie";
import PerHostProfessionali from "@/pages/PerHostProfessionali";
import PerManutentori from "@/pages/PerManutentori";
import PerManutentoriDomanda from "@/pages/PerManutentoriDomanda";
import AdminCandidature from "@/pages/AdminCandidature";
import DashboardRealtime from "@/pages/DashboardRealtime";
import TicketingGuasti from "@/pages/TicketingGuasti";
import GestioneTecnici from "@/pages/GestioneTecnici";
import ReportAnalytics from "@/pages/ReportAnalytics";
import ThankYou from "@/pages/ThankYou";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CookiePolicy from "@/pages/CookiePolicy";
import TerminiCondizioni from "@/pages/TerminiCondizioni";
import NotFound from "@/pages/NotFound";
import Ticket from "@/pages/Ticket";
import LandingCalcolatore from "@/pages/LandingCalcolatore";
import Report from "@/pages/Report";


export default function App() {
  useUtmPersistence();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/landing-1" element={<Landing1 />} />
        <Route path="/prezzi" element={<Prezzi />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/per-property-manager" element={<PerPropertyManager />} />
        <Route path="/per-agenzie" element={<PerAgenzie />} />
        <Route path="/per-host-professionali" element={<PerHostProfessionali />} />
        <Route path="/per-manutentori" element={<PerManutentori />} />
        <Route path="/per-manutentori-domanda" element={<PerManutentoriDomanda />} />
        <Route path="/admin-candidature" element={<AdminCandidature />} />
        <Route path="/dashboard-realtime" element={<DashboardRealtime />} />
        <Route path="/ticketing-guasti" element={<TicketingGuasti />} />
        <Route path="/gestione-tecnici" element={<GestioneTecnici />} />
        <Route path="/report-analytics" element={<ReportAnalytics />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/termini-e-condizioni" element={<TerminiCondizioni />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/calcolatore" element={<LandingCalcolatore />} />
        <Route path="/report" element={<Report />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
