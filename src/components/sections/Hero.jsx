import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/BrandIcons";
import { profile } from "../../data/profile";
import { createWhatsAppLink } from "../../utils/links";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

const TECHS = ["React", "Node.js", "PostgreSQL", "Tailwind"];

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const whatsappHref =
    profile.whatsapp && profile.whatsapp !== "YOUR_WHATSAPP_NUMBER"
      ? createWhatsAppLink(profile.whatsapp, `Hello ${profile.name}, I'd like to connect.`)
      : null;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.12),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="section-container relative grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-text-secondary">
            Hello, I'm <span className="font-medium text-text">{profile.name}</span>
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] text-text sm:text-5xl lg:text-6xl">
            {profile.tagline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? <span className="text-gradient">{line}</span> : line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-md text-text-secondary leading-relaxed">{profile.bio}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button onClick={() => scrollTo("projects")}>View My Projects</Button>
            <Button variant="secondary" onClick={() => scrollTo("contact")}>
              Contact Me
            </Button>
            {profile.cvAvailable && (
              <Button as="a" href={profile.cvUrl} download variant="text">
                Download CV
              </Button>
            )}
          </div>

          <div className="mt-8 flex items-center gap-4">
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
            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-lg border border-border p-2.5 text-text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <MessageCircle size={18} />
              </a>
            )}
          </div>

          {profile.available && (
            <div className="mt-8">
              <Badge>Available for projects</Badge>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            aria-hidden
            className="absolute -inset-8 -z-10 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            <div className="aspect-[4/5] w-full bg-card-elevated">
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.parentElement.style.display = "none";
                }}
              />
            </div>
            <div className="flex flex-wrap gap-2 border-t border-border p-6">
              {TECHS.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-card-elevated px-2.5 py-1 text-xs text-text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 border-t border-border px-6 pb-6 pt-4">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <p className="text-sm text-text-secondary">Available to collaborate</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -left-6 top-8 hidden rounded-xl border border-border bg-card-elevated px-4 py-3 text-sm text-text-secondary shadow-lg sm:block"
          >
            React
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="absolute -right-4 bottom-10 hidden rounded-xl border border-border bg-card-elevated px-4 py-3 text-sm text-text-secondary shadow-lg sm:block"
          >
            GitHub
          </motion.div>
        </motion.div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-text-muted transition-colors hover:text-accent sm:flex"
        aria-label="Scroll to explore"
      >
        Scroll to explore
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
