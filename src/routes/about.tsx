import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import mentorImage from "@/assets/mentor.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Ruhaani Chaudharyy — Mysstical Academy" },
      {
        name: "description",
        content:
          "Dr. Ruhaani Chaudharyy is a Vastu expert, numerologist and Reiki grandmaster mentoring students in the energy sciences.",
      },
      { property: "og:title", content: "About Dr. Ruhaani Chaudharyy" },
      {
        property: "og:description",
        content:
          "Chakra balancing, aura scanning, Kundalini awakening, crystal healing and holistic coaching.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5">
        <section className="grid items-start gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="mt-3 text-5xl leading-tight">
              Dr. Ruhaani Chaudharyy
            </h1>
            <p className="mt-6 text-base/7 text-muted-foreground">
              Dr. Ruhaani Chaudharyy offers expert guidance in Vastu, Numerology
              and Reiki, specialising in chakra balancing, aura scanning,
              Kundalini awakening and crystal healing. She mentors students in
              the energy sciences and holistic coaching.
            </p>
            <p className="mt-4 text-base/7 text-muted-foreground">
              Her work sits at the meeting point of tradition and practicality.
              A session may begin with an aura scan and end with a simple change
              to the corner of a room, a crystal to carry, or a number to be
              mindful of. Nothing mystifying for its own sake — only what helps
              you feel steadier.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Energy healing",
                  "Reiki grandmaster practising and teaching all levels.",
                ],
                [
                  "Intuitive reading",
                  "Numerology, tarot and aura work for clear direction.",
                ],
                [
                  "Space alignment",
                  "Vastu analysis with remedies that fit real homes.",
                ],
                [
                  "Mentorship",
                  "Coaching students through certification and beyond.",
                ],
              ].map(([title, text]) => (
                <div key={title} className="surface-card p-6">
                  <h2 className="text-xl">{title}</h2>
                  <p className="mt-2 text-sm/6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>

            <Link to="/contact" className="btn-gold mt-10 hover:-translate-y-0.5">
              Book a session <ArrowRight className="size-4" />
            </Link>
          </div>

          <img
            src={mentorImage}
            alt="Dr. Ruhaani Chaudharyy seated with crystals and healing books"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full rounded-4xl object-cover shadow-lift"
          />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
