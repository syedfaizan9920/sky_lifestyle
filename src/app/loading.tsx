export default function Loading() {
  return (
    <div
      role="status"
      className="mx-auto flex min-h-[55vh] max-w-[1440px] items-center justify-center px-5 text-center"
    >
      <div>
        <span className="mx-auto block h-7 w-7 animate-spin rounded-full border-2 border-black/15 border-t-ink" />
        <p className="mt-4 text-xs text-muted">Curating your experience…</p>
        <span className="sr-only">Loading page</span>
      </div>
    </div>
  );
}
