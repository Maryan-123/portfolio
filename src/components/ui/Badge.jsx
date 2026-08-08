export default function Badge({ children, dotColor = "bg-success" }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-text-secondary">
      <span className={`h-2 w-2 rounded-full ${dotColor} animate-pulse`} />
      {children}
    </span>
  );
}
