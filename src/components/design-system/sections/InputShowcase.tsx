import { InputField } from "../InputField";
import { SubPanel } from "../Section";
import { inputStateSchema } from "@/types/design-component";

const states = inputStateSchema.options;

/** 09 — stany pola tekstowego. */
export function InputShowcase({ className }: { className?: string }) {
  return (
    <SubPanel title="Input Field" className={className}>
      <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 gap-y-5">
        {states.map((state) => (
          <div key={state} className="contents">
            <p className="text-body-s text-neutral-600 capitalize">{state}</p>
            <InputField
              label="Label"
              state={state}
              placeholder="Enter your email"
              errorMessage="This field is required."
              readOnly
            />
          </div>
        ))}
      </div>
    </SubPanel>
  );
}
