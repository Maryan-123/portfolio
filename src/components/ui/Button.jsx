const VARIANTS = {
  primary:
    "bg-gradient-to-r from-[#38bdf8] to-[#2563eb] text-white hover:brightness-110 shadow-lg shadow-sky-500/20",
  secondary:
    "bg-transparent border border-[rgba(148,163,184,0.25)] text-text hover:border-accent hover:text-accent",
  text: "bg-transparent text-accent hover:gap-3 gap-2",
};

export default function Button({
  as = "button",
  variant = "primary",
  className = "",
  children,
  disabled,
  loading,
  ...props
}) {
  const Comp = as;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  return (
    <Comp
      className={`${base} ${VARIANTS[variant]} ${className}`}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? "Sending..." : children}
    </Comp>
  );
}
