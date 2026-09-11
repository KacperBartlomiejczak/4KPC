import { Button } from "../Button";
import { SubPanel } from "../Section";
import {
  buttonStateSchema,
  buttonVariantSchema,
} from "@/types/design-component";

const variants = buttonVariantSchema.options;
const states = buttonStateSchema.options;

/** 09 — macierz wariantów i stanów przycisku. */
export function ButtonShowcase({ className }: { className?: string }) {
  return (
    <SubPanel title="Button" className={className}>
      {/* Pięć kolumn przycisków nie zmieści się na 390px — własny scroll. */}
      <div className="-mx-1 overflow-x-auto px-1">
        <div className="grid min-w-[19rem] grid-cols-[auto_repeat(3,minmax(0,1fr))] items-center gap-x-3 gap-y-3">
          <span />
          {variants.map((variant) => (
            <p
              key={variant}
              className="text-center text-body-s text-neutral-950 capitalize"
            >
              {variant}
            </p>
          ))}

          {states.map((state) => (
            <div key={state} className="contents">
              <p className="pr-2 text-body-s text-neutral-600 capitalize">
                {state}
              </p>
              {variants.map((variant) => (
                <Button
                  key={`${variant}-${state}`}
                  variant={variant}
                  state={state}
                  className="w-full"
                >
                  Button
                </Button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </SubPanel>
  );
}
