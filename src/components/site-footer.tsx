import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr] md:py-20 lg:px-12">
        <div>
          <Link href="/" className="font-display text-2xl tracking-[0.04em]">
            SKY LIFESTYLE
          </Link>
          <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-white/55">
            Style Starts Here.
          </p>
          <p className="mt-6 max-w-xs text-sm leading-6 text-white/65">
            An ever-evolving edit of fashion and lifestyle essentials. Made for
            your everyday, wherever it takes you.
          </p>
        </div>
        <div>
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-white/55">
            Explore
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="text-sm text-white/85 transition hover:text-white"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-white/55">
            The Sky edit
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/65">
            Discover considered details, new-season moods, and a little
            inspiration for the days ahead.
          </p>
          <Link
            href="/shop"
            className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white"
          >
            Shop the collection <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/15 px-5 py-5 text-center text-[9px] tracking-[0.12em] text-white/55 sm:px-8 sm:text-left lg:px-12">
        © {new Date().getFullYear()} Sky Lifestyle. Demo storefront — products
        and prices shown are illustrative.
      </div>
    </footer>
  );
}
