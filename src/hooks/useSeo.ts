import { useEffect } from "react";

type SeoOptions = {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogImage?: string;
  ogImageAlt?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo({
  title,
  description,
  canonical,
  keywords,
  ogImage,
  ogImageAlt,
  jsonLd,
}: SeoOptions) {
  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    if (keywords) upsertMeta("name", "keywords", keywords);
    upsertLink("canonical", canonical);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "Hommi");
    upsertMeta("property", "og:locale", "it_IT");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    if (ogImage) {
      const absolute = ogImage.startsWith("http")
        ? ogImage
        : `https://www.hommi.it${ogImage}`;
      upsertMeta("property", "og:image", absolute);
      upsertMeta("property", "og:image:width", "1200");
      upsertMeta("property", "og:image:height", "630");
      upsertMeta("property", "og:image:type", "image/jpeg");
      upsertMeta("name", "twitter:image", absolute);
      if (ogImageAlt) {
        upsertMeta("property", "og:image:alt", ogImageAlt);
        upsertMeta("name", "twitter:image:alt", ogImageAlt);
      }
    }

    const scripts: HTMLScriptElement[] = [];
    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      items.forEach((data) => {
        const s = document.createElement("script");
        s.type = "application/ld+json";
        s.text = JSON.stringify(data);
        s.dataset.seo = "page";
        document.head.appendChild(s);
        scripts.push(s);
      });
    }
    return () => {
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, canonical, keywords, ogImage, ogImageAlt, jsonLd]);
}

