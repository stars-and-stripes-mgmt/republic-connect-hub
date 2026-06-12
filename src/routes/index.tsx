import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Users,
  TrendingUp,
  HandshakeIcon,
  ShieldCheck,
  Star,
  Phone,
  Mail,
  MapPin,
  Check,
  Quote,
} from "lucide-react";
import heroFlag from "@/assets/hero-flag.jpg";
import networking from "@/assets/networking.jpg";
import eagle from "@/assets/eagle.jpg";
import logoAsset from "@/assets/logo.png.asset.json";
import { useReveal } from "@/hooks/use-reveal";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Osceola Republican Business Network — Connect. Grow. Lead." },
      {
        name: "description",
        content:
          "Join the Osceola Republican Business Network — an exclusive community of business leaders building relationships, sharing insights, and creating opportunity.",
      },
      { property: "og:title", content: "Osceola Republican Business Network" },
      {
        property: "og:description",
        content: "An exclusive community for business leaders to connect, learn, and grow together.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  useReveal();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <Benefits />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
          scrolled
            ? "glass-dark rounded-2xl py-3 shadow-elegant max-w-6xl"
            : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logoAsset.url}
            alt="Osceola Republican Business Network logo"
            className="h-11 w-11 rounded-full bg-cream/95 p-0.5 shadow-elegant transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-cream/70">OSCEOLA</span>
            <span className="font-display text-sm font-semibold text-cream">Republican Business Network</span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-cream/80">
          <a href="#benefits" className="hover:text-cream transition">Why Join</a>
          <a href="#about" className="hover:text-cream transition">About</a>
          <a href="#voices" className="hover:text-cream transition">Voices</a>
          <a href="#join" className="hover:text-cream transition">Contact</a>
        </nav>
        <a href="#join" className="btn-primary text-sm">
          Join Us <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden gradient-hero">
      {/* Parallax hero image */}
      <div
        className="absolute inset-0 opacity-40 transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `scale(1.1) translate(${mouse.x * -15}px, ${mouse.y * -10}px)`,
          backgroundImage: `url(${heroFlag})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-navy-deep/60 to-navy-deep" />


      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-xs font-medium tracking-wide text-cream/90 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          A New Community of Business Leaders
        </div>

        <h1 className="reveal mt-8 max-w-5xl font-display text-5xl font-semibold leading-[1.05] text-cream sm:text-6xl md:text-7xl lg:text-8xl" style={{ transitionDelay: "100ms" }}>
          Where Business{" "}
          <span className="text-gradient-gold">Meets Conviction.</span>
        </h1>

        <p className="reveal mt-8 max-w-2xl text-lg leading-relaxed text-cream/75 sm:text-xl" style={{ transitionDelay: "200ms" }}>
          The Osceola Republican Business Network is an exclusive community where like-minded
          professionals connect, learn, and grow — together.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4" style={{ transitionDelay: "300ms" }}>
          <a href="#join" className="btn-primary animate-pulse-glow text-base">
            Join the Network
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#benefits" className="btn-ghost-light text-base">
            Learn More
          </a>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/40">
        <div className="h-12 w-px animate-pulse bg-cream/40" />
      </div>
    </section>
  );
}


function Stats() {
  const items = [
    { icon: Users, label: "Members" },
    { icon: HandshakeIcon, label: "Partnerships" },
    { icon: TrendingUp, label: "Growth" },
    { icon: ShieldCheck, label: "Trust" },
  ];
  return (
    <section className="relative -mt-16 px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 rounded-3xl border border-border bg-card p-8 shadow-elegant md:grid-cols-4 md:p-12">
        {items.map((it, i) => (
          <div key={it.label} className="reveal text-center" style={{ transitionDelay: `${i * 80}ms` }}>
            <it.icon className="mx-auto h-8 w-8 text-crimson" />
            <div className="mt-3 font-display text-xl font-semibold text-navy md:text-2xl">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    {
      icon: Sparkles,
      title: "Exclusive Insights",
      body: "Tap into valuable resources and expert advice tailored to entrepreneurs and business professionals.",
    },
    {
      icon: HandshakeIcon,
      title: "Networking Opportunities",
      body: "Build meaningful relationships with professionals and enthusiasts who share your passion and values.",
    },
    {
      icon: ShieldCheck,
      title: "Supportive Environment",
      body: "Become part of a community that encourages, uplifts, and champions one another every step of the way.",
    },
  ];
  return (
    <section id="benefits" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wider text-crimson">
            <Star className="h-3 w-3 fill-crimson" /> Why Join Us
          </div>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
            Built for those who lead — and those who plan to.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Whether you're growing a business, exploring new opportunities, or surrounding yourself
            with inspiring people, this is where it begins.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-crimson/30 hover:shadow-elegant"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-crimson/0 to-gold/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle at top right, oklch(0.55 0.22 25 / 0.08), transparent 60%)" }} />

              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-navy to-navy-deep shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <b.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-navy">{b.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-cream to-muted/50 py-32 px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div className="reveal relative">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-2xl bg-gradient-to-br from-gold/40 to-crimson/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={networking}
              alt="Business leaders networking at a Republican Business Network event"
              loading="lazy"
              width={1280}
              height={960}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 glass rounded-2xl p-5 shadow-elegant md:-right-10">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-crimson">
                <Quote className="h-5 w-5 text-cream" />
              </div>
              <div>
                <div className="text-xs font-medium text-muted-foreground">Founded</div>
                <div className="font-display text-lg font-semibold text-navy">Osceola County</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-wider text-crimson">
            <Star className="h-3 w-3 fill-crimson" /> Our Community
          </div>
          <h2 className="reveal mt-5 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl" style={{ transitionDelay: "80ms" }}>
            A brand-new network. <br /> A lasting connection.
          </h2>
          <p className="reveal mt-6 text-lg leading-relaxed text-muted-foreground" style={{ transitionDelay: "160ms" }}>
            Welcome to our brand-new Republican Business Network — a space to engage in meaningful
            discussions, share insights, and support each other on the journey to success.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Engage in meaningful, member-driven conversations",
              "Share expertise across industries and generations",
              "Discover partnerships that move your business forward",
              "Build relationships rooted in shared values",
            ].map((line, i) => (
              <li key={line} className="reveal flex items-start gap-3" style={{ transitionDelay: `${200 + i * 80}ms` }}>
                <div className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-crimson/10 text-crimson">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
                <span className="text-foreground">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="voices" className="relative overflow-hidden py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
            Strength in shared purpose.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Real conversations with the people building Osceola's future.
          </p>
        </div>

        <div className="mt-16 grid items-stretch gap-6 md:grid-cols-3">
          <div className="reveal relative overflow-hidden rounded-3xl bg-navy-deep p-1 md:row-span-2">
            <img src={eagle} alt="Eagle" loading="lazy" width={1024} height={1024} className="h-full w-full rounded-[1.4rem] object-cover opacity-70" />
            <div className="absolute inset-0 rounded-[1.4rem] bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <Star className="h-6 w-6 fill-gold text-gold" />
              <div className="mt-3 font-display text-2xl font-semibold leading-snug text-cream">
                "Surround yourself with people who lift you higher."
              </div>
              <div className="mt-4 text-sm text-cream/60">— Our Guiding Principle</div>
            </div>
          </div>

          {[
            {
              quote:
                "Finally, a network that actually understands what it takes to build something from the ground up.",
              name: "Local Business Owner",
              role: "Osceola County",
            },
            {
              quote:
                "The connections here aren't transactional — they're intentional. That's rare these days.",
              name: "Community Member",
              role: "Entrepreneur",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-elegant"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Quote className="h-8 w-8 text-crimson/30 transition-colors group-hover:text-crimson" />
              <p className="mt-4 text-lg leading-relaxed text-foreground">{t.quote}</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-semibold text-navy">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="join" className="relative overflow-hidden px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] gradient-hero p-12 shadow-elegant md:p-20">
          

          <div className="relative grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="reveal inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-xs font-medium text-cream/90 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-gold" /> Ready to Join?
              </div>
              <h2 className="reveal mt-6 font-display text-4xl font-semibold leading-tight text-cream md:text-5xl" style={{ transitionDelay: "80ms" }}>
                Your seat at the table <br />
                <span className="text-gradient-gold">is waiting.</span>
              </h2>
              <p className="reveal mt-6 text-lg leading-relaxed text-cream/75" style={{ transitionDelay: "160ms" }}>
                Provide your contact information to stay updated and be part of this exciting new
                group. We look forward to welcoming you to our community.
              </p>

              <div className="reveal mt-10 space-y-4" style={{ transitionDelay: "240ms" }}>
                <ContactItem icon={Users} label="Contact" value="Corey Pellerin" />
                <ContactItem icon={Phone} label="Phone" value="407-346-0011" href="tel:4073460011" />
                <ContactItem icon={Mail} label="Email" value="Cpellerin62@gmail.com" href="mailto:Cpellerin62@gmail.com" />
                <ContactItem icon={MapPin} label="Region" value="Osceola County, Florida" />
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: "200ms" }}>
              <JoinForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const Comp: any = href ? "a" : "div";
  return (
    <Comp
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/5 p-4 transition-all hover:border-gold/40 hover:bg-cream/10"
    >
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cream/10 transition-colors group-hover:bg-crimson">
        <Icon className="h-5 w-5 text-gold transition-colors group-hover:text-cream" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-cream/50">{label}</div>
        <div className="truncate font-medium text-cream">{value}</div>
      </div>
    </Comp>
  );
}

function JoinForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="glass-dark space-y-4 rounded-3xl p-8 shadow-elegant"
    >
      <div className="font-display text-2xl font-semibold text-cream">Stay in the loop</div>
      <p className="text-sm text-cream/60">Drop your details — we'll be in touch soon.</p>

      {submitted ? (
        <div className="rounded-2xl bg-gold/15 border border-gold/30 p-6 text-center">
          <Check className="mx-auto h-8 w-8 text-gold" />
          <div className="mt-3 font-display text-xl text-cream">Welcome aboard!</div>
          <p className="mt-1 text-sm text-cream/70">We'll be in touch with next steps shortly.</p>
        </div>
      ) : (
        <>
          <Field label="Full Name" name="name" placeholder="Jane Smith" />
          <Field label="Email" name="email" type="email" placeholder="jane@business.com" />
          <Field label="Phone" name="phone" type="tel" placeholder="(407) 555-0123" />
          <Field label="Business / Industry" name="biz" placeholder="What do you do?" />
          <button type="submit" className="btn-primary w-full justify-center">
            Click Here to Join Us <ArrowRight className="h-4 w-4" />
          </button>
        </>
      )}
    </form>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-cream/60">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full rounded-xl border border-cream/15 bg-cream/5 px-4 py-3 text-cream placeholder:text-cream/30 outline-none transition focus:border-gold/60 focus:bg-cream/10"
      />
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-navy-deep px-6 py-12 text-cream/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-crimson">
            <Star className="h-4 w-4 fill-cream text-cream" />
          </div>
          <div className="text-sm">
            <div className="font-semibold text-cream">Osceola Republican Business Network</div>
            <div className="text-xs text-cream/50">Connect. Grow. Lead.</div>
          </div>
        </div>
        <div className="text-xs text-cream/50">
          © {new Date().getFullYear()} Osceola Republican Business Network. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
