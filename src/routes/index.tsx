import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Flame,
  Compass,
  Home,
  Gem,
  Eye,
  Hash,
  Layers,
  ArrowRight,
  Star,
} from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import heroImage from "@/assets/hero.jpg";
import mentorImage from "@/assets/mentor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Mysstical Academy — Reiki, Numerology & Vastu with Dr. Ruhaani",
      },
      {
        name: "description",
        content:
          "Energy healing, spiritual guidance and certified courses in Reiki, Numerology, Vastu and Crystal Healing with Dr. Ruhaani Chaudharyy.",
      },
      {
        property: "og:title",
        content: "Mysstical Academy — Discover. Learn. Heal. Transform.",
      },
      {
        property: "og:description",
        content:
          "Chakra balancing, aura scanning, Kundalini awakening, tarot guidance and energy science courses.",
      },
    ],
  }),
  component: HomePage,
});

const pillars = [
  {
    icon: Flame,
    title: "Energy Healing",
    items: ["Reiki Healing", "Chakra Balancing", "Aura Scanning"],
  },
  {
    icon: Compass,
    title: "Spiritual Guidance",
    items: ["Numerology Consultation", "Tarot Guidance", "Kundalini Awakening"],
  },
  {
    icon: Home,
    title: "Vastu & Remedies",
    items: ["Vastu Analysis", "Thirdeye Activation", "Crystal Healing"],
  },
];

const courses = [
  {
    icon: Sparkles,
    name: "Reiki Masterclass",
    blurb:
      "Level-by-level attunements, hand positions and distance healing practice.",
    meta: "Mentored certification",
  },
  {
    icon: Hash,
    name: "Numerology Certification",
    blurb:
      "Read name and birth charts, cycles and corrections with real case studies.",
    meta: "Practitioner track",
  },
  {
    icon: Gem,
    name: "Crystal Healing Workshop",
    blurb:
      "Cleansing, charging, grids and pairing stones to chakras with confidence.",
    meta: "Hands-on workshop",
  },
];

const modalities = [
  { icon: Flame, label: "Reiki" },
  { icon: Layers, label: "Chakras" },
  { icon: Eye, label: "Third Eye" },
  { icon: Hash, label: "Numerology" },
  { icon: Gem, label: "Crystals" },
  { icon: Compass, label: "Tarot" },
  { icon: Home, label: "Vastu" },
  { icon: Sparkles, label: "Aura" },
];

function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pt-10 pb-6">
          <div className="relative overflow-hidden rounded-4xl bg-ink text-ink-foreground shadow-lift">
            <img
              src={heroImage}
              alt="Chakra light rising above open palms surrounded by healing crystals"
              width={1536}
              height={1024}
              className="absolute inset-0 size-full object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
            <div className="relative grid gap-10 px-6 py-16 sm:px-12 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
              <div>
                <p className="eyebrow">
                  Where ancient wisdom meets modern learning
                </p>
                <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl">
                  Discover. Learn.
                  <br />
                  Heal. Transform.
                </h1>
                <p className="mt-6 max-w-md text-base/7 opacity-80">
                  Vastu expert, numerologist and Reiki grandmaster Dr. Ruhaani
                  Chaudharyy guides you through healing sessions, intuitive
                  readings and certified energy science courses.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-gold hover:-translate-y-0.5">
                    Book a session <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    to="/courses"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
                  >
                    Explore courses
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/8 p-6 backdrop-blur-md sm:p-8">
                <p className="eyebrow">Your journey, all in one place</p>
                <p className="mt-3 font-display text-2xl">
                  Choose the path calling you today
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {modalities.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm font-medium"
                    >
                      <m.icon className="size-4 opacity-80" />
                      {m.label}
                    </div>
                  ))}
                </div>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold"
                >
                  View all services <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <p className="eyebrow">What we offer</p>
          <h2 className="mt-3 max-w-xl text-4xl">
            Healing, guidance and space alignment
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <article key={p.title} className="surface-card p-7">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <p.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-2xl">{p.title}</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Star className="mt-0.5 size-3.5 shrink-0 text-gold" />
                      {i}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Learn more <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Mentor */}
        <section className="mx-auto max-w-6xl px-5 py-10">
          <div className="grid items-center gap-10 rounded-4xl bg-sand p-6 sm:p-10 lg:grid-cols-[0.85fr_1.15fr]">
            <img
              src={mentorImage}
              alt="Dr. Ruhaani Chaudharyy, energy healer and mentor"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full max-h-[26rem] w-full rounded-3xl object-cover shadow-soft"
            />
            <div>
              <p className="eyebrow">Meet your mentor</p>
              <h2 className="mt-3 text-4xl">Dr. Ruhaani Chaudharyy</h2>
              <p className="mt-5 text-base/7 text-muted-foreground">
                A Vastu expert, numerologist and Reiki grandmaster, Dr. Ruhaani
                specialises in chakra balancing, aura scanning, Kundalini
                awakening, third eye activation and crystal healing. Alongside
                one-to-one sessions, she mentors students through Reiki,
                numerology and crystal courses, coaching them in the energy
                sciences.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["Reiki", "Grandmaster"],
                  ["Numerology", "Consultant"],
                  ["Vastu", "Expert"],
                ].map(([a, b]) => (
                  <div key={a} className="surface-card px-5 py-4">
                    <p className="font-display text-xl">{a}</p>
                    <p className="text-xs tracking-wide text-muted-foreground uppercase">
                      {b}
                    </p>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-ink mt-8 hover:-translate-y-0.5">
                Read her story
              </Link>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Energy science courses</p>
              <h2 className="mt-3 text-4xl">Learn the craft, properly</h2>
            </div>
            <Link to="/courses" className="btn-outline-soft hover:-translate-y-0.5">
              All courses
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {courses.map((c) => (
              <article
                key={c.name}
                className="surface-card flex flex-col p-7 transition-transform hover:-translate-y-1"
              >
                <c.icon className="size-6 text-gold" />
                <h3 className="mt-5 text-2xl">{c.name}</h3>
                <p className="mt-3 flex-1 text-sm/6 text-muted-foreground">
                  {c.blurb}
                </p>
                <p className="mt-6 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  {c.meta}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-5 pb-4">
          <div className="relative overflow-hidden rounded-4xl bg-ink px-6 py-16 text-center text-ink-foreground sm:px-12">
            <div className="glow-ring pointer-events-none absolute inset-x-0 -top-24 h-72" />
            <p className="eyebrow relative">Begin today</p>
            <h2 className="relative mx-auto mt-4 max-w-2xl text-4xl sm:text-5xl">
              A calmer mind, a clearer space, a lighter energy
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-base/7 opacity-75">
              Share what you are working through and we will suggest the right
              healing, reading or course for you.
            </p>
            <Link
              to="/contact"
              className="btn-gold relative mt-9 hover:-translate-y-0.5"
            >
              Book a consultation <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
