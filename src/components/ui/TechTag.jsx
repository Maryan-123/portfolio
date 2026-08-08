export default function TechTag({ children }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-text-secondary">
      {children}
    </span>
  );
}
