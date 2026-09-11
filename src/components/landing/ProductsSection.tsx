import { productSchema, type Product } from "@/types/product";

import { ProductCard } from "./ProductCard";
import { SectionHeading } from "./SectionHeading";

/**
 * Dane przechodzą przez `productSchema.parse` już tutaj — landing jest
 * pierwszym konsumentem modelu, więc niezgodność ma wysypać się na buildzie,
 * a nie dopiero wtedy, gdy te same rekordy przyjdą z Ice Cat API.
 */
export const featuredProducts: readonly Product[] = [
  {
    id: "product-rtx-4090",
    name: "NVIDIA GeForce RTX 4090",
    category: "gpu",
    tagline: "Maksymalna wydajność w 4K.",
    pricePln: 8999,
    specs: [
      { value: "24GB", label: "GDDR6X" },
      { value: "4K", label: "Ready" },
      { value: "DLSS 3", label: "AI Powered" },
    ],
    imagePath: "/media/product-gpu.jpg",
  },
  {
    id: "product-ryzen-9-7950x",
    name: "AMD Ryzen 9 7950X",
    category: "cpu",
    tagline: "Szesnaście rdzeni pod render i kompilację.",
    pricePln: 2799,
    specs: [
      { value: "16", label: "rdzeni" },
      { value: "5,7 GHz", label: "boost" },
      { value: "170 W", label: "TDP" },
    ],
    imagePath: "/media/product-cpu.jpg",
  },
  {
    id: "product-fury-beast-64",
    name: "Kingston Fury Beast 64 GB",
    category: "ram",
    tagline: "DDR5 pod montaż i wirtualizację.",
    pricePln: 949,
    specs: [
      { value: "64 GB", label: "DDR5" },
      { value: "6000", label: "MT/s" },
      { value: "CL30", label: "opóźnienie" },
    ],
    imagePath: "/media/product-ram.jpg",
  },
  {
    id: "product-990-pro-2tb",
    name: "Samsung 990 PRO 2 TB",
    category: "storage",
    tagline: "NVMe Gen4 pod biblioteki i projekty 4K.",
    pricePln: 799,
    specs: [
      { value: "2 TB", label: "pojemność" },
      { value: "7450", label: "MB/s odczyt" },
      { value: "Gen4", label: "PCIe" },
    ],
    imagePath: "/media/product-storage.jpg",
  },
].map((product) => productSchema.parse(product));

export function ProductsSection() {
  return (
    <section
      id="podzespoly"
      aria-labelledby="podzespoly-heading"
      className="bg-neutral-50 py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <SectionHeading
          headingId="podzespoly-heading"
          eyebrow="Podzespoły"
          title="Z czego to składamy."
          lead="Części, które najczęściej wchodzą do zestawów 4KPC. Każdą podmienisz, zanim złożymy komputer."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <li key={product.id} className="min-w-0">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
