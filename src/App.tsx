import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import { captureUtmsFromUrl, installUtmClickInterceptor } from "@/hooks/useUtmPersistence";

// Pages
import Home from "@/pages/Home";
import Landing from "@/pages/Landing";
import Prezzi from "@/pages/Prezzi";
import Faq from "@/pages/Faq";
import PerPropertyManager from "@/pages/PerPropertyManager";
import PerAgenzie from "@/pages/PerAgenzie";
import PerHostProfessionali from "@/pages/PerHostProfessionali";
import PerManutentori from "@/pages/PerManutentori";
import DashboardRealtime from "@/pages/DashboardRealtime";
import TicketingGuasti from "@/pages/TicketingGuasti";
import GestioneTecnici from "@/pages/GestioneTecnici";
import ReportAnalytics from "@/pages/ReportAnalytics";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/prezzi" element={<Prezzi />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/per-property-manager" element={<PerPropertyManager />} />
        <Route path="/per-agenzie" element={<PerAgenzie />} />
        <Route path="/per-host-professionali" element={<PerHostProfessionali />} />
        <Route path="/per-manutentori" element={<PerManutentori />} />
        <Route path="/dashboard-realtime" element={<DashboardRealtime />} />
        <Route path="/ticketing-guasti" element={<TicketingGuasti />} />
        <Route path="/gestione-tecnici" element={<GestioneTecnici />} />
        <Route path="/report-analytics" element={<ReportAnalytics />} />
      </Routes>
    </>
  );
}
