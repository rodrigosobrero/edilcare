import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Hammer,
  Layers,
  Droplets,
  Zap,
  Paintbrush2,
  SquareStack,
  DoorOpen,
  Package,
  TriangleAlert,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import heroVideo from "../assets/videos/hero.mp4";

/* ── DATA ── */

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sectores", label: "Sectores" },
  { href: "#contacto", label: "Contacto" },
];

const services = [
  { icon: Hammer,        label: "Albañilería" },
  { icon: Layers,        label: "Construcción en seco" },
  { icon: Droplets,      label: "Inst. sanitarias" },
  { icon: Zap,           label: "Inst. eléctricas" },
  { icon: Paintbrush2,   label: "Pintura" },
  { icon: SquareStack,   label: "Revestimientos vinílicos" },
  { icon: DoorOpen,      label: "Carpintería" },
  { icon: Package,       label: "Mobiliario y equipamiento" },
  { icon: TriangleAlert, label: "Señalética" },
];

const sectors = [
  {
    title: "Sanatorios",
    desc: "Ambientes limpios, modernos y funcionales que cumplen con las normativas del sector salud.",
    img: "https://images.unsplash.com/photo-1719934398679-d764c1410770?w=700&h=500&fit=crop&auto=format",
    alt: "Pasillo de sanatorio moderno renovado",
  },
  {
    title: "Bancos",
    desc: "Espacios institucionales de alta exigencia estética que proyectan solidez y confianza.",
    img: "https://images.unsplash.com/photo-1576060979108-a59f58c25cc0?w=700&h=500&fit=crop&auto=format",
    alt: "Interior bancario elegante e institucional",
  },
  {
    title: "Oficinas",
    desc: "Entornos de trabajo profesionales y productivos, renovados con mínima interrupción operativa.",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&h=500&fit=crop&auto=format",
    alt: "Oficina corporativa moderna con pasillo de vidrio",
  },
  {
    title: "Escuelas",
    desc: "Instalaciones educativas seguras, bien mantenidas y acordes a las normativas vigentes.",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&h=500&fit=crop&auto=format",
    alt: "Aula escolar moderna y bien equipada",
  },
];

const differentials = [
  {
    n: "01",
    title: "Sin interrumpir la actividad",
    desc: "Coordinamos horarios y etapas para que sus operaciones continúen con normalidad durante toda la obra.",
  },
  {
    n: "02",
    title: "Planificación y cumplimiento de plazos",
    desc: "Cada proyecto cuenta con un cronograma detallado. Nos comprometemos con las fechas acordadas.",
  },
  {
    n: "03",
    title: "Personal capacitado",
    desc: "Equipo propio con formación técnica específica en cada rubro. Sin tercerización de los trabajos clave.",
  },
  {
    n: "04",
    title: "Soluciones integrales",
    desc: "Cubrimos todas las especialidades del mantenimiento edilicio bajo una sola coordinación.",
  },
  {
    n: "05",
    title: "Terminaciones de calidad",
    desc: "Materiales seleccionados y procesos de control que garantizan resultados prolijos y duraderos.",
  },
];

