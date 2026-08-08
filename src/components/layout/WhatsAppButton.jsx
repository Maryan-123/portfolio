import { MessageCircle } from "lucide-react";
import { profile } from "../../data/profile";
import { createWhatsAppLink } from "../../utils/links";

export default function WhatsAppButton() {
  if (!profile.whatsapp || profile.whatsapp === "YOUR_WHATSAPP_NUMBER") return null;

  const href = createWhatsAppLink(
    profile.whatsapp,
    `Hello ${profile.name}, I found your portfolio and would like to discuss a project with you.`
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-success p-4 text-white shadow-lg shadow-green-500/20 transition-transform hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 group-hover:max-w-xs">
        Chat on WhatsApp
      </span>
    </a>
  );
}
