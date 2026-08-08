import { Mail, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/BrandIcons";
import { profile } from "../../data/profile";
import { createWhatsAppLink, createMailtoLink } from "../../utils/links";
import SectionHeader from "../ui/SectionHeader";
import ContactForm from "../contact/ContactForm";

export default function Contact() {
  const whatsappConfigured = profile.whatsapp && profile.whatsapp !== "YOUR_WHATSAPP_NUMBER";

  const cards = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: createMailtoLink(profile.email),
    },
    whatsappConfigured && {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Message me",
      href: createWhatsAppLink(profile.whatsapp, `Hello ${profile.name}, I'd like to get in touch.`),
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "View my code",
      href: profile.github,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "Let's connect",
      href: profile.linkedin,
    },
  ].filter(Boolean);

  return (
    <section id="contact" className="section-container py-24">
      <SectionHeader
        number="08"
        label="CONTACT"
        title="Let's Build Something Great."
        subtitle="Have a project, collaboration, internship or opportunity in mind? I'd be happy to hear from you."
      />

      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {cards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.label === "Email" ? undefined : "_blank"}
              rel={card.label === "Email" ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <card.icon size={18} />
              </div>
              <div>
                <p className="text-xs text-text-muted">{card.label}</p>
                <p className="text-sm font-medium text-text">{card.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="lg:col-span-3 rounded-xl border border-border bg-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
