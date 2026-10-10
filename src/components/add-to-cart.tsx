"use client";

import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/components/cart-provider";

export function AddToCart({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-white transition hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${className}`}
      aria-live="polite"
    >
      {added ? <Check size={16} aria-hidden="true" /> : <ShoppingBag size={16} aria-hidden="true" />}
      {added ? "Added to bag" : "Add to bag"}
    </button>
  );
}
