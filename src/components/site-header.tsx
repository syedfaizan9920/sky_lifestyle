"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { categories } from "@/lib/products";
import { useCart } from "@/components/cart-provider";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f7f6f3]/95 backdrop-blur">
      <div className="bg-ink px-4 py-2 text-center text-[9px] uppercase tracking-[0.2em] text-white sm:text-[10px]">
        A considered edit for every day
      </div>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-4 sm:px-8 lg:px-12">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <Link href="/" className="shrink-0 text-center" aria-label="Sky Lifestyle home">
          <span className="block font-display text-[19px] leading-none tracking-[0.04em] sm:text-2xl">
            SKY LIFESTYLE
          </span>
          <span className="mt-1.5 block text-[7px] uppercase tracking-[0.28em] text-muted sm:text-[8px]">
            Style Starts Here.
          </span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Categories">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="text-[9px] uppercase tracking-[0.13em] text-ink/75 transition hover:text-ink"
            >
              {category.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1 sm:gap-3">
          <form action="/search" role="search" className="hidden items-center border-b border-black/30 sm:flex">
            <label htmlFor="site-search" className="sr-only">
              Search products
            </label>
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="Search"
              className="w-20 bg-transparent py-2 text-xs outline-none placeholder:text-muted focus:w-32 transition-all md:w-24"
            />
            <button type="submit" aria-label="Search products" className="p-2">
              <Search size={16} strokeWidth={1.5} />
            </button>
          </form>
          <Link
            href="/search"
            className="inline-flex h-10 w-10 items-center justify-center sm:hidden"
            aria-label="Search products"
          >
            <Search size={19} strokeWidth={1.5} />
          </Link>
          <Link
            href="/cart"
            className="relative inline-flex h-10 w-10 items-center justify-center"
            aria-label={`Shopping bag, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
          >
            <ShoppingBag size={19} strokeWidth={1.5} />
            <span className="absolute right-0 top-0 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-ink px-1 text-[9px] text-white">
              {itemCount}
            </span>
          </Link>
        </div>
      </div>
      <div
        id="mobile-navigation"
        className={`${menuOpen ? "block" : "hidden"} border-t border-black/10 px-5 pb-5 pt-2 md:hidden`}
      >
        <nav aria-label="Mobile categories" className="grid grid-cols-2 gap-x-5">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              onClick={() => setMenuOpen(false)}
              className="border-b border-black/10 py-3 text-[10px] uppercase tracking-[0.16em]"
            >
              {category.name}
            </Link>
          ))}
          <Link
            href="/shop"
            onClick={() => setMenuOpen(false)}
            className="col-span-2 py-3 text-[10px] uppercase tracking-[0.16em]"
          >
            Shop all
          </Link>
        </nav>
      </div>
    </header>
  );
}
