import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductGrid } from "@/components/product-grid";
import { categories, products } from "@/lib/products";

const categoryImages: Record<string, string> = {
  sunglasses: "photo-1511499767150-a48a237f0083",
  watches: "photo-1524805444758-089113d48a6d",
  shoes: "photo-1542291026-7eec264c27ff",
  bags: "photo-1548036328-c9fa89d128fa",
  wallets: "photo-1627123424574-724758594e93",
  caps: "photo-1588850561407-ed78c282e89b",
  jewellery: "photo-1535632066927-ab7c9ab60908",
  perfumes: "photo-1594035910387-fea47794261f",
};

export default function HomePage() {
  const featuredProducts = products.filter((product) => product.label).slice(0, 4);

  return (
    <>
      <section className="relative min-h-[560px] overflow-hidden bg-[#dedbd5] sm:min-h-[640px] lg:min-h-[700px]">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2200&q=90"
          alt="Friends enjoying an afternoon in the city"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        <div className="relative mx-auto flex min-h-[560px] max-w-[1440px] items-center px-6 py-20 sm:min-h-[640px] sm:px-12 lg:min-h-[700px] lg:px-20">
          <div className="max-w-xl text-white">
            <p className="text-[9px] uppercase tracking-[0.28em] text-white/85 sm:text-[10px]">
              An everyday kind of extraordinary
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.04] sm:text-6xl lg:text-[76px]">
              Style Starts
              <br />
              Here.
            </h1>
            <p className="mt-6 max-w-sm text-sm leading-6 text-white/85 sm:text-base">
              Thoughtful details. Effortless pieces. Meet the edit that feels
              like you.
            </p>
            <Link
              href="/shop"
              className="mt-9 inline-flex items-center gap-5 border border-white px-6 py-4 text-[10px] uppercase tracking-[0.18em] transition hover:bg-white hover:text-ink"
            >
              Discover the collection <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <span className="absolute bottom-6 right-6 text-[8px] uppercase tracking-[0.15em] text-white/75 sm:right-10">
          Sky Lifestyle — Demo imagery
        </span>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
          <div>
            <p className="text-[9px] uppercase tracking-editorial text-muted">
              Find your thing
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">
              The categories
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden items-center gap-2 pb-1 text-[9px] uppercase tracking-[0.15em] sm:inline-flex"
          >
            Shop all <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className={`group relative block aspect-[4/5] overflow-hidden bg-[#e8e6e1] ${
                index === 0 || index === 5 ? "sm:translate-y-5" : ""
              }`}
            >
              <Image
                src={`https://images.unsplash.com/${categoryImages[category.slug]}?auto=format&fit=crop&w=700&q=80`}
                alt={`${category.name} collection`}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 font-display text-xl text-white sm:bottom-6 sm:left-6 sm:text-2xl">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
        <Link
          href="/shop"
          className="mt-7 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] sm:hidden"
        >
          Shop all <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </section>

      <section className="bg-[#efede8]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
            <div>
              <p className="text-[9px] uppercase tracking-editorial text-muted">
                A few things we love
              </p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                In the spotlight
              </h2>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 pb-1 text-[9px] uppercase tracking-[0.15em]"
            >
              Shop all <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-2 lg:px-12">
        <div className="relative aspect-[5/4] overflow-hidden bg-[#e8e6e1]">
          <Image
            src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85"
            alt="A considered everyday outfit in neutral tones"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="px-1 py-4 md:px-10 lg:px-16">
          <p className="text-[9px] uppercase tracking-editorial text-muted">
            The Sky point of view
          </p>
          <h2 className="mt-4 max-w-md font-display text-4xl leading-tight sm:text-5xl">
            Made for the moments in between.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted">
            The best pieces are the ones that simply feel right. Explore
            considered accessories, everyday favourites, and the little
            finishing touches that make a look your own.
          </p>
          <Link
            href="/shop"
            className="mt-7 inline-flex items-center gap-3 border-b border-ink pb-2 text-[9px] uppercase tracking-[0.16em]"
          >
            Explore the edit <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
