import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Hash, Gem, Check, ArrowRight } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Energy Science Courses — Reiki, Numerology, Crystals" },
      {
        name: "description",
        content:
          "Mentored courses in Reiki, Numerology certification and Crystal Healing, taught by Dr. Ruhaani Chaudharyy at Mysstical Academy.",
      },
      { property: "og:title", content: "Energy Science Courses | Mysstical Academy" },
      {
        property: "og:description",
        content:
          "Reiki Masterclass, Numerology Certification and Crystal Healing Workshop with lifetime mentorship.",
      },
    ],
  }),
  component: CoursesPage,
});

const courses = [
  {
    icon: Sparkles,
    name: "Reiki Masterclass",
    summary:
      "From first attunement to master level, with supervised practice at every stage.",
    points: [
      "Level 1, 2 and master attunements",
      "Hand positions and self-healing routine",
      "Distance healing and symbol work",
      "Client session structure and ethics",
    ],
  },
  {
    icon: Hash,
    name: "Numerology Certification",
    summary:
      "Read charts with confidence and give corrections that hold up in real life.",
    points: [
      "Birth and name number systems",
      "Personal year and cycle timing",
      "Name correction methodology",
      "Live case study practice",
    ],
  },
  {
    icon: Gem,
    name: "Crystal Healing Workshop",
    summary:
      "A practical weekend of choosing, cleansing, charging and gridding stones.",
    points: [
      "Stone identification and pairing",
      "Cleansing and programming rituals",
      "Chakra layouts and grids",
      "Crystals for home and workspace",
    ],
  },
];

function CoursesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5">
        <section className="py-16">
          <p className="eyebrow">Energy science courses</p>
          <h1 className="mt-3 max-w-2xl text-5xl leading-tight">
            Learn to heal, read and guide with confidence
          </h1>
          <p className="mt-5 max-w-xl text-base/7 text-muted-foreground">
            Small mentored batches, practice-first teaching and continued
            support after certification.
          </p>
        </section>

        <section className="grid gap-6 pb-14 lg:grid-cols-3">
          {courses.map((c) => (
            <article key={c.name} className="surface-card flex flex-col p-8">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <c.icon className="size-6" />
              </span>
              <h2 className="mt-5 text-2xl">{c.name}</h2>
              <p className="mt-3 text-sm/6 text-muted-foreground">{c.summary}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                    <span className="text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-ink mt-8 hover:-translate-y-0.5">
                Request details
              </Link>
            </article>
          ))}
        </section>

        <section className="pb-4">
          <div className="rounded-4xl bg-sand p-8 sm:p-12">
            <h2 className="text-3xl">What every student gets</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                [
                  "Mentored practice",
                  "Guided sessions with feedback until the technique feels natural.",
                ],
                [
                  "Course manual",
                  "Written material, symbols and reference sheets to keep for life.",
                ],
                [
                  "Ongoing support",
                  "Continued access to Dr. Ruhaani for doubts after certification.",
                ],
              ].map(([title, text]) => (
                <div key={title}>
                  <h3 className="text-xl">{title}</h3>
                  <p className="mt-2 text-sm/6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-gold mt-9 hover:-translate-y-0.5">
              Join the next batch <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