/* ── COMPONENT ── */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">

      {/* ══ NAV ══ */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[68px] flex items-center justify-between">
          <a href="#" className="flex flex-col leading-none select-none group">
            <span
              className="text-[1.25rem] font-semibold tracking-tight text-primary transition-opacity group-hover:opacity-80"
              style={{ fontFamily: "Lora, Georgia, serif" }}
            >
              EDILCARE
            </span>
            <span className="text-[9px] tracking-[0.22em] uppercase text-muted-foreground mt-[2px]">
              Mantenimiento Edilicio
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-2 bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 hover:bg-primary/90 transition-colors duration-150"
            >
              Solicitar presupuesto
            </a>
          </nav>

          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menú"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-primary text-primary-foreground text-sm font-medium px-5 py-3 text-center mt-1"
              onClick={() => setMenuOpen(false)}
            >
              Solicitar presupuesto
            </a>
          </div>
        )}
      </header>

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-[68px]">
        {/* background video + overlay */}
        <div className="absolute inset-0">
          <video
            src={heroVideo}
            className="w-full h-full object-cover scale-105"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-primary/70" />
          {/* subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        {/* content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center gap-7">
          <p className="text-[11px] tracking-[0.35em] uppercase text-accent font-medium">
            Mantenimiento Edilicio Estético
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.06]"
            style={{ fontFamily: "Lora, Georgia, serif" }}
          >
            Espacios que{" "}
            <em className="italic font-normal text-accent">proyectan</em>{" "}
            confianza
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl">
            Mantenimiento y renovación estética para clínicas, colegios,
            consultorios y oficinas.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Solicitar presupuesto
              <ArrowRight size={15} />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* scroll cue */}
        <a
          href="#nosotros"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
          aria-label="Seguir leyendo"
        >
          <span className="text-[10px] tracking-widest uppercase">Descubrí más</span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </section>

      {/* ══ NOSOTROS ══ */}
      <section id="nosotros" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* text */}
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium mb-5">
                Nosotros
              </p>
              <h2
                className="text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-7"
                style={{ fontFamily: "Lora, Georgia, serif" }}
              >
                Mantenimiento que no detiene lo que importa
              </h2>
              <p className="text-muted-foreground leading-[1.85] text-[1.05rem]">
                Ofrecemos servicios de mantenimiento edilicio orientados a
                espacios de trabajo que requieren mejoras planificadas,
                eficientes y ordenadas, sin detener la operatividad. Nos
                adaptamos a las particularidades y horarios de cada
                establecimiento.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                {[
                  "Equipos propios en todas las especialidades",
                  "Coordinación centralizada de cada proyecto",
                  "Garantía escrita sobre materiales y mano de obra",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1482731215275-a1f151646268?w=900&h=675&fit=crop&auto=format"
                  alt="Trabajador de mantenimiento en entorno corporativo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* accent corner */}
              <div className="absolute -bottom-4 -left-4 w-28 h-28 border-l-4 border-b-4 border-accent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICIOS ══ */}
      <section id="servicios" className="bg-secondary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14 lg:mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium mb-4">
              Servicios
            </p>
            <h2
              className="text-4xl lg:text-5xl font-semibold text-foreground"
              style={{ fontFamily: "Lora, Georgia, serif" }}
            >
              Soluciones integrales bajo una sola coordinación
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-px bg-border">
            {services.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-background group flex flex-col items-center justify-center gap-4 py-10 px-6 text-center hover:bg-primary transition-colors duration-200 cursor-default"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary-foreground/20 transition-colors duration-200">
                  <Icon
                    size={22}
                    className="text-accent group-hover:text-accent transition-colors duration-200"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-sm font-medium text-foreground group-hover:text-primary-foreground transition-colors duration-200 leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTORES ══ */}
      <section id="sectores" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14 lg:mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium mb-4">
              Sectores
            </p>
            <h2
              className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight"
              style={{ fontFamily: "Lora, Georgia, serif" }}
            >
              Especialización por rubro
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sectors.map((s) => (
              <div key={s.title} className="group relative overflow-hidden bg-muted h-80 cursor-default">
                <img
                  src={s.img}
                  alt={s.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* gradient always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3
                    className="text-xl font-semibold text-white mb-2"
                    style={{ fontFamily: "Lora, Georgia, serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[12px] text-white/65 leading-relaxed">
                    {s.desc}
                  </p>
                  {/* accent line on hover */}
                  <div className="mt-4 h-[2px] w-8 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DIFERENCIALES ══ */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[380px_1fr] gap-14 lg:gap-20">
            {/* label */}
            <div className="flex flex-col justify-center">
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium mb-5">
                Por qué elegirnos
              </p>
              <h2
                className="text-4xl lg:text-5xl font-semibold text-primary-foreground leading-tight"
                style={{ fontFamily: "Lora, Georgia, serif" }}
              >
                Nuestros diferenciales
              </h2>
            </div>

            {/* list */}
            <div className="divide-y divide-primary-foreground/10">
              {differentials.map((d) => (
                <div
                  key={d.n}
                  className="py-6 grid grid-cols-[44px_1fr] gap-4 group"
                >
                  <span className="text-[11px] font-mono text-accent pt-0.5">
                    {d.n}
                  </span>
                  <div>
                    <h3 className="font-medium text-primary-foreground mb-1">
                      {d.title}
                    </h3>
                    <p className="text-sm text-primary-foreground/55 leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACTO ══ */}
      <section id="contacto" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[360px_1fr] gap-14 lg:gap-20">
            {/* info */}
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium mb-5">
                Contacto
              </p>
              <h2
                className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6"
                style={{ fontFamily: "Lora, Georgia, serif" }}
              >
                Hablemos de su proyecto
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-10">
                Realizamos una visita técnica sin cargo para evaluar sus
                instalaciones y presentar una propuesta a medida. Respondemos
                en menos de 24 horas hábiles.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { icon: Phone, text: "+54 11 4XXX-XXXX" },
                  { icon: Mail,  text: "info@edilcare.com.ar" },
                  { icon: MapPin, text: "Buenos Aires, Argentina" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-secondary border border-border">
                      <Icon size={15} className="text-primary" />
                    </div>
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nombre *">
                  <input
                    required
                    value={form.nombre}
                    onChange={set("nombre")}
                    placeholder="Su nombre completo"
                    className={inputCls}
                  />
                </Field>
                <Field label="Empresa *">
                  <input
                    required
                    value={form.empresa}
                    onChange={set("empresa")}
                    placeholder="Nombre de la empresa o institución"
                    className={inputCls}
                  />
                </Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Teléfono">
                  <input
                    type="tel"
                    value={form.telefono}
                    onChange={set("telefono")}
                    placeholder="+54 11 ..."
                    className={inputCls}
                  />
                </Field>
                <Field label="Email *">
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={set("email")}
                    placeholder="su@email.com"
                    className={inputCls}
                  />
                </Field>
              </div>
              <Field label="Mensaje">
                <textarea
                  rows={5}
                  value={form.mensaje}
                  onChange={set("mensaje")}
                  placeholder="Describí el espacio, el tipo de trabajo y cualquier detalle relevante..."
                  className={`${inputCls} resize-none`}
                />
              </Field>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
                <p className="text-xs text-muted-foreground">
                  Visita técnica sin cargo · Respuesta en 24 hs hábiles
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium hover:bg-primary/90 transition-colors duration-150 flex-shrink-0"
                >
                  Enviar consulta
                  <ArrowRight size={15} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ══ */}
      <section className="bg-secondary border-t border-border py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <h2
            className="text-3xl lg:text-4xl font-semibold text-foreground leading-tight"
            style={{ fontFamily: "Lora, Georgia, serif" }}
          >
            Mantenemos sus instalaciones en su mejor versión.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
            Un edificio bien mantenido proyecta la imagen de quienes lo habitan.
            Estamos listos para trabajar con usted.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium hover:bg-primary/90 transition-colors duration-150"
          >
            Solicitar presupuesto
            <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="bg-primary border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <span
              className="font-semibold text-primary-foreground"
              style={{ fontFamily: "Lora, Georgia, serif" }}
            >
              EDILCARE
            </span>
            <span className="ml-3 text-xs text-primary-foreground/40">
              Mantenimiento Edilicio Estético · Buenos Aires
            </span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-primary-foreground/30">
            © 2026 Edilcare. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ── HELPERS ── */

const inputCls =
  "w-full border border-border bg-input-background px-3.5 py-3 text-sm focus:outline-none focus:border-primary transition-colors duration-150";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-medium text-foreground uppercase tracking-[0.18em]">
        {label}
      </label>
      {children}
    </div>
  );
}
