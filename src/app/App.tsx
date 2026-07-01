import { useEffect, useState } from "react";
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
import heroImage from "../assets/images/hero-institution-maintenance.png";

/* ── DATA ── */

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sectores", label: "Áreas" },
  { href: "#contacto", label: "Contacto" },
];

const services = [
  { icon: Hammer,        label: "Albañilería" },
  { icon: Layers,        label: "Construcción en seco" },
  { icon: Droplets,      label: "Inst. sanitarias" },
  { icon: Zap,           label: "Inst. eléctricas" },
  { icon: Paintbrush2,   label: "Pintura" },
  { icon: SquareStack,   label: "Revestimientos vinílicos y empapelado" },
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

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -80px 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    setMenuOpen(false);

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">

      {/* ══ NAV ══ */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[68px] flex items-center justify-between">
          <a
            href="#"
            className="flex flex-col leading-none select-none group"
            onClick={(event) => scrollToSection(event, "#")}
          >
            <span
              className="text-[1.94rem] font-semibold tracking-tight text-primary transition-opacity group-hover:opacity-80"
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
                onClick={(event) => scrollToSection(event, l.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(event) => scrollToSection(event, "#contacto")}
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
                onClick={(event) => scrollToSection(event, l.href)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-primary text-primary-foreground text-sm font-medium px-5 py-3 text-center mt-1"
              onClick={(event) => scrollToSection(event, "#contacto")}
            >
              Solicitar presupuesto
            </a>
          </div>
        )}
      </header>

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-[68px]">
        {/* background image + overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover scale-105"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-primary/70" />
          {/* subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        {/* content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center gap-7">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.06]"
            style={{ fontFamily: "Lora, Georgia, serif" }}
          >
            Entorno cuidado, operaciones eficientes
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-xl">
            Mantenimiento y renovación estética para instituciones de salud,
            educativas y empresas.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            <a
              href="#contacto"
              onClick={(event) => scrollToSection(event, "#contacto")}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Solicitar presupuesto
              <ArrowRight size={15} />
            </a>
            <a
              href="#servicios"
              onClick={(event) => scrollToSection(event, "#servicios")}
              className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* scroll cue */}
        <a
          href="#nosotros"
          onClick={(event) => scrollToSection(event, "#nosotros")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
          aria-label="Seguir leyendo"
        >
          <span className="text-[10px] tracking-widest uppercase">Descubrí más</span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </section>

      {/* ══ NOSOTROS ══ */}
      <section id="nosotros" className="reveal-on-scroll py-24 lg:py-32">
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
                Realizamos tareas de mantenimiento edilicio orientadas a
                espacios de trabajo que requieren mejoras planificadas,
                eficientes y ordenadas, sin detener la operatividad. Nos
                adaptamos a las particularidades y horarios de cada
                establecimiento.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                {[
                  "Mano de obra especializada para cada rubro",
                  "Coordinación centralizada de cada obra",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border border-accent/25 bg-accent/10 px-4 py-3 text-sm text-foreground"
                  >
                    <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
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
      <section id="servicios" className="reveal-on-scroll bg-primary py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-10 border-b border-primary-foreground/15">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium mb-4">
                Servicios
              </p>
              <h2
                className="text-4xl lg:text-5xl font-semibold text-primary-foreground leading-tight"
                style={{ fontFamily: "Lora, Georgia, serif" }}
              >
                Ejecución y coordinación
                <br />
                <em className="italic font-normal text-accent">integral de obras</em>
              </h2>
            </div>
            <p className="text-primary-foreground/55 text-sm leading-relaxed max-w-xs">
              Cubrimos especialidades de mantenimiento edilicio con mano de obra
              especializada y coordinación centralizada.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-primary-foreground/10">
            {services.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group flex min-h-[190px] flex-col items-center justify-start gap-5 py-10 px-6 text-center bg-primary cursor-default hover:bg-primary-foreground/5 transition-colors duration-200"
              >
                <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-primary-foreground/5 border border-primary-foreground/10 group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                  <Icon
                    size={36}
                    className="text-accent group-hover:text-accent-foreground transition-colors duration-300"
                    strokeWidth={1.25}
                  />
                </div>
                <span
                  className="text-xl font-medium text-primary-foreground/80 group-hover:text-primary-foreground transition-colors duration-200 leading-snug"
                  style={{ fontFamily: "Lora, Georgia, serif" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTORES ══ */}
      <section id="sectores" className="reveal-on-scroll py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14 lg:mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium mb-4">
              Áreas
            </p>
            <h2
              className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight"
              style={{ fontFamily: "Lora, Georgia, serif" }}
            >
              Especialización
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
                  {/* accent line on hover */}
                  <div className="mt-4 h-[2px] w-8 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACTO ══ */}
      <section id="contacto" className="reveal-on-scroll bg-primary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[360px_1fr] gap-14 lg:gap-20">
            {/* info */}
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium mb-5">
                Contacto
              </p>
              <h2
                className="text-4xl lg:text-5xl font-semibold text-primary-foreground leading-tight mb-6"
                style={{ fontFamily: "Lora, Georgia, serif" }}
              >
                Hablemos de su proyecto
              </h2>
              <p className="text-primary-foreground/60 leading-relaxed text-sm mb-10">
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
                  <div key={text} className="flex items-center gap-3 text-sm text-primary-foreground/65">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-primary-foreground/5 border border-primary-foreground/10">
                      <Icon size={17} className="text-accent" />
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
                <p className="text-xs text-primary-foreground/50">
                  Visita técnica sin cargo · Respuesta en 24 hs hábiles
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity duration-150 flex-shrink-0"
                >
                  Enviar consulta
                  <ArrowRight size={15} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <span
              className="font-semibold text-primary"
              style={{ fontFamily: "Lora, Georgia, serif" }}
            >
              EDILCARE
            </span>
            <span className="ml-3 text-xs text-muted-foreground">
              Mantenimiento Edilicio · Buenos Aires
            </span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(event) => scrollToSection(event, l.href)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Edilcare. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      <a
        href="#contacto"
        onClick={(event) => scrollToSection(event, "#contacto")}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_rgba(0,0,0,0.28)] transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366]/40 focus:ring-offset-2"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M16.04 4C9.42 4 4.03 9.36 4.03 15.94c0 2.1.56 4.15 1.62 5.96L4 28l6.27-1.62a12.08 12.08 0 0 0 5.77 1.47C22.66 27.85 28 22.5 28 15.94 28 9.36 22.66 4 16.04 4Zm0 21.8c-1.8 0-3.56-.48-5.1-1.4l-.36-.21-3.72.96.99-3.61-.24-.37a9.76 9.76 0 0 1-1.52-5.23c0-5.45 4.47-9.89 9.95-9.89 5.49 0 9.9 4.44 9.9 9.89 0 5.44-4.41 9.86-9.9 9.86Zm5.43-7.39c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.14-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.48-1.74-1.65-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1-1.04 2.45 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.18 5.08 4.46.71.3 1.27.49 1.7.63.71.22 1.36.19 1.87.11.57-.08 1.76-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35Z"
          />
        </svg>
      </a>
    </div>
  );
}

/* ── HELPERS ── */

const inputCls =
  "w-full border border-primary-foreground/15 bg-primary-foreground/10 px-3.5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:border-accent transition-colors duration-150";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-medium text-primary-foreground/70 uppercase tracking-[0.18em]">
        {label}
      </label>
      {children}
    </div>
  );
}
