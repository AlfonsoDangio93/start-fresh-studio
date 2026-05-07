import { Link } from "react-router-dom";
import Navbar from "@/components/sections/Navbar";
import LandingFooter from "@/components/landing/LandingFooter";
import { useSeo } from "@/hooks/useSeo";

export type SeoFaq = { q: string; a: string };
export type SeoSection = { h2: string; body: string; bullets?: string[] };

export type SeoLandingProps = {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  ogImageAlt: string;
  h1: string;
  intro: string;
  badge: string;
  sections: SeoSection[];
  faqs: SeoFaq[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaHref?: string;
  ctaLabel?: string;
};

const ORANGE = "#E35210";
const TEXT = "#3F4444";

export default function SeoLanding(p: SeoLandingProps) {
  const canonical = `https://www.hommi.it/${p.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: p.title,
      description: p.description,
      url: canonical,
      inLanguage: "it-IT",
      isPartOf: { "@type": "WebSite", name: "Hommi", url: "https://www.hommi.it" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hommi.it/" },
        { "@type": "ListItem", position: 2, name: p.h1, item: canonical },
      ],
    },
  ];

  useSeo({
    title: p.title,
    description: p.description,
    canonical,
    keywords: p.keywords,
    ogImage: p.ogImage,
    ogImageAlt: p.ogImageAlt,
    jsonLd,
  });

  return (
    <>
      <Navbar />
      <main className="bg-white" style={{ color: TEXT, fontFamily: "'Open Sans', sans-serif" }}>
        <article className="max-w-3xl mx-auto px-6 pt-28 pb-16">
          <div
            className="text-xs font-bold uppercase tracking-[0.15em] mb-4"
            style={{ color: ORANGE }}
          >
            {p.badge}
          </div>
          <h1
            className="font-bold leading-tight mb-6"
            style={{
              color: TEXT,
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(32px, 5vw, 48px)",
            }}
          >
            {p.h1}
          </h1>
          <p className="text-lg leading-relaxed mb-10" style={{ color: TEXT }}>
            {p.intro}
          </p>

          {p.sections.map((s) => (
            <section key={s.h2} className="mb-10">
              <h2
                className="font-bold mb-4"
                style={{
                  color: TEXT,
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "clamp(22px, 3vw, 28px)",
                }}
              >
                {s.h2}
              </h2>
              <p className="text-base leading-relaxed mb-3">{s.body}</p>
              {s.bullets && (
                <ul className="space-y-2 list-disc pl-5">
                  {s.bullets.map((b) => (
                    <li key={b} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="mb-10">
            <h2
              className="font-bold mb-6"
              style={{
                color: TEXT,
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(22px, 3vw, 28px)",
              }}
            >
              Domande frequenti
            </h2>
            <div className="space-y-5">
              {p.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group border rounded-[10px] p-5"
                  style={{ borderColor: "#E5E7EB" }}
                >
                  <summary
                    className="cursor-pointer font-semibold list-none flex justify-between items-start gap-4"
                    style={{ color: TEXT, fontFamily: "'Poppins', sans-serif" }}
                  >
                    <span>{f.q}</span>
                    <span style={{ color: ORANGE }} className="text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section
            className="rounded-[10px] p-8 text-center"
            style={{ backgroundColor: "#FFF4ED", border: `2px solid ${ORANGE}` }}
          >
            <h2
              className="font-bold mb-3"
              style={{
                color: TEXT,
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(22px, 3vw, 28px)",
              }}
            >
              {p.ctaTitle}
            </h2>
            <p className="mb-6">{p.ctaSubtitle}</p>
            <Link
              to={p.ctaHref || "/calcolatore"}
              className="inline-block px-8 py-4 rounded-[10px] text-white font-bold"
              style={{ backgroundColor: ORANGE }}
            >
              {p.ctaLabel || "Calcola il tuo risparmio"}
            </Link>
          </section>
        </article>
      </main>
      <LandingFooter />
    </>
  );
}
