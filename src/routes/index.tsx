import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { sendContact } from "@/lib/contact.functions";

const IMG = {
  hero: "/images/hero-bg.png",
  cemento: "/images/cemento_page.jpg",
  mortero: "/images/mortero_page.jpg",
  pegazulejo: "/images/pegazulejo_page.jpg",
  cal: "/images/cal_page.jpg",
  yeso: "/images/yeso_page.jpg",
  retroexcavadora: "/images/retroexcavadora.jpg",
  excavadora: "/images/excavadora.jpg",
  compactadora: "/images/compactadora.jpg",
  gruas: "/images/gruas.jpg",
  rayloader: "/images/rayloader.jpg",
  bobcat: "/images/bobcat.jpg",
  apizonador: "/images/apizonador.jpg",
  vibrocompactador: "/images/vibrocompactador.jpg",
  rodillos: "/images/rodillos.jpg",
  mezcladora: "/images/mezcladora.jpg",
  allanadora: "/images/allanadora.jpg",
  cortadora: "/images/cortadora.jpg",
  rotomartillo: "/images/rotomartillo.jpg",
  proyectoUtopia: "/images/proyecto-utopia.png",
  proyectoEdificacion: "/images/proyecto-edificacion.png",
  proyectoTrenMaya: "/images/proyecto-tren-maya.png",
  proyectoDosBocas: "/images/proyecto-dos-bocas.png",
  proyectoPintura: "/images/proyecto-pintura.png",
} as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CAMR — Comercializadora de Aceros y Materiales Reyes" },
      { name: "description", content: "Distribución de acero, cemento, concreto, agregados, prefabricados, renta de maquinaria y servicios para tu obra. Entregas puntuales en toda la República Mexicana." },
      { property: "og:title", content: "CAMR — Aceros y Materiales Reyes" },
      { property: "og:description", content: "Siempre preparados. Acero, cemento, concreto, maquinaria y servicios para construcción." },
    ],
  }),
  component: Index,
});

const PHONE_PRIMARY = "5561038103";
const PHONE_SECONDARY = "5510456007";
const PHONE_OFFICE_INTL = "525510456007";
const WHATSAPP = "5210456007"; // sin signo, formato wa.me
const EMAIL_VENTAS = "ventas1@acerosymetalesreyes.com";
const EMAIL_ADMIN = "administracion@acerosymetalesreyes.com";

const NAV = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#maquinaria", label: "Maquinaria" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

const PRODUCTOS = [
  {
    cat: "Acero",
    items: [
      { n: "Varilla", d: "SICARTSA (ArcelorMittal), DEACERO, Hylsa, Gerdau." },
      { n: "Alambrón", d: "Calibre 16 — unidad KG." },
      { n: "Alambre recocido", d: "Calibre 16 — unidad KG." },
      { n: "Malla electrosoldada", d: "6x6 10/10, 6x6 8/8, 6x6 6/6 — pieza." },
      { n: "Castillos Armex", d: "10x10, 10x15, 10x20, 10x25 — pieza." },
      { n: "Estribos / Anillos", d: "Estándar y especiales, fabricados de alambrón 1/4\"." },
      { n: "Clavos", d: "Caja 25 kg." },
    ],
  },
  {
    cat: "Cemento y Mortero",
    items: [
      { n: "Cemento gris", d: "Holcim Fuerte EcoPlanet, Cemex Maya Extra, Cemex Tolteca Extra, Fortaleza, Cruz Azul. Bulto 50 kg o tonelada.", img: IMG.cemento },
      { n: "Mortero", d: "Cemex Tolteca Óptimo, Cruz Azul, Fortaleza. Bulto 50 kg o tonelada.", img: IMG.mortero },
      { n: "Pegazulejo", d: "Fortec, Cuvasa Blanco, Crest Blanco. Bulto 20 kg o tonelada.", img: IMG.pegazulejo },
      { n: "Cal hidratada", d: "Ejido Progreso, Calidra, Procal. Bulto 25 kg o tonelada.", img: IMG.cal },
      { n: "Yeso", d: "Las Peñitas. Bulto 40 kg o tonelada.", img: IMG.yeso },
    ],
  },
  {
    cat: "Agregados y Concreto",
    items: [
      { n: "Grava y arena", d: "Viaje por m³." },
      { n: "Concreto premezclado", d: "Clase 1 y Clase 2." },
      { n: "Concretos de alta resistencia", d: "Bajo especificación." },
      { n: "Concretos MR", d: "Para pavimentos y losas." },
      { n: "Bomba estacionaria", d: "Servicio de bombeo en sitio." },
      { n: "Bomba telescópica", d: "Alcance de 24 a 36 m." },
    ],
  },
  {
    cat: "Prefabricados",
    items: [
      { n: "Block hueco / ligero / pesado", d: "Medida estándar — unidad millar." },
      { n: "Tabicón", d: "Medida estándar — unidad millar." },
      { n: "Tabique rojo recocido", d: "Medida estándar — unidad millar." },
    ],
  },
  {
    cat: "Otros suministros",
    items: [
      { n: "Material eléctrico", d: "Cableado, accesorios y equipos." },
      { n: "Material hidrosanitario", d: "Tubería, conexiones y accesorios." },
      { n: "Pintura", d: "Vinílica, esmalte y línea industrial." },
    ],
  },
];

