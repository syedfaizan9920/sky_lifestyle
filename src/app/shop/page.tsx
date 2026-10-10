import type { Metadata } from "next";
import { ProductGrid } from "@/components/product-grid";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop all",
  description: "Explore all demo products in the Sky Lifestyle collection.",
};

export default function ShopPage() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
      <p className="text-[9px] uppercase tracking-editorial text-muted">
        The full edit
      </p>
      <div className="mb-9 mt-2 flex flex-wrap items-end justify-between gap-3 sm:mb-12">
        <h1 className="font-display text-4xl sm:text-5xl">Shop all</h1>
        <p className="text-xs text-muted">
          {products.length} demo {products.length === 1 ? "piece" : "pieces"}
        </p>
      </div>
      <ProductGrid products={products} />
      <p className="mt-12 text-center text-[10px] text-muted">
        Demo products and prices are illustrative.
      </p>
    </section>
  );
}
