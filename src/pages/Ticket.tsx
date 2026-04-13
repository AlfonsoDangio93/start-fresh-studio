import { useState } from "react";
import { Globe, ChevronDown, ArrowLeft } from "lucide-react";

const LOGO = "/logos/hommi_logo.png";

const WHATSAPP_URL =
  "https://web.whatsapp.com/send?phone=393272884239&text=Ciao!%20Ho%20un%20problema%20durante%20il%20mio%20soggiorno%20e%20vorrei%20richiedere%20assistenza.";

type Lang = "it" | "en" | "fr" | "es" | "de" | "pt" | "zh" | "ar";

interface LangOption {
  code: Lang;
  flag: string;
  label: string;
}

const LANGUAGES: LangOption[] = [
  { code: "it", flag: "🇮🇹", label: "Italiano" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "pt", flag: "🇵🇹", label: "Português" },
  { code: "zh", flag: "🇨🇳", label: "中文" },
  { code: "ar", flag: "🇸🇦", label: "العربية" },
];

const T: Record<Lang, {
  back: string;
  chooseLang: string;
  selectLang: string;
  heroTitle: string;
  heroSubtitle: string;
  whenTitle: string;
  urgTitle: string;
  urgItems: string[];
  minorTitle: string;
  minorItems: string[];
  howTitle: string;
  howText: string;
  ctaLabel: string;
  ctaCaption: string;
  footer: string;
}> = {
  it: {
    back: "← Torna indietro",
    chooseLang: "Scegli la tua lingua",
    selectLang: "Seleziona la lingua / Select your language",
    heroTitle: "Benvenuto/a, siamo qui per te!",
    heroSubtitle:
      "Stai riscontrando un problema durante il tuo soggiorno? Niente panico! Il tuo host si affida a noi di Hommi per garantirti un'esperienza impeccabile.",
    whenTitle: "Quando contattarci?",
    urgTitle: "URGENZE",
    urgItems: [
      "Perdite d'acqua importanti",
      "Problemi all'impianto elettrico che compromettono la sicurezza (es. cortocircuito)",
      "Guasti che rendono l'appartamento inutilizzabile (es. serratura rotta, assenza totale di acqua o luce)",
    ],
    minorTitle: "PICCOLI GUASTI O DUBBI",
    minorItems: [
      "Un rubinetto che perde",
      "Una lampadina fulminata",
      "Un elettrodomestico che non funziona correttamente",
      "Qualsiasi altro piccolo inconveniente",
    ],
    howTitle: "Come funziona?",
    howText:
      "Per segnalare un problema, ti basta cliccare sul pulsante qui sotto. Si aprirà una chat WhatsApp, dove potrai descriverci brevemente la situazione, specificando se si tratta di un'urgenza. Se ti è possibile, allega una foto o un video. Un tecnico valuterà la situazione e interverrà nel minor tempo possibile per risolvere il guasto.",
    ctaLabel: "💬 Apri Chat WhatsApp",
    ctaCaption: "Il team riceverà la tua richiesta e ti risponderà il prima possibile",
    footer: "Goditi il tuo soggiorno. Al resto pensiamo noi.",
  },
  en: {
    back: "← Go back",
    chooseLang: "Choose your language",
    selectLang: "Select your language / Seleziona la lingua",
    heroTitle: "Welcome, we're here for you!",
    heroSubtitle:
      "Are you experiencing a problem during your stay? Don't panic! Your host relies on us at Hommi to ensure a seamless experience.",
    whenTitle: "When to contact us?",
    urgTitle: "EMERGENCIES",
    urgItems: [
      "Major water leaks",
      "Electrical problems that compromise safety (e.g. short circuit)",
      "Breakdowns that make the apartment unusable (e.g. broken lock, total absence of water or electricity)",
    ],
    minorTitle: "MINOR ISSUES OR DOUBTS",
    minorItems: [
      "A dripping faucet",
      "A burnt-out light bulb",
      "An appliance that doesn't work properly",
      "Any other small inconvenience",
    ],
    howTitle: "How does it work?",
    howText:
      "To report a problem, simply click the button below. A WhatsApp chat will open, where you can briefly describe the situation, specifying whether it's an emergency. If possible, attach a photo or video. A technician will evaluate the situation and intervene as quickly as possible to fix the issue.",
    ctaLabel: "💬 Open WhatsApp Chat",
    ctaCaption: "The team will receive your request and respond as soon as possible",
    footer: "Enjoy your stay. We'll take care of the rest.",
  },
  fr: {
    back: "← Retour",
    chooseLang: "Choisissez votre langue",
    selectLang: "Sélectionnez votre langue / Select your language",
    heroTitle: "Bienvenue, nous sommes là pour vous !",
    heroSubtitle:
      "Vous rencontrez un problème pendant votre séjour ? Pas de panique ! Votre hôte fait confiance à Hommi pour vous garantir une expérience impeccable.",
    whenTitle: "Quand nous contacter ?",
    urgTitle: "URGENCES",
    urgItems: [
      "Fuites d'eau importantes",
      "Problèmes électriques compromettant la sécurité (ex. court-circuit)",
      "Pannes rendant l'appartement inutilisable (ex. serrure cassée, absence totale d'eau ou d'électricité)",
    ],
    minorTitle: "PETITES PANNES OU DOUTES",
    minorItems: [
      "Un robinet qui fuit",
      "Une ampoule grillée",
      "Un appareil qui ne fonctionne pas correctement",
      "Tout autre petit inconvénient",
    ],
    howTitle: "Comment ça marche ?",
    howText:
      "Pour signaler un problème, il vous suffit de cliquer sur le bouton ci-dessous. Un chat WhatsApp s'ouvrira, où vous pourrez décrire brièvement la situation en précisant s'il s'agit d'une urgence. Si possible, joignez une photo ou une vidéo. Un technicien évaluera la situation et interviendra dans les plus brefs délais.",
    ctaLabel: "💬 Ouvrir le Chat WhatsApp",
    ctaCaption: "L'équipe recevra votre demande et vous répondra dès que possible",
    footer: "Profitez de votre séjour. On s'occupe du reste.",
  },
  es: {
    back: "← Volver",
    chooseLang: "Elige tu idioma",
    selectLang: "Selecciona tu idioma / Select your language",
    heroTitle: "¡Bienvenido/a, estamos aquí para ti!",
    heroSubtitle:
      "¿Estás experimentando un problema durante tu estancia? ¡No te preocupes! Tu anfitrión confía en nosotros, en Hommi, para garantizarte una experiencia impecable.",
    whenTitle: "¿Cuándo contactarnos?",
    urgTitle: "EMERGENCIAS",
    urgItems: [
      "Fugas de agua importantes",
      "Problemas eléctricos que comprometen la seguridad (ej. cortocircuito)",
      "Averías que hacen el apartamento inutilizable (ej. cerradura rota, ausencia total de agua o luz)",
    ],
    minorTitle: "PEQUEÑAS AVERÍAS O DUDAS",
    minorItems: [
      "Un grifo que gotea",
      "Una bombilla fundida",
      "Un electrodoméstico que no funciona correctamente",
      "Cualquier otro pequeño inconveniente",
    ],
    howTitle: "¿Cómo funciona?",
    howText:
      "Para reportar un problema, simplemente haz clic en el botón de abajo. Se abrirá un chat de WhatsApp, donde podrás describir brevemente la situación, especificando si se trata de una emergencia. Si es posible, adjunta una foto o un video. Un técnico evaluará la situación e intervendrá lo antes posible.",
    ctaLabel: "💬 Abrir Chat WhatsApp",
    ctaCaption: "El equipo recibirá tu solicitud y te responderá lo antes posible",
    footer: "Disfruta de tu estancia. Del resto nos encargamos nosotros.",
  },
  de: {
    back: "← Zurück",
    chooseLang: "Wähle deine Sprache",
    selectLang: "Wähle deine Sprache / Select your language",
    heroTitle: "Willkommen, wir sind für dich da!",
    heroSubtitle:
      "Hast du ein Problem während deines Aufenthalts? Keine Panik! Dein Gastgeber vertraut auf uns bei Hommi, um dir ein einwandfreies Erlebnis zu garantieren.",
    whenTitle: "Wann uns kontaktieren?",
    urgTitle: "NOTFÄLLE",
    urgItems: [
      "Größere Wasserlecks",
      "Elektrische Probleme, die die Sicherheit gefährden (z.B. Kurzschluss)",
      "Defekte, die die Wohnung unbenutzbar machen (z.B. kaputtes Schloss, kein Wasser oder Strom)",
    ],
    minorTitle: "KLEINE DEFEKTE ODER FRAGEN",
    minorItems: [
      "Ein tropfender Wasserhahn",
      "Eine durchgebrannte Glühbirne",
      "Ein Gerät, das nicht richtig funktioniert",
      "Jede andere kleine Unannehmlichkeit",
    ],
    howTitle: "Wie funktioniert es?",
    howText:
      "Um ein Problem zu melden, klicke einfach auf den Button unten. Ein WhatsApp-Chat wird geöffnet, in dem du die Situation kurz beschreiben kannst und angeben, ob es sich um einen Notfall handelt. Wenn möglich, füge ein Foto oder Video bei. Ein Techniker wird die Situation bewerten und so schnell wie möglich eingreifen.",
    ctaLabel: "💬 WhatsApp-Chat öffnen",
    ctaCaption: "Das Team wird deine Anfrage erhalten und so schnell wie möglich antworten",
    footer: "Genieße deinen Aufenthalt. Um den Rest kümmern wir uns.",
  },
  pt: {
    back: "← Voltar",
    chooseLang: "Escolha o seu idioma",
    selectLang: "Selecione o seu idioma / Select your language",
    heroTitle: "Bem-vindo/a, estamos aqui para si!",
    heroSubtitle:
      "Está a ter um problema durante a sua estadia? Não entre em pânico! O seu anfitrião confia em nós, na Hommi, para garantir uma experiência impecável.",
    whenTitle: "Quando nos contactar?",
    urgTitle: "EMERGÊNCIAS",
    urgItems: [
      "Fugas de água importantes",
      "Problemas elétricos que comprometem a segurança (ex. curto-circuito)",
      "Avarias que tornam o apartamento inutilizável (ex. fechadura partida, ausência total de água ou eletricidade)",
    ],
    minorTitle: "PEQUENAS AVARIAS OU DÚVIDAS",
    minorItems: [
      "Uma torneira a pingar",
      "Uma lâmpada fundida",
      "Um eletrodoméstico que não funciona corretamente",
      "Qualquer outro pequeno inconveniente",
    ],
    howTitle: "Como funciona?",
    howText:
      "Para reportar um problema, basta clicar no botão abaixo. Será aberto um chat WhatsApp, onde poderá descrever brevemente a situação, especificando se se trata de uma emergência. Se possível, anexe uma foto ou vídeo. Um técnico avaliará a situação e intervirá o mais rapidamente possível.",
    ctaLabel: "💬 Abrir Chat WhatsApp",
    ctaCaption: "A equipa receberá o seu pedido e responderá o mais brevemente possível",
    footer: "Aproveite a sua estadia. Do resto cuidamos nós.",
  },
  zh: {
    back: "← 返回",
    chooseLang: "选择您的语言",
    selectLang: "选择您的语言 / Select your language",
    heroTitle: "欢迎，我们在这里为您服务！",
    heroSubtitle:
      "您在入住期间遇到了问题？别担心！您的房东信赖我们Hommi，为您保障完美的体验。",
    whenTitle: "何时联系我们？",
    urgTitle: "紧急情况",
    urgItems: [
      "严重漏水",
      "影响安全的电气问题（如短路）",
      "导致公寓无法使用的故障（如锁坏了、完全没水没电）",
    ],
    minorTitle: "小故障或疑问",
    minorItems: [
      "水龙头滴水",
      "灯泡烧坏",
      "电器无法正常工作",
      "任何其他小问题",
    ],
    howTitle: "如何操作？",
    howText:
      "要报告问题，只需点击下面的按钮。将打开WhatsApp聊天，您可以简要描述情况，并说明是否紧急。如果可能，请附上照片或视频。技术人员会评估情况并尽快处理。",
    ctaLabel: "💬 打开WhatsApp聊天",
    ctaCaption: "团队将收到您的请求并尽快回复",
    footer: "享受您的住宿。其余的交给我们。",
  },
  ar: {
    back: "→ العودة",
    chooseLang: "اختر لغتك",
    selectLang: "اختر لغتك / Select your language",
    heroTitle: "!مرحباً، نحن هنا من أجلك",
    heroSubtitle:
      "هل تواجه مشكلة أثناء إقامتك؟ لا تقلق! يعتمد مضيفك علينا في Hommi لضمان تجربة لا تشوبها شائبة.",
    whenTitle: "متى تتواصل معنا؟",
    urgTitle: "حالات الطوارئ",
    urgItems: [
      "تسرب مياه كبير",
      "مشاكل كهربائية تهدد السلامة (مثل دائرة قصر)",
      "أعطال تجعل الشقة غير صالحة للاستخدام (مثل قفل مكسور، انقطاع كامل للمياه أو الكهرباء)",
    ],
    minorTitle: "أعطال صغيرة أو استفسارات",
    minorItems: [
      "صنبور يقطر",
      "مصباح محترق",
      "جهاز لا يعمل بشكل صحيح",
      "أي إزعاج صغير آخر",
    ],
    howTitle: "كيف يعمل؟",
    howText:
      "للإبلاغ عن مشكلة، ما عليك سوى النقر على الزر أدناه. سيتم فتح محادثة واتساب، حيث يمكنك وصف الموقف باختصار وتحديد ما إذا كان حالة طوارئ. إذا أمكن، أرفق صورة أو فيديو. سيقوم فني بتقييم الوضع والتدخل في أسرع وقت ممكن.",
    ctaLabel: "💬 فتح محادثة واتساب",
    ctaCaption: "سيتلقى الفريق طلبك وسيرد في أقرب وقت ممكن",
    footer: "استمتع بإقامتك. الباقي علينا.",
  },
};

