import type { Metadata } from "next";
import { ProductGrid } from "@/components/product-grid";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the Sky Lifestyle demo collection.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const matches = query
    ? products.filter((product) =>
        `${product.name} ${product.category} ${product.description}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      )
    : [];

  return (
    <section className="mx-auto min-h-[55vh] max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
      <p className="text-[9px] uppercase tracking-editorial text-muted">
        Find your next favourite
      </p>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl">
        {query ? `Search results` : "Search"}
      </h1>
      <form action="/search" role="search" className="mt-7 flex max-w-xl border-b border-ink">
        <label htmlFor="search-query" className="sr-only">
          Search demo products
        </label>
        <input
          id="search-query"
          name="q"
          type="search"
          defaultValue={query}
          placeholder="Try sunglasses, bags, watches..."
          className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          className="px-3 text-[9px] uppercase tracking-[0.15em]"
        >
          Search
        </button>
      </form>
      <div className="mb-8 mt-10">
        {query ? (
          <p className="text-xs text-muted">
            {matches.length} {matches.length === 1 ? "result" : "results"} for “{query}”
          </p>
        ) : (
          <p className="text-xs text-muted">
            Search across all demo products and categories.
          </p>
        )}
      </div>
      {query && <ProductGrid products={matches} />}
    </section>
  );
}
