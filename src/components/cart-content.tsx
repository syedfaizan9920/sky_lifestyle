"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/components/cart-provider";

export function CartContent() {
  const { items, subtotal, setQuantity, removeItem, hydrated } = useCart();

  if (!hydrated) {
    return (
      <div role="status" className="py-16 text-center text-sm text-muted">
        Loading your bag…
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="font-display text-2xl">Your bag is taking a breather.</p>
        <p className="mt-3 text-sm text-muted">Find a piece that feels like you.</p>
        <Link
          href="/shop"
          className="mt-7 inline-flex rounded-full bg-ink px-6 py-3 text-[9px] uppercase tracking-[0.15em] text-white"
        >
          Explore the collection
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
      <div className="divide-y divide-black/10">
        {items.map(({ product, quantity }) => (
          <article key={product.id} className="flex gap-4 py-5 first:pt-0 sm:gap-6">
            <Link
              href={`/product/${product.slug}`}
              className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden bg-[#eeece8] sm:w-32"
              aria-label={`View ${product.name}`}
            >
              <Image
                src={product.image}
                alt={`${product.name} — demo product`}
                fill
                sizes="128px"
                className="object-cover"
              />
            </Link>
            <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div>
                <Link
                  href={`/product/${product.slug}`}
                  className="font-display text-lg hover:underline"
                >
                  {product.name}
                </Link>
                <p className="mt-1 text-sm text-muted">{formatPrice(product.price)}</p>
                <div className="mt-4 inline-flex items-center border border-black/15">
                  <button
                    type="button"
                    onClick={() => setQuantity(product.id, quantity - 1)}
                    className="p-2"
                    aria-label={`Decrease ${product.name} quantity`}
                  >
                    <Minus size={13} />
                  </button>
                  <span className="min-w-8 text-center text-xs" aria-label={`Quantity ${quantity}`}>
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(product.id, quantity + 1)}
                    className="p-2"
                    aria-label={`Increase ${product.name} quantity`}
                  >
                    <Plus size={13} />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
                <p className="text-sm">{formatPrice(product.price * quantity)}</p>
                <button
                  type="button"
                  onClick={() => removeItem(product.id)}
                  className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.12em] text-muted hover:text-ink"
                  aria-label={`Remove ${product.name} from bag`}
                >
                  <Trash2 size={13} aria-hidden="true" /> Remove
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <aside className="h-fit border border-black/10 p-5 sm:p-6">
        <h2 className="font-display text-xl">Order summary</h2>
        <div className="mt-5 flex justify-between border-t border-black/10 pt-4 text-sm">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <p className="mt-3 text-[10px] leading-5 text-muted">
          Demo cart only. Shipping and payment are not available in this phase.
        </p>
        <button
          type="button"
          disabled
          className="mt-6 w-full cursor-not-allowed rounded-full bg-neutral-300 px-5 py-3 text-[9px] uppercase tracking-[0.15em] text-neutral-600"
          aria-describedby="checkout-note"
        >
          Checkout unavailable
        </button>
        <p id="checkout-note" className="sr-only">
          Checkout is not available in this demo storefront.
        </p>
      </aside>
    </div>
  );
}
