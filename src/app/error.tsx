"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[55vh] max-w-2xl flex-col items-center justify-center px-5 text-center">
      <p className="text-[9px] uppercase tracking-editorial text-muted">
        Something went off-script
      </p>
      <h1 className="mt-3 font-display text-3xl">We couldn’t load this page.</h1>
      <p className="mt-3 text-sm text-muted">
        Please try again. Your bag is saved in this browser.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-7 rounded-full bg-ink px-6 py-3 text-[9px] uppercase tracking-[0.15em] text-white"
      >
        Try again
      </button>
    </div>
  );
}
