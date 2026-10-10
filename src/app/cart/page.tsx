import type { Metadata } from "next";
import { CartContent } from "@/components/cart-content";

export const metadata: Metadata = {
  title: "Your bag",
  description: "Review the items in your Sky Lifestyle demo bag.",
};

export default function CartPage() {
  return (
    <section className="mx-auto min-h-[55vh] max-w-[1280px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
      <p className="text-[9px] uppercase tracking-editorial text-muted">
        Your selection
      </p>
      <h1 className="mb-8 mt-2 font-display text-4xl sm:mb-12 sm:text-5xl">
        Your bag
      </h1>
      <CartContent />
    </section>
  );
}
