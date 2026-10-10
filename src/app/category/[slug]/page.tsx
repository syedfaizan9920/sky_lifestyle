import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product-grid";
import { categories, getCategory, getCategoryProducts } from "@/lib/products";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  return { title: category?.name ?? "Category" };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const categoryProducts = getCategoryProducts(slug);

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
      <p className="text-[9px] uppercase tracking-editorial text-muted">
        The category edit
      </p>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl">
        {category.name}
      </h1>
      <p className="mb-9 mt-3 text-sm text-muted sm:mb-12">{category.note}</p>
      <ProductGrid products={categoryProducts} />
      <p className="mt-12 text-center text-[10px] text-muted">
        Demo products and prices are illustrative.
      </p>
    </section>
  );
}
