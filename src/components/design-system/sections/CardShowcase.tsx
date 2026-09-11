import { Button } from "../Button";
import { Card } from "../Card";
import { SubPanel } from "../Section";
import { productSpecs } from "../content";
import {
  ArrowRightIcon,
  ChipIcon,
  GraphicsCardPlaceholder,
  HeartIcon,
} from "../icons";
import { cardVariantSchema } from "@/types/design-component";

const variants = cardVariantSchema.options;

function ProductCard() {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-3">
        <GraphicsCardPlaceholder className="h-24 w-full" />
        <HeartIcon className="size-5 shrink-0 text-neutral-600" />
      </div>

      <h4 className="mt-4 font-display text-title text-neutral-950">
        NVIDIA GeForce RTX 4090
      </h4>
      <p className="text-body-s text-neutral-600">Ultimate 4K performance.</p>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {productSpecs.map((spec) => (
          <div
            key={spec.value}
            className="flex min-w-0 items-center gap-1.5 rounded-md border border-neutral-200 px-2 py-1.5"
          >
            <ChipIcon className="size-4 shrink-0 text-neutral-600" />
            <div className="min-w-0">
              <p className="text-label-m text-neutral-950">{spec.value}</p>
              <p className="text-caption text-neutral-600">{spec.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="font-display text-heading-s text-neutral-950">$1,599</p>
        <Button>
          Add to Build
          <ArrowRightIcon className="size-4 shrink-0" />
        </Button>
      </div>
    </Card>
  );
}

/** 09 — przykładowa karta produktu i wszystkie warianty kontenera. */
export function CardShowcase({ className }: { className?: string }) {
  return (
    <SubPanel title="Card" className={className}>
      <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_11rem]">
        <ProductCard />

        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3 gap-y-3">
          {variants.map((variant) => (
            <div key={variant} className="contents">
              <p className="text-body-s text-neutral-600 capitalize">
                {variant}
              </p>
              <Card variant={variant} className="h-10 w-full" />
            </div>
          ))}
        </div>
      </div>
    </SubPanel>
  );
}