export default function Ticket() {
  const [lang, setLang] = useState<Lang | null>(null);

  if (!lang) {
    return <LanguageSelector onSelect={setLang} />;
  }

  return <TicketContent lang={lang} onChangeLang={() => setLang(null)} />;
}

function LanguageSelector({ onSelect }: { onSelect: (l: Lang) => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 flex flex-col items-center justify-center px-4 py-12">
      <img src={LOGO} alt="Hommi" className="h-14 mb-6" />
      <p className="text-muted-foreground mb-8 text-center">
        Select your language / Seleziona la lingua
      </p>
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-xl font-bold text-center mb-6">Choose your language</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => onSelect(l.code)}
              className="flex flex-col items-center gap-1 rounded-xl border border-border bg-white hover:bg-blue-50 hover:border-primary/40 transition-colors py-4 px-2 text-center"
            >
              <span className="text-3xl">{l.flag}</span>
              <span className="text-sm font-medium">{l.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function TicketContent({ lang, onChangeLang }: { lang: Lang; onChangeLang: () => void }) {
  const t = T[lang];
  const currentLang = LANGUAGES.find((l) => l.code === lang)!;
  const isRtl = lang === "ar";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100" dir={isRtl ? "rtl" : "ltr"}>
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 max-w-4xl mx-auto">
        <button
          onClick={onChangeLang}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
        >
          {t.back}
        </button>
        <button
          onClick={onChangeLang}
          className="flex items-center gap-1.5 text-sm border border-border rounded-full px-3 py-1.5 bg-white hover:bg-blue-50 transition-colors"
        >
          <Globe className="w-4 h-4" />
          <span>{currentLang.flag}</span>
          <span className="hidden sm:inline">{currentLang.label}</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        <img src={LOGO} alt="Hommi" className="h-8" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 pb-16 space-y-8">
        {/* Hero Card */}
        <div className="bg-blue-100/60 rounded-2xl p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{t.heroTitle}</h1>
          <p className="text-muted-foreground leading-relaxed">{t.heroSubtitle}</p>
        </div>

        {/* When to contact us */}
        <div>
          <h2 className="text-xl font-bold mb-4">{t.whenTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Urgencies */}
            <div className="bg-white rounded-2xl border border-red-200 p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🔺</span>
                <h3 className="font-bold text-red-600">{t.urgTitle}</h3>
              </div>
              <ul className="space-y-2">
                {t.urgItems.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Minor */}
            <div className="bg-white rounded-2xl border border-blue-200 p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🔧</span>
                <h3 className="font-bold text-blue-600">{t.minorTitle}</h3>
              </div>
              <ul className="space-y-2">
                {t.minorItems.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div>
          <h2 className="text-xl font-bold mb-3">{t.howTitle}</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">{t.howText}</p>

          <div className="flex flex-col items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-lg rounded-full px-8 py-4 shadow-lg transition-colors w-full sm:w-auto text-center"
            >
              {t.ctaLabel}
            </a>
            <p className="text-xs text-muted-foreground text-center">{t.ctaCaption}</p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center italic text-muted-foreground pt-8 border-t border-border/50">
          {t.footer}
        </p>
      </div>
    </div>
  );
}