const MAQUINARIA = [
  { n: "Retroexcavadora", t: "Maquinaria pesada", img: IMG.retroexcavadora },
  { n: "Excavadora", t: "Maquinaria pesada", img: IMG.excavadora },
  { n: "Compactadora", t: "Maquinaria pesada", img: IMG.compactadora },
  { n: "Grúas (National Crane)", t: "Maquinaria pesada", img: IMG.gruas },
  { n: "Rayloader", t: "Maquinaria pesada", img: IMG.rayloader },
  { n: "Bobcat", t: "Maquinaria pesada", img: IMG.bobcat },
  { n: "Apizonador", t: "Maquinaria ligera", img: IMG.apizonador },
  { n: "Vibrocompactador", t: "Maquinaria ligera", img: IMG.vibrocompactador },
  { n: "Rodillos vibratorios", t: "Maquinaria ligera (sencillo y doble)", img: IMG.rodillos },
  { n: "Mezcladora de concreto", t: "Equipo de concreto", img: IMG.mezcladora },
  { n: "Allanadora", t: "Equipo de concreto", img: IMG.allanadora },
  { n: "Cortadora de concreto", t: "Equipo de concreto", img: IMG.cortadora },
  { n: "Rotomartillo DeWalt", t: "Herramienta", img: IMG.rotomartillo },
];

const SERVICIOS = [
  { n: "Retiro de escombros", d: "Medida por viaje — unidad m³." },
  { n: "Instalaciones eléctricas", d: "Subestación, planta de emergencia, UPS, cuarto eléctrico, oficinas y boutiques." },
  { n: "Aire acondicionado", d: "Chiller, fan & coil, compresores, VRF/VRV, mini splits, ductería." },
  { n: "Conservación general", d: "Red hidrosanitaria, pisos epóxicos, restauración de mobiliario." },
  { n: "Instalaciones especiales", d: "Cableado estructurado, CCTV, control de accesos, audio/video, fumigación, extintores." },
];

