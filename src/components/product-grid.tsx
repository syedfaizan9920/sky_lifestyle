import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/products";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="py-16 text-center font-display text-xl text-muted">
        No pieces found just yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
