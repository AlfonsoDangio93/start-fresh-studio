export default function Variant3Footer() {
  const footerLinks = {
    Product: [
      { label: "Short Term Rental", href: "#" },
      { label: "Cleaning Business", href: "#" },
      { label: "Coliving", href: "#" },
    ],
    Resources: [
      { label: "Doinn App", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Partnerships", href: "#" },
    ],
    Company: [
      { label: "About us", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
    Others: [
      { label: "Pricing", href: "#" },
      { label: "Help center", href: "#" },
    ],
    Social: [
      { label: "Instagram", href: "#" },
      { label: "Linkedin", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-site mx-auto px-8 py-12 lg:py-16">
        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-body mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-body-light hover:text-primary no-underline transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-body-light">
            &copy; 2026 Doinn S.A. - All rights reserved
          </p>
          <div className="flex items-center gap-2 text-sm text-body-light">
            <span>Made with</span>
            <span>❤️</span>
            <span>by</span>
            <a href="#" className="flex items-center gap-1.5 no-underline">
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="6" fill="#6F5EFF"/>
                <path d="M8 14h4v6H8v-6zm8-6h4v12h-4V8z" fill="white"/>
              </svg>
              <span className="font-bold text-body">Doinn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
