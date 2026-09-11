import { Section } from "../Section";
import { typeScale } from "../content";

const fontFamilies = [
  {
    name: "Space Grotesk",
    className: "font-display",
    roles: ["Headings", "Display", "Brand"],
  },
  {
    name: "Inter",
    className: "font-body",
    roles: ["Body", "UI", "Readability"],
  },
] as const;

function FontFamilyPreview({
  family,
  withDivider,
}: {
  family: (typeof fontFamilies)[number];
  withDivider: boolean;
}) {
  return (
    <div
      className={withDivider ? "border-b border-neutral-200 py-5" : "pt-5"}
    >
      <p className={`${family.className} text-heading-m text-neutral-950`}>
        {family.name}
      </p>

      <div className="mt-3 flex items-center gap-5">
        <p
          className={`${family.className} text-display-m leading-none text-neutral-950`}
        >
          Aa
        </p>
        <div
          className={`${family.className} text-caption tracking-wide text-neutral-600`}
        >
          <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p>abcdefghijklmnopqrstuvwxyz</p>
          <p>0123456789</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {family.roles.map((role) => (
          <span
            key={role}
            className="rounded-sm bg-neutral-100 px-2 py-1 text-caption text-neutral-600"
          >
            {role}
          </span>
        ))}
      </div>
    </div>
  );
}

function TypeScaleTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[320px] text-left">
        <thead>
          <tr className="border-b border-neutral-200">
            <th scope="col" className="pb-2 text-label-l text-neutral-950">
              Type Scale
            </th>
            <th
              scope="col"
              className="pb-2 text-body-s font-normal text-neutral-400"
            >
              Size / Line height
            </th>
            <th
              scope="col"
              className="pb-2 text-right text-body-s font-normal text-neutral-400"
            >
              Weight
            </th>
          </tr>
        </thead>
        <tbody>
          {typeScale.map((row) => (
            <tr key={row.name} className="border-b border-neutral-200">
              <th
                scope="row"
                className={`py-2 text-body-s text-neutral-950 ${
                  row.weight >= 600 ? "font-display" : "font-body"
                }`}
                style={{ fontWeight: row.weight }}
              >
                {row.name}
              </th>
              <td className="py-2 text-body-s text-neutral-600">
                {row.size} / {row.lineHeight}
              </td>
              <td className="py-2 text-right text-body-s text-neutral-600">
                {row.weight}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** 03 — Typography. */
export function TypographySection({ className }: { className?: string }) {
  return (
    <Section number="03" title="Typography" className={className}>
      {/* Tabela skali potrzebuje ~320px, próbki fontów mniej. */}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
        <div>
          <h3 className="border-b border-neutral-200 pb-2 text-label-l text-neutral-950">
            Font Family
          </h3>
          {fontFamilies.map((family, index) => (
            <FontFamilyPreview
              key={family.name}
              family={family}
              withDivider={index === 0}
            />
          ))}
        </div>

        <TypeScaleTable />
      </div>
    </Section>
  );
}
