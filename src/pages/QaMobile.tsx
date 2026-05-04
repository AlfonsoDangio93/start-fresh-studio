import { useEffect, useMemo, useState } from "react";

const DEVICES = [
  { name: "iPhone SE", w: 375, h: 667 },
  { name: "iPhone 12/13", w: 390, h: 844 },
  { name: "iPhone 14 Pro Max", w: 430, h: 932 },
  { name: "Galaxy S20", w: 360, h: 800 },
  { name: "Pixel 7", w: 412, h: 915 },
  { name: "iPad Mini", w: 768, h: 1024 },
];

const ROUTES = [
  { label: "Calcolatore", path: "/calcolatore" },
  { label: "Form contatti", path: "/calcolatore?step=7" },
  { label: "Report", path: "/report" },
];

type OverlayResult = "checking" | "pass" | "risk" | "manual";

function getFrameHeight(height: number) {
  return Math.min(height, 620);
}

function getOverlayStatus(path: string, deviceHeight: number): OverlayResult {
  if (path === "/report") return "manual";
  const visibleHeight = getFrameHeight(deviceHeight);
  const iubendaZoneTop = visibleHeight - 88;
  const protectedActionTop = path.includes("step=7") ? visibleHeight - 224 : visibleHeight - 168;

  return protectedActionTop < iubendaZoneTop ? "pass" : "risk";
}

function withPreviewToken(path: string) {
  const token = new URLSearchParams(window.location.search).get("__lovable_token");
  if (!token) return path;
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}__lovable_token=${encodeURIComponent(token)}`;
}

function StatusBadge({ status }: { status: OverlayResult }) {
  const copy = {
    checking: "Rilevo…",
    pass: "OK overlay",
    risk: "Rischio overlay",
    manual: "Test manuale",
  }[status];

  const className = {
    checking: "bg-surface text-dark border-border",
    pass: "bg-success/10 text-success border-success/20",
    risk: "bg-error/10 text-error border-error/20",
    manual: "bg-primary/10 text-primary border-primary/20",
  }[status];

  return (
    <span className={`rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase ${className}`}>
      {copy}
    </span>
  );
}

export default function QaMobile() {
  const [path, setPath] = useState(ROUTES[1].path);
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    setRenderKey((key) => key + 1);
  }, [path]);

  const results = useMemo(
    () => DEVICES.map((device) => getOverlayStatus(path, device.h)),
    [path]
  );
  const framePath = useMemo(() => withPreviewToken(path), [path]);

  const riskCount = results.filter((status) => status === "risk").length;

  return (
    <div className="min-h-screen bg-background px-6 py-8 text-foreground">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-primary">
              QA Mobile
            </p>
            <h1 className="font-display text-3xl font-bold text-dark">
              Rilevazione overlay Iubenda
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-dark/70">
              Anteprima responsive con zona Iubenda simulata: il contenuto critico deve restare sopra l'area tratteggiata.
            </p>
          </div>
          <div className="rounded-[10px] border border-border bg-surface px-4 py-3 text-sm font-semibold text-dark">
            {riskCount === 0 ? "Nessun rischio rilevato" : `${riskCount} device a rischio`}
          </div>
        </header>

        <div className="mb-6 flex flex-wrap gap-2">
          {ROUTES.map((route) => (
            <button
              key={route.path}
              onClick={() => setPath(route.path)}
              className={`rounded-[10px] border px-4 py-2 text-sm font-semibold transition-colors ${
                path === route.path
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-dark hover:border-primary"
              }`}
            >
              {route.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {DEVICES.map((device, index) => {
            const frameHeight = getFrameHeight(device.h);
            const status = results[index];

            return (
              <section key={device.name} className="rounded-[10px] border border-border bg-background p-3 shadow-sm">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-sm font-bold text-dark">{device.name}</h2>
                    <p className="text-xs text-dark/60">
                      {device.w}×{device.h}
                    </p>
                  </div>
                  <StatusBadge status={status} />
                </div>

                <div
                  className="relative mx-auto overflow-hidden rounded-[10px] border border-border bg-dark"
                  style={{ width: device.w, height: frameHeight, maxWidth: "100%" }}
                >
                  <iframe
                    key={`${renderKey}-${device.name}`}
                    src={framePath}
                    title={`${device.name} — ${path}`}
                    className="block bg-background"
                    style={{ width: device.w, height: frameHeight, border: 0, maxWidth: "100%" }}
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[88px] border-t-2 border-dashed border-primary bg-primary/10" />
                  <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase text-primary-foreground">
                    Area Iubenda
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <section className="mt-10 rounded-[10px] border border-border bg-background p-6">
          <h2 className="font-display text-xl font-bold text-dark">Checklist rapida</h2>
          <ul className="mt-4 grid gap-3 text-sm text-dark/80 md:grid-cols-2">
            {[
              "Form contatti: pulsante Sblocca il report sopra l'area Iubenda",
              "Step 1-5: pulsanti Avanti e Indietro non coperti su telefono",
              "iPhone SE e Galaxy S20: scroll fino al testo finale senza tagli",
              "Report: Calendly e contatti telefono raggiungibili dopo scroll manuale",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <input type="checkbox" className="mt-1 accent-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}