import { Link } from "react-router-dom";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Prezzi", href: "/prezzi" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Termini e condizioni", href: "/termini-e-condizioni" },
];

const SOCIALS = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer>
      {/* ── Upper band ── */}
      <div className="bg-surface border-t border-border">
        <div className="max-w-site mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Left — Logo + tagline */}
            <div className="flex flex-col gap-3">
              <Link to="/" className="inline-flex items-center gap-2">
                <img
                  src="/logos/hommi_logo.png"
                  alt="Hommi"
                  className="h-7 w-auto"
                />
              </Link>
              <p className="text-sm text-secondary/70 max-w-[280px]">
                La piattaforma intelligente per la gestione degli immobili e della manutenzione.
              </p>
            </div>

            {/* Center — Links */}
            <nav className="flex flex-col gap-2.5">
              <h4 className="text-sm font-bold text-dark mb-1">Link utili</h4>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                {LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-secondary/60 hover:text-dark transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right — Social + CTA */}
            <div className="flex flex-col gap-4 md:items-end">
              <div className="flex items-center gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-secondary/50 hover:text-dark hover:border-dark/20 transition-colors duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <a
                href="https://tally.so/r/wLzNBN"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta-primary text-center mt-1"
              >
                Richiedi accesso
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="bg-white border-t border-border">
        <div className="max-w-site mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-3 text-xs text-secondary/50">
          {/* Left — Legal */}
          <p className="text-center lg:text-left whitespace-nowrap">
            &copy; {new Date().getFullYear()} Hommi · S9 srl Società Benefit · P.IVA 13291110016 · REA TO-1352856 · Capitale Sociale € 10.000 i.v.
          </p>

          {/* Center — Address */}
          <p className="text-center whitespace-nowrap">
            Corso Unione Sovietica, 612/15/C · 10135 Torino (TO)
          </p>

          {/* Right — Credits */}
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span>Made with</span>
            <span className="text-red-500">&#10084;</span>
            <span>by</span>
            <Link to="/" className="inline-flex items-center">
              <img src="/logos/hommi_logo.png" alt="Hommi" className="h-4 w-auto" />
            </Link>
            <span className="mx-1 text-border">|</span>
            <span>Powered by</span>
            <a
              href="https://www.mamazen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <img src="/powered-by-mamazen.png" alt="Mamazen" className="h-4 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
