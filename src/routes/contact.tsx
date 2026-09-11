import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Clock } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Session — Mysstical Academy" },
      {
        name: "description",
        content:
          "Request a healing session, reading, Vastu visit or course seat with Dr. Ruhaani Chaudharyy at Mysstical Academy.",
      },
      { property: "og:title", content: "Book a Session | Mysstical Academy" },
      {
        property: "og:description",
        content:
          "Share what you are working through and receive a recommended healing, reading or course.",
      },
    ],
  }),
  component: ContactPage,
});

const interests = [
  "Reiki Healing",
  "Chakra Balancing",
  "Aura Scanning",
  "Numerology Consultation",
  "Tarot Guidance",
  "Kundalini Awakening",
  "Vastu Analysis",
  "Thirdeye Activation",
  "Crystal Healing",
  "Course enquiry",
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5">
        <section className="grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-3 text-5xl leading-tight">Book a session</h1>
            <p className="mt-5 text-base/7 text-muted-foreground">
              Tell us a little about what you are going through. Dr. Ruhaani or
              her team will reply with a suggested session and available times.
            </p>

            <div className="mt-10 space-y-4">
              {[
                {
                  icon: MessageCircle,
                  title: "Personal reply",
                  text: "Every enquiry is read and answered by the academy team.",
                },
                {
                  icon: Clock,
                  title: "Response time",
                  text: "Usually within one working day.",
                },
                {
                  icon: Mail,
                  title: "Sessions",
                  text: "Available online and in person by appointment.",
                },
              ].map((item) => (
                <div key={item.title} className="surface-card flex gap-4 p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <h2 className="text-lg">{item.title}</h2>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-7 sm:p-9">
            {sent ? (
              <div className="py-12 text-center">
                <h2 className="text-3xl">Thank you</h2>
                <p className="mt-3 text-sm/6 text-muted-foreground">
                  Your request has been noted. We will be in touch shortly with
                  a suggested session and timings.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-outline-soft mt-8"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium">
                    Full name
                    <input
                      required
                      name="name"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block text-sm font-medium">
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
                      placeholder="you@email.com"
                    />
                  </label>
                </div>

                <label className="block text-sm font-medium">
                  Phone (optional)
                  <input
                    name="phone"
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Include country code"
                  />
                </label>

                <label className="block text-sm font-medium">
                  I am interested in
                  <select
                    name="interest"
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
                    defaultValue={interests[0]}
                  >
                    {interests.map((i) => (
                      <option key={i}>{i}</option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-medium">
                  What would you like help with?
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-normal outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Share as much or as little as you like."
                  />
                </label>

                <button type="submit" className="btn-gold w-full">
                  Send request
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Sessions support wellbeing and do not replace medical advice.
                </p>
              </form>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
