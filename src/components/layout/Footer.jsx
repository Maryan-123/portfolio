import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/BrandIcons";
import { profile } from "../../data/profile";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="section-container grid gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold text-text">
            <span className="text-gradient">&lt;</span>
            {profile.initials}
            <span className="text-gradient">/&gt;</span>
          </p>
          <p className="mt-4 max-w-xs text-sm text-text-muted">
            Building modern digital experiences with clean code and thoughtful design.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-text">Quick Links</p>
          <ul className="space-y-3">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:text-right">
          <p className="mb-4 text-sm font-semibold text-text">Connect</p>
          <div className="flex gap-4 md:justify-end">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-border p-2.5 text-text-secondary transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-border p-2.5 text-text-secondary transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="rounded-lg border border-border p-2.5 text-text-secondary transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="section-container flex flex-col items-center justify-between gap-2 text-xs text-text-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Designed &amp; Built by {profile.name}</p>
        </div>
      </div>
    </footer>
  );
}
