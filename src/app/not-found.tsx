import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[55vh] max-w-2xl flex-col items-center justify-center px-5 text-center">
      <p className="text-[9px] uppercase tracking-editorial text-muted">404 · Not found</p>
      <h1 className="mt-3 font-display text-3xl">This page took another turn.</h1>
      <p className="mt-3 text-sm text-muted">
        The page or piece you’re looking for isn’t here.
      </p>
      <Link
        href="/shop"
        className="mt-7 rounded-full bg-ink px-6 py-3 text-[9px] uppercase tracking-[0.15em] text-white"
      >
        Explore the collection
      </Link>
    </div>
  );
}
