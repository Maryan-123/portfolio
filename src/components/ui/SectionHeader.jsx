export default function SectionHeader({ number, label, title, subtitle, align = "left" }) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}>
      <p className="text-accent font-mono text-sm font-medium tracking-wide mb-3">
        {number} / {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-text">{title}</h2>
      {subtitle && <p className="text-text-secondary mt-4 leading-relaxed">{subtitle}</p>}
    </div>
  );
}