const PROYECTOS = [
  { n: "Centro recreativo Utopía-Libertad", d: "Suministro de materiales y concreto." },
  { n: "Edificación vertical (departamentos)", d: "Suministro de concreto." },
  { n: "Tren Maya", d: "Suministro de acero y materiales." },
  { n: "Refinería Dos a Bocas", d: "Suministro de materiales y acero." },
  { n: "Suministro de pintura a municipio", d: "Abastecimiento institucional." },
  { n: "Suministro en el Sureste", d: "Proyecto de Desarrollo de vivienda" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-3 focus:py-2 focus:rounded">Saltar al contenido</a>
      <Header />
      <main id="main">
        <Hero />
        <Nosotros />
        <Productos />
        <Maquinaria />
        <Servicios />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`text-2xl font-black tracking-tight ${light ? "text-white" : "text-primary"}`}>
        CAMR
      </div>
      <div className={`hidden sm:block text-[10px] leading-tight uppercase tracking-wider ${light ? "text-white/80" : "text-muted-foreground"}`}>
        Aceros y Materiales<br />Reyes · Siempre Preparados
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} aria-label="Inicio CAMR"><Logo /></a>
        <nav aria-label="Principal" className="hidden lg:flex items-center gap-6">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={(e) => scrollToSection(e, n.href)} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">{n.label}</a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <a href={`tel:${PHONE_PRIMARY}`} className="text-sm font-semibold text-foreground hover:text-primary">55 6103 8103</a>
          <a href="#contacto" onClick={(e) => scrollToSection(e, "#contacto")} className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-dark transition-colors">Cotizar</a>
        </div>
        <button
          aria-label="Abrir menú"
          aria-expanded={open}
          className="lg:hidden inline-flex items-center justify-center rounded-md border border-border p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {open ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2" aria-label="Móvil">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={(e) => scrollToSection(e, n.href)} className="py-3 text-sm font-medium border-b border-border last:border-0">{n.label}</a>
            ))}
            <a href="#contacto" onClick={(e) => scrollToSection(e, "#contacto")} className="my-3 rounded-md bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground">Cotizar ahora</a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMG.hero})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink/80" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary-foreground/80">Siempre Preparados</p>
        <h1 className="mt-4 text-[26px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black break-words max-w-4xl">
          COMERCIALIZADORA DE <span className="text-primary" style={{ color: "oklch(0.7 0.18 264)" }}>ACERO Y MATERIALES REYES</span> SA DE CV
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/80">
          Material de calidad, entrega garantizada. Sin retrasos, sin sorpresas. Distribución de acero, cemento, concreto, agregados, prefabricados, maquinaria y servicios directo a tu obra en toda la República Mexicana.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contacto" className="rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:bg-primary-dark transition-colors">Solicitar cotización</a>
          <a href={`tel:${PHONE_PRIMARY}`} className="rounded-md border border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">Llamar ahora</a>
          <a href="#productos" className="rounded-md px-6 py-3 text-sm font-bold text-white/90 hover:text-white">Ver catálogo →</a>
        </div>
        <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
          {[
            ["+30", "Productos en catálogo"],
            ["100%", "Cobertura nacional"],
            ["Lun-Sáb", "7:00 a 17:00 hrs"],
            ["Premium", "Marcas líderes"],
          ].map(([k, v]) => (
            <div key={v} className="border-l-2 border-primary pl-4">
              <dt className="text-2xl font-black">{k}</dt>
              <dd className="text-xs uppercase tracking-wider text-white/70">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children, dark = false }: { id?: string; eyebrow: string; title: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${dark ? "bg-secondary" : "bg-background"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-black text-ink max-w-3xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <Section id="nosotros" eyebrow="Quiénes Somos" title="La diferencia entre una obra atrasada y una obra entregada a tiempo.">
      <div className="grid gap-8 md:grid-cols-2">
        <p className="text-base text-foreground/80 leading-relaxed">
          En CAMR no vendemos materiales: entregamos tranquilidad. Nuestra flota propia y red de socios comerciales garantizan que tu acero, cemento, concreto o maquinaria lleguen exactamente cuando los necesitas, sin excusas y sin costos ocultos.
        </p>
        <p className="text-base text-foreground/80 leading-relaxed">
          Desde Cuautitlán Izcalli hasta cualquier rincón de la República, operamos con una sola promesa: cumplir. Marcas certificadas, logística ágil y atención personalizada que convierte a nuestros clientes en aliados de largo plazo.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          ["Calidad innegociable", "ArcelorMittal, Cemex, Holcim, Cruz Azul, Fortaleza, DeWalt. Solo marcas que respaldan tu obra."],
          ["Cobertura sin límites", "Logística propia y aliados estratégicos para entregar donde otros no llegan."],
          ["Todo en un solo proveedor", "Materiales + maquinaria + servicios. Menos contratos, más resultados."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-lg border border-border bg-card p-6">
            <div className="h-1 w-10 bg-primary mb-4" aria-hidden="true" />
            <h3 className="font-bold text-ink">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ProductModal({ img, name, onClose }: { img: string; name: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative z-10 max-w-3xl w-full rounded-xl bg-card border border-border shadow-2xl p-4 sm:p-6" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 rounded-full p-1 text-muted-foreground hover:text-foreground transition-colors" aria-label="Cerrar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
        <h3 className="text-lg font-black text-ink mb-4 pr-8">{name}</h3>
        <img src={img} alt={name} className="w-full rounded-lg border border-border object-contain max-h-[70vh]" loading="lazy" />
      </div>
    </div>
  );
}

function Productos() {
  const [modal, setModal] = useState<{ img: string; name: string } | null>(null);

  return (
    <Section id="productos" eyebrow="Productos" title="Todo lo que tu obra necesita, en un solo lugar." dark>
      {modal && <ProductModal img={modal.img} name={modal.name} onClose={() => setModal(null)} />}
      <div className="grid gap-6 lg:grid-cols-2">
        {PRODUCTOS.map((cat) => (
          <article key={cat.cat} className="rounded-lg border border-border bg-card p-6">
            <header className="flex items-center justify-between border-b border-border pb-3 mb-4">
              <h3 className="text-lg font-black text-ink">{cat.cat}</h3>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">{cat.items.length} productos</span>
            </header>
            <ul className="divide-y divide-border">
              {cat.items.map((it) => (
                <li key={it.n} className="py-3 flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground">{it.n}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{it.d}</p>
                  </div>
                  {"img" in it && it.img && (
                    <button
                      onClick={() => setModal({ img: it.img, name: it.n })}
                      className="shrink-0 rounded-md bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      Ver producto
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Maquinaria() {
  const [modal, setModal] = useState<{ img: string; name: string } | null>(null);
  const groups = MAQUINARIA.reduce<Record<string, typeof MAQUINARIA>>((acc, m) => {
    (acc[m.t] ||= []).push(m);
    return acc;
  }, {});
  return (
    <Section id="maquinaria" eyebrow="Renta de Maquinaria" title="Maquinaria lista para trabajar desde el primer día.">
      {modal && <ProductModal img={modal.img} name={modal.name} onClose={() => setModal(null)} />}
      <p className="-mt-6 mb-8 text-sm text-muted-foreground">* Sujeto a disponibilidad. Consulta tarifas y plazos.</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(groups).map(([tipo, items]) => (
          <div key={tipo} className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">{tipo}</h3>
            <ul className="mt-4 space-y-2">
              {items.map((m) => (
                <li key={m.n} className="flex items-center justify-between gap-2 text-sm">
                  <div className="flex items-start gap-2 min-w-0">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                    <span className="text-foreground">{m.n}</span>
                  </div>
                  <button
                    onClick={() => setModal({ img: m.img, name: m.n })}
                    className="shrink-0 rounded-md bg-primary/10 px-2 py-1 text-[11px] font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Ver
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Servicios() {
  return (
    <Section id="servicios" eyebrow="Servicios" title="Servicios integrales que mantienen tu obra en marcha." dark>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SERVICIOS.map((s) => (
          <div key={s.n} className="rounded-lg bg-card border border-border p-6 hover:border-primary transition-colors">
            <h3 className="font-bold text-ink">{s.n}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Proyectos() {
  const bgMap: Record<number, string> = {
    0: IMG.proyectoUtopia,
    1: IMG.proyectoEdificacion,
    2: IMG.proyectoTrenMaya,
    3: IMG.proyectoDosBocas,
    4: IMG.proyectoPintura,
  };
  const hasBg = (i: number) => i in bgMap;

  return (
    <Section id="proyectos" eyebrow="Proyectos" title="Grandes obras nos respaldan. Tu proyecto está en buenas manos.">
      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROYECTOS.map((p, i) => (
          <li key={p.n} className={`rounded-lg border border-border p-6 relative overflow-hidden ${hasBg(i) ? "" : "bg-card"}`}>
            {hasBg(i) && (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${bgMap[i]})` }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-ink/75" aria-hidden="true" />
              </>
            )}
            <span className={`absolute top-4 right-4 text-5xl font-black ${hasBg(i) ? "text-white/15" : "text-primary/10"}`} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <h3 className={`font-bold relative ${hasBg(i) ? "text-white" : "text-ink"}`}>{p.n}</h3>
            <p className={`mt-2 text-sm relative ${hasBg(i) ? "text-white/80" : "text-muted-foreground"}`}>{p.d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Contacto() {
  const [form, setForm] = useState({ nombre: "", empresa: "", telefono: "", email: "", producto: "", mensaje: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const sendContactFn = useServerFn(sendContact);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      await sendContactFn({ data: form });
      setStatus("sent");
      setForm({ nombre: "", empresa: "", telefono: "", email: "", producto: "", mensaje: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "No se pudo enviar el mensaje. Intenta más tarde o escríbenos por WhatsApp.",
      );
    }
  };

  const sendWhatsApp = () => {
    const text = `Hola CAMR, soy ${form.nombre || "[nombre]"}${form.empresa ? ` de ${form.empresa}` : ""}. Me interesa cotizar: ${form.producto || "[producto/servicio]"}. ${form.mensaje}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contacto" className="bg-ink text-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: "oklch(0.7 0.18 264)" }}>Cotizaciones</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black">Cotiza hoy y recibe respuesta en menos de 24 horas.</h2>
          <p className="mt-4 text-white/80 max-w-md">No dejes que tu obra se detenga. Comparte los detalles y te enviamos la propuesta más competitiva del mercado, con entrega garantizada.</p>

          <ul className="mt-8 space-y-5 text-sm">
            <ContactItem label="Teléfonos">
              <a href={`tel:${PHONE_PRIMARY}`} className="block hover:underline">55 6103 8103</a>
              <a href={`tel:${PHONE_SECONDARY}`} className="block hover:underline">55 1045 6007</a>
            </ContactItem>
            <ContactItem label="Número de oficina">
              <a href={`tel:${PHONE_OFFICE_INTL}`} className="block hover:underline">52 55 1045 6007</a>
            </ContactItem>
            <ContactItem label="Email">
              <a href={`mailto:${EMAIL_VENTAS}`} className="block hover:underline">{EMAIL_VENTAS}</a>
              <a href={`mailto:${EMAIL_ADMIN}`} className="block hover:underline">{EMAIL_ADMIN}</a>
            </ContactItem>
            <ContactItem label="Horario">
              <span>Lunes a sábado · 7:00 a 17:00 hrs</span>
            </ContactItem>
            <ContactItem label="Ubicación">
              <span>Cuautitlán Izcalli, Estado de México</span>
            </ContactItem>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-lg bg-white text-foreground p-6 sm:p-8 shadow-2xl" aria-label="Formulario de cotización">
          <h3 className="text-lg font-black text-ink">Formulario de cotización</h3>
          <p className="text-sm text-muted-foreground mt-1">* Campos obligatorios</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Nombre completo *" id="nombre" value={form.nombre} onChange={(v) => setForm({ ...form, nombre: v })} required />
            <Field label="Empresa" id="empresa" value={form.empresa} onChange={(v) => setForm({ ...form, empresa: v })} />
            <Field label="Teléfono *" id="telefono" type="tel" value={form.telefono} onChange={(v) => setForm({ ...form, telefono: v })} required />
            <Field label="Email *" id="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
          </div>

          <div className="mt-4">
            <label htmlFor="producto" className="block text-sm font-semibold text-ink">Producto o servicio *</label>
            <select
              id="producto"
              required
              value={form.producto}
              onChange={(e) => setForm({ ...form, producto: e.target.value })}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            >
              <option value="">Selecciona una categoría</option>
              <option>Acero (varilla, alambre, malla, armex, estribos)</option>
              <option>Cemento / Mortero / Cal / Yeso</option>
              <option>Concreto premezclado / Bombeo</option>
              <option>Agregados (grava, arena)</option>
              <option>Prefabricados (block, tabicón, tabique)</option>
              <option>Material eléctrico / hidrosanitario / pintura</option>
              <option>Renta de maquinaria</option>
              <option>Servicios (retiro de escombro, instalaciones, mantenimiento)</option>
              <option>Otro</option>
            </select>
          </div>

          <div className="mt-4">
            <label htmlFor="mensaje" className="block text-sm font-semibold text-ink">Detalles del proyecto *</label>
            <textarea
              id="mensaje"
              required
              rows={4}
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              placeholder="Cantidad, medidas, fecha de entrega, ubicación de obra…"
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex-1 min-w-[160px] rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Enviando…" : "Enviar cotización"}
            </button>
            <button type="button" onClick={sendWhatsApp} className="flex-1 min-w-[160px] rounded-md border-2 border-primary px-6 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              Enviar por WhatsApp
            </button>
          </div>
          {status === "sent" && (
            <p className="mt-4 text-sm text-primary font-semibold" role="status">
              ¡Mensaje enviado! Te responderemos a la brevedad.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-destructive font-semibold" role="alert">
              {errorMsg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function ContactItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <li>
      <p className="text-xs font-bold uppercase tracking-wider text-white/60">{label}</p>
      <div className="mt-1 text-white">{children}</div>
    </li>
  );
}

function Field({ label, id, value, onChange, type = "text", required }: { label: string; id: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink">{label}</label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white/80 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 text-sm max-w-xs text-white/60">
            Comercializadora de Aceros y Materiales Reyes SA de CV. Distribución para construcción en toda la República Mexicana.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Navegación</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-white">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contacto</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={`tel:${PHONE_PRIMARY}`} className="hover:text-white">55 6103 8103</a></li>
            <li><a href={`tel:${PHONE_SECONDARY}`} className="hover:text-white">55 1045 6007</a></li>
            <li><a href={`mailto:${EMAIL_VENTAS}`} className="hover:text-white break-all">{EMAIL_VENTAS}</a></li>
            <li>Lun-Sáb · 7:00 a 17:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-white/50 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} CAMR — Comercializadora de Aceros y Materiales Reyes SA de CV.</span>
          <span>Siempre Preparados.</span>
        </div>
      </div>
    </footer>
  );
}
