import { writeFileSync, readFileSync, mkdirSync } from "fs";
import path from "path";
import type { Plugin } from "vite";

export type SeoPage = {
  path: string; // e.g. /seo/...
  title: string;
  description: string;
  image: string; // e.g. /og/seo-x.jpg
  imageAlt: string;
};

export function seoPrerender(pages: SeoPage[], origin = "https://www.hommi.it"): Plugin {
  return {
    name: "seo-prerender",
    apply: "build",
    closeBundle() {
      const distDir = path.resolve("dist");
      const indexPath = path.join(distDir, "index.html");
      const baseHtml = readFileSync(indexPath, "utf8");

      for (const p of pages) {
        const url = `${origin}${p.path}`;
        const img = p.image.startsWith("http") ? p.image : `${origin}${p.image}`;
        let html = baseHtml;

        // Replace title
        html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(p.title)}</title>`);

        // Helper to upsert meta in static HTML
        const upsert = (attr: "name" | "property", key: string, content: string) => {
          const re = new RegExp(`<meta\\s+${attr}=["']${key}["'][^>]*>`, "i");
          const tag = `<meta ${attr}="${key}" content="${escapeHtml(content)}">`;
          if (re.test(html)) html = html.replace(re, tag);
          else html = html.replace("</head>", `    ${tag}\n</head>`);
        };
        const upsertLink = (rel: string, href: string) => {
          const re = new RegExp(`<link\\s+rel=["']${rel}["'][^>]*>`, "i");
          const tag = `<link rel="${rel}" href="${href}">`;
          if (re.test(html)) html = html.replace(re, tag);
          else html = html.replace("</head>", `    ${tag}\n</head>`);
        };

        upsert("name", "description", p.description);
        upsertLink("canonical", url);
        upsert("property", "og:title", p.title);
        upsert("property", "og:description", p.description);
        upsert("property", "og:url", url);
        upsert("property", "og:type", "website");
        upsert("property", "og:site_name", "Hommi");
        upsert("property", "og:locale", "it_IT");
        upsert("property", "og:image", img);
        upsert("property", "og:image:width", "1200");
        upsert("property", "og:image:height", "630");
        upsert("property", "og:image:type", "image/jpeg");
        upsert("property", "og:image:alt", p.imageAlt);
        upsert("name", "twitter:card", "summary_large_image");
        upsert("name", "twitter:title", p.title);
        upsert("name", "twitter:description", p.description);
        upsert("name", "twitter:image", img);
        upsert("name", "twitter:image:alt", p.imageAlt);

        const outDir = path.join(distDir, p.path.replace(/^\//, ""));
        mkdirSync(outDir, { recursive: true });
        writeFileSync(path.join(outDir, "index.html"), html, "utf8");
      }
    },
  };
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
