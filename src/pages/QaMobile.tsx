import { useState } from "react";

const DEVICES = [
  { name: "iPhone SE", w: 375, h: 667 },
  { name: "iPhone 12/13", w: 390, h: 844 },
  { name: "iPhone 14 Pro Max", w: 430, h: 932 },
  { name: "Galaxy S20", w: 360, h: 800 },
  { name: "Pixel 7", w: 412, h: 915 },
  { name: "iPad Mini", w: 768, h: 1024 },
];

const ROUTES = [
  { label: "Calcolatore (step 1-5)", path: "/calcolatore" },
  { label: "Form contatti (step 7)", path: "/calcolatore?step=7" },
  { label: "Report", path: "/report" },
];

export default function QaMobile() {
  const [path, setPath] = useState(ROUTES[0].path);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">QA Mobile — Form vs Iubenda</h1>
        <p className="text-sm text-gray-600 mb-4">
          Verifica che il pulsante "Sblocca il report" e i CTA non siano coperti
          dal widget cookie Iubenda su vari device.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {ROUTES.map((r) => (
            <button
              key={r.path}
              onClick={() => setPath(r.path)}
              className={`px-3 py-2 rounded-md text-sm font-medium border ${
                path === r.path
                  ? "bg-[#E35210] text-white border-[#E35210]"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {DEVICES.map((d) => (
            <div key={d.name} className="bg-white rounded-lg shadow p-3">
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-semibold text-sm">{d.name}</h3>
                <span className="text-xs text-gray-500">
                  {d.w}×{d.h}
                </span>
              </div>
              <div
                className="border border-gray-300 rounded overflow-hidden mx-auto bg-black"
                style={{ width: d.w, height: Math.min(d.h, 600) }}
              >
                <iframe
                  src={path}
                  title={d.name}
                  style={{ width: d.w, height: Math.min(d.h, 600), border: 0 }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white rounded-lg shadow p-6">
          <h2 className="font-bold text-lg mb-3">Checklist</h2>
          <ul className="space-y-2 text-sm">
            {[
              "Su /calcolatore step 1-5: i pulsanti Indietro/Avanti restano visibili sopra il widget Iubenda",
              "Su step 7 (form): il pulsante 'Sblocca il report personalizzato' è cliccabile e non coperto",
              "Su /report: il pulsante 'Prenota la tua demo' / Calendly è raggiungibile",
              "Lo scroll arriva fino in fondo senza tagliare il consent footer",
              "Su iPhone SE (375×667) tutti gli input del form hanno min-height 48px",
              "Su iPad (768×1024) il form mantiene max-width 600px e centratura",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <input type="checkbox" className="mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
