import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../../data/profile";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-bg/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between md:h-20">
        <button
          onClick={() => scrollTo("home")}
          className="font-display text-xl font-bold text-text"
          aria-label="Go to top"
        >
          <span className="text-gradient">&lt;</span>
          {profile.initials}
          <span className="text-gradient">/&gt;</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium transition-colors ${
                active === link.id ? "text-accent" : "text-text-secondary hover:text-text"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#2563eb] px-5 py-2 text-sm font-medium text-white transition-all hover:brightness-110"
          >
            Let's Talk
          </button>
        </div>

        <button
          className="text-text md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-b border-border" : "max-h-0"
        }`}
      >
        <div className="section-container flex flex-col gap-1 bg-bg-secondary py-4">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`rounded-md px-3 py-3 text-left text-sm font-medium ${
                active === link.id ? "text-accent" : "text-text-secondary"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-2 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#2563eb] px-5 py-3 text-sm font-medium text-white"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </header>
  );
}
