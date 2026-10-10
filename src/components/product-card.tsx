import Image from "next/image";
import Link from "next/link";
import { AddToCart } from "@/components/add-to-cart";
import { formatPrice, getCategory } from "@/lib/products";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category);

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#eeece8]">
        <Link
          href={`/product/${product.slug}`}
          aria-label={`View ${product.name}`}
          className="block h-full"
        >
          <Image
            src={product.image}
            alt={`${product.name} — demo product`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
          />
        </Link>
        <span className="absolute left-3 top-3 bg-white/90 px-3 py-1.5 text-[9px] uppercase tracking-editorial text-ink">
          Demo
        </span>
        {product.label && (
          <span className="absolute right-3 top-3 bg-white/90 px-3 py-1.5 text-[9px] uppercase tracking-editorial text-ink">
            {product.label}
          </span>
        )}
      </div>
      <div className="flex items-start justify-between gap-3 pt-4">
        <div>
          <p className="text-[9px] uppercase tracking-editorial text-muted">
            {category?.name}
          </p>
          <Link
            href={`/product/${product.slug}`}
            className="mt-1 inline-block font-display text-lg leading-snug text-ink hover:underline"
          >
            {product.name}
          </Link>
          <p className="mt-1 text-sm text-ink">{formatPrice(product.price)}</p>
        </div>
        <AddToCart
          product={product}
          className="mt-1 shrink-0 !px-3 !py-2.5 text-[9px] sm:!px-4"
        />
      </div>
    </article>
  );
}
