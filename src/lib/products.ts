export const categories = [
  { name: "Sunglasses", slug: "sunglasses", note: "A little more sun, a lot more style." },
  { name: "Watches", slug: "watches", note: "Good things take time." },
  { name: "Shoes", slug: "shoes", note: "Made for wherever the day goes." },
  { name: "Bags", slug: "bags", note: "Carry the day your way." },
  { name: "Wallets", slug: "wallets", note: "Everyday essentials, considered." },
  { name: "Caps", slug: "caps", note: "Your finishing touch." },
  { name: "Jewellery", slug: "jewellery", note: "Details worth noticing." },
  { name: "Perfumes", slug: "perfumes", note: "A signature, in a single note." },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: CategorySlug;
  price: number;
  description: string;
  image: string;
  label?: string;
};

export const products: Product[] = [
  {
    id: "sunglasses-01",
    name: "The Sunday Frame",
    slug: "the-sunday-frame",
    category: "sunglasses",
    price: 2499,
    description: "A softly sculpted acetate frame with sun-ready lenses. An easy companion from slow mornings to long weekends.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
    label: "Featured",
  },
  {
    id: "sunglasses-02",
    name: "The After Hours",
    slug: "the-after-hours",
    category: "sunglasses",
    price: 2899,
    description: "A confident, modern silhouette with a timeless dark finish, made for all-day wear.",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "watches-01",
    name: "The Stillwater Watch",
    slug: "the-stillwater-watch",
    category: "watches",
    price: 5499,
    description: "Understated lines meet a polished metal finish in a considered everyday timepiece.",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=85",
    label: "Featured",
  },
  {
    id: "watches-02",
    name: "The Meridian",
    slug: "the-meridian",
    category: "watches",
    price: 6299,
    description: "A clean dial and a refined profile make this a natural choice, day after day.",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "shoes-01",
    name: "The Everyday Low",
    slug: "the-everyday-low",
    category: "shoes",
    price: 3999,
    description: "An easy low-top with a pared-back profile, designed to find its way into your everyday rotation.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
    label: "Featured",
  },
  {
    id: "shoes-02",
    name: "The City Walk",
    slug: "the-city-walk",
    category: "shoes",
    price: 4499,
    description: "A versatile silhouette with considered details for busy days and unhurried detours.",
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "bags-01",
    name: "The Day Edit Tote",
    slug: "the-day-edit-tote",
    category: "bags",
    price: 3299,
    description: "A roomy, thoughtfully simple carryall for all the things the day has in store.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=85",
    label: "Featured",
  },
  {
    id: "bags-02",
    name: "The Mini Form",
    slug: "the-mini-form",
    category: "bags",
    price: 2799,
    description: "A compact shape with room for your essentials and a little more polish for every plan.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "wallets-01",
    name: "The Fold Wallet",
    slug: "the-fold-wallet",
    category: "wallets",
    price: 1499,
    description: "A slim, classic fold that keeps the everyday essentials close and considered.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "caps-01",
    name: "The Off-Duty Cap",
    slug: "the-off-duty-cap",
    category: "caps",
    price: 1199,
    description: "A relaxed, adjustable cap that brings an easy finish to off-duty dressing.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "jewellery-01",
    name: "The Quiet Hoops",
    slug: "the-quiet-hoops",
    category: "jewellery",
    price: 1899,
    description: "Sculptural, lightweight hoops with a soft shine that moves effortlessly from day to evening.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
    label: "Just in",
  },
  {
    id: "perfumes-01",
    name: "The Sunday Scent",
    slug: "the-sunday-scent",
    category: "perfumes",
    price: 2999,
    description: "A demo fragrance concept with warm, soft notes and a quietly memorable presence.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=85",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryProducts(slug: string) {
  return products.filter((product) => product.category === slug);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}
