"use client";

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import type { ReactNode } from "react";
import { products } from "@/lib/products";
import type { Product } from "@/lib/products";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  hydrated: boolean;
  addItem: (product: Product) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "sky-lifestyle-cart";
const serverSnapshot = { items: [] as CartItem[], hydrated: false };
let snapshot = serverSnapshot;
let initialized = false;
const listeners = new Set<() => void>();

function initializeCart() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  let items: CartItem[] = [];
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed: unknown = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        items = parsed.flatMap((item): CartItem[] => {
          if (
            typeof item !== "object" ||
            item === null ||
            !("product" in item) ||
            typeof item.product !== "object" ||
            item.product === null ||
            !("id" in item.product) ||
            typeof item.product.id !== "string" ||
            !("quantity" in item) ||
            typeof item.quantity !== "number" ||
            !Number.isInteger(item.quantity) ||
            item.quantity < 1
          ) {
            return [];
          }

          const product = products.find(
            (candidate) => candidate.id === item.product.id,
          );
          return product ? [{ product, quantity: item.quantity }] : [];
        });
      }
    }
  } catch (error) {
    console.error("Unable to read the saved Sky Lifestyle cart.", error);
  }

  snapshot = { items, hydrated: true };
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (!initialized) {
    initializeCart();
    listener();
  }
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return snapshot;
}

function getServerSnapshot() {
  return serverSnapshot;
}

function updateCart(items: CartItem[]) {
  initializeCart();
  snapshot = { items, hydrated: true };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error("Unable to save the Sky Lifestyle cart.", error);
  }
  listeners.forEach((listener) => listener());
}

function addItem(product: Product) {
  const items = snapshot.items;
  const existing = items.find((item) => item.product.id === product.id);
  updateCart(
    existing
      ? items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      : [...items, { product, quantity: 1 }],
  );
}

function setQuantity(productId: string, quantity: number) {
  updateCart(
    quantity < 1
      ? snapshot.items.filter((item) => item.product.id !== productId)
      : snapshot.items.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item,
        ),
  );
}

function removeItem(productId: string) {
  updateCart(snapshot.items.filter((item) => item.product.id !== productId));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const { items, hydrated } = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );

    return {
      items,
      itemCount,
      subtotal,
      hydrated,
      addItem,
      setQuantity,
      removeItem,
    };
  }, [hydrated, items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider.");
  return context;
}
