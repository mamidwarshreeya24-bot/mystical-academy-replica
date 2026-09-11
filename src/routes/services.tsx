import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Flame,
  Layers,
  Sparkles,
  Hash,
  Compass,
  Zap,
  Home,
  Eye,
  Gem,
  ArrowRight,
} from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Energy Healing, Guidance & Vastu | Mysstical Academy" },
      {
        name: "description",
        content:
          "Reiki healing, chakra balancing, aura scanning, numerology, tarot, Kundalini awakening, Vastu analysis, third eye activation and crystal healing.",
      },
      { property: "og:title", content: "Services | Mysstical Academy" },
      {
        property: "og:description",
        content:
          "Personalised energy healing, spiritual guidance and Vastu services with Dr. Ruhaani Chaudharyy.",
      },
    ],
  }),
  component: ServicesPage,
});

const groups = [
  {
    title: "Energy Healing Services",
    intro: "Clear, balance and restore your personal energy field.",
    services: [
      {
        icon: Flame,
        name: "Reiki Healing",
        text: "Gentle universal life-force healing to release stress and restore flow, in person or at a distance.",
      },
      {
        icon: Layers,
        name: "Chakra Balancing",
        text: "Identify blocked or overactive centres and bring the seven chakras back into steady alignment.",
      },
      {
        icon: Sparkles,
        name: "Aura Scanning",
        text: "A reading of your energy layers to reveal leaks, attachments and the colours you are carrying.",
      },
    ],
  },
  {
    title: "Spiritual Guidance Services",
    intro: "Insight and direction when the path ahead feels unclear.",
    services: [
      {
        icon: Hash,
        name: "Numerology Consultation",
        text: "Name and birth-date analysis with practical corrections for career, relationships and timing.",
      },
      {
        icon: Compass,
        name: "Tarot Guidance",
        text: "Intuitive card readings for focused questions, with grounded next steps you can actually take.",
      },
      {
        icon: Zap,
        name: "Kundalini Awakening",
        text: "Safely supported practices to awaken and channel dormant energy with steady guidance.",
      },
    ],
  },
  {
    title: "Vastu Related Services",
    intro: "Align your home and workspace with supportive energy.",
    services: [
      {
        icon: Home,
        name: "Vastu Analysis",
        text: "A room-by-room review of your space with remedies that do not require demolition.",
      },
      {
        icon: Eye,
        name: "Thirdeye Activation",
        text: "Structured activation work to sharpen intuition, clarity and inner vision.",
      },
      {
        icon: Gem,
        name: "Crystal Healing",
        text: "Programmed stones and grids chosen for your intention, chakras and living space.",
      },
    ],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5">
        <section className="py-16">
          <p className="eyebrow">Services</p>
          <h1 className="mt-3 max-w-2xl text-5xl leading-tight">
            Sessions shaped around what you are carrying
          </h1>
          <p className="mt-5 max-w-xl text-base/7 text-muted-foreground">
            Every consultation begins with listening. From there we choose the
            healing, reading or space correction that will actually help.
          </p>
        </section>

        {groups.map((group) => (
          <section key={group.title} className="pb-14">
            <div className="border-t border-border pt-8">
              <h2 className="text-3xl">{group.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{group.intro}</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {group.services.map((s) => (
                <article
                  key={s.name}
                  className="surface-card p-7 transition-transform hover:-translate-y-1"
                >
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                    <s.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl">{s.name}</h3>
                  <p className="mt-3 text-sm/6 text-muted-foreground">{s.text}</p>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="pb-4">
          <div className="surface-card flex flex-wrap items-center justify-between gap-6 p-8">
            <div>
              <h2 className="text-3xl">Not sure which one you need?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us what is going on and we will recommend the right session.
              </p>
            </div>
            <Link to="/contact" className="btn-gold hover:-translate-y-0.5">
              Ask Dr. Ruhaani <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
