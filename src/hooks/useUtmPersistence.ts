const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "utm_id"] as const;
const STORAGE_KEY = "hommi_utm_params";

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

/** Read stored UTMs from localStorage */
export function getStoredUtms(): UtmParams {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/** Save UTMs to localStorage (merges with existing, new values win) */
function storeUtms(params: UtmParams) {
  const existing = getStoredUtms();
  const merged = { ...existing, ...params };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
}

/** Extract UTM params from a URL search string */
function extractUtms(search: string): UtmParams {
  const sp = new URLSearchParams(search);
  const utms: UtmParams = {};
  for (const key of UTM_KEYS) {
    const val = sp.get(key);
    if (val) utms[key] = val;
  }
  return utms;
}

/** Append stored UTMs to any URL string */
export function appendUtmsToUrl(url: string): string {
  const utms = getStoredUtms();
  if (Object.keys(utms).length === 0) return url;

  try {
    // Handle absolute URLs
    if (url.startsWith("http://") || url.startsWith("https://")) {
      const u = new URL(url);
      for (const [k, v] of Object.entries(utms)) {
        if (!u.searchParams.has(k) && v) u.searchParams.set(k, v);
      }
      return u.toString();
    }

    // Handle relative URLs and hash links
    const [pathAndHash, ...rest] = url.split("?");
    const existingQuery = rest.join("?");
    const sp = new URLSearchParams(existingQuery);
    for (const [k, v] of Object.entries(utms)) {
      if (!sp.has(k) && v) sp.set(k, v);
    }
    const qs = sp.toString();
    return qs ? `${pathAndHash}?${qs}` : pathAndHash;
  } catch {
    return url;
  }
}

/** Call once on app mount to capture and persist UTMs from the current URL */
export function captureUtmsFromUrl() {
  const utms = extractUtms(window.location.search);
  if (Object.keys(utms).length > 0) {
    storeUtms(utms);
  }
}

/**
 * Global click interceptor: automatically appends UTMs to all <a> navigations.
 * Returns a cleanup function.
 */
export function installUtmClickInterceptor(): () => void {
  const handler = (e: MouseEvent) => {
    const anchor = (e.target as HTMLElement).closest("a");
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("javascript:")) return;

    const utms = getStoredUtms();
    if (Object.keys(utms).length === 0) return;

    const newHref = appendUtmsToUrl(href);
    if (newHref !== href) {
      anchor.setAttribute("href", newHref);
    }
  };

  document.addEventListener("click", handler, true);
  return () => document.removeEventListener("click", handler, true);
}
