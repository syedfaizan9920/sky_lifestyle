import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { AddToCart } from "@/components/add-to-cart";
import { ProductGrid } from "@/components/product-grid";
import { formatPrice, getCategory, getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product?.name ?? "Product" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <section className="mx-auto grid max-w-[1280px] gap-8 px-5 py-8 sm:px-8 sm:py-12 md:grid-cols-2 md:gap-12 lg:px-12">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#eeece8]">
          <Image
            src={product.image}
            alt={`${product.name} — demo product`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute bottom-4 left-4 bg-white/90 px-3 py-2 text-[9px] uppercase tracking-editorial">
            Demo product image
          </span>
        </div>
        <div className="flex flex-col justify-center py-2 md:px-4 lg:px-12">
          <Link
            href={`/category/${product.category}`}
            className="inline-flex w-fit items-center gap-2 text-[9px] uppercase tracking-editorial text-muted hover:text-ink"
          >
            <ArrowLeft size={13} aria-hidden="true" /> {category?.name}
          </Link>
          <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
            {product.name}
          </h1>
          {product.label && (
            <span className="mt-4 w-fit border border-black/20 px-3 py-1.5 text-[9px] uppercase tracking-editorial">
              {product.label}
            </span>
          )}
          <p className="mt-5 text-lg">{formatPrice(product.price)}</p>
          <p className="mt-5 max-w-lg text-sm leading-7 text-muted">
            {product.description}
          </p>
          <p className="mt-5 text-[10px] uppercase tracking-[0.12em] text-muted">
            Illustrative demo product · No payment is collected
          </p>
          <AddToCart product={product} className="mt-8 w-full sm:w-fit sm:min-w-56" />
          <div className="mt-8 border-t border-black/10 pt-5 text-xs leading-6 text-muted">
            Product details and pricing are demo content for the Phase 1
            storefront.
          </div>
        </div>
      </section>
      {relatedProducts.length > 0 && (
        <section className="bg-[#efede8]">
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
            <h2 className="mb-8 font-display text-3xl">More from this edit</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        </section>
      )}
    </>
  );
}
