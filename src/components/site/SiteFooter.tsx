import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-gold text-gold-foreground">
              <Sparkles className="size-5" />
            </span>
            <span className="font-display text-xl">Mysstical Academy</span>
          </div>
          <p className="mt-4 max-w-sm text-sm/6 opacity-70">
            Where ancient wisdom meets modern learning. Healing, guidance and
            certified energy science courses with Dr. Ruhaani Chaudharyy.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.14em] uppercase opacity-70">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/services" className="opacity-75 hover:opacity-100">
                Services
              </Link>
            </li>
            <li>
              <Link to="/courses" className="opacity-75 hover:opacity-100">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/about" className="opacity-75 hover:opacity-100">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="opacity-75 hover:opacity-100">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.14em] uppercase opacity-70">
            Practice
          </h3>
          <ul className="mt-4 space-y-2 text-sm opacity-75">
            <li>Reiki Healing</li>
            <li>Numerology</li>
            <li>Vastu Analysis</li>
            <li>Crystal Healing</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs opacity-60">
          © {new Date().getFullYear()} Mysstical Academy. Sessions are for
          wellbeing and guidance, and do not replace medical advice.
        </p>
      </div>
    </footer>
  );
}
