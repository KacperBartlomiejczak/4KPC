import { Card } from "../design-system/Card";
import { formatPricePln } from "@/lib/price";
import type { Product } from "@/types/product";

import { CtaLink } from "./CtaLink";
import { ImageSlot } from "./ImageSlot";
import { SpecChips } from "./SpecChips";
import { productCategoryLabels } from "./labels";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card
      variant="default"
      className="flex h-full min-w-0 flex-col overflow-hidden transition-[box-shadow,transform] duration-component-min ease-4kpc hover:-translate-y-1 hover:shadow-level-2"
    >
      <ImageSlot
        src={product.imagePath}
        alt={product.name}
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="aspect-16/10 w-full"
      />

      <div className="flex grow flex-col p-5">
        <p className="text-caption tracking-[0.18em] text-cta uppercase">
          {productCategoryLabels[product.category]}
        </p>

        <h3 className="mt-3 font-display text-title text-neutral-950">
          {product.name}
        </h3>
        <p className="mt-2 text-body-s text-neutral-600">{product.tagline}</p>

        <div className="mt-5">
          <SpecChips specs={product.specs} />
        </div>

        <div className="mt-6 flex grow flex-wrap items-end justify-between gap-3">
          <p className="font-display text-heading-s text-neutral-950">
            {formatPricePln(product.pricePln)}
          </p>
          <CtaLink
            href="#brief"
            aria-label={`Dodaj do zestawu: ${product.name}`}
            className="px-5 py-2.5"
          >
            Dodaj do zestawu
          </CtaLink>
        </div>
      </div>
    </Card>
  );
}
