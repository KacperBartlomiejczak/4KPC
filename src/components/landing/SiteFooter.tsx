import Link from "next/link";

import { Wordmark } from "../design-system/Wordmark";

const footerGroups = [
  {
    title: "Produkt",
    links: [
      { label: "Zestawy", href: "#zestawy" },
      { label: "Podzespoły", href: "#podzespoly" },
      { label: "Asystent AI", href: "#asystent" },
    ],
  },
  {
    title: "Poznaj",
    links: [
      { label: "Jak to działa", href: "#jak-to-dziala" },
      { label: "Zastosowania", href: "#zastosowania" },
      { label: "Dlaczego 4KPC", href: "#dlaczego" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Wordmark />
            <p className="mt-5 max-w-sm text-body-s text-neutral-400">
              Komputery dobierane pod to, co naprawdę robisz — budżet,
              zastosowanie i zero zbędnych kompromisów.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-label-l text-white">{group.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-body-s text-neutral-400 transition-colors duration-micro-min ease-4kpc hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-label-l text-white">Materiały</p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link
                  href="/design-system"
                  className="text-body-s text-neutral-400 transition-colors duration-micro-min ease-4kpc hover:text-white"
                >
                  Design System
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-caption text-neutral-400">
          {`© ${new Date().getFullYear()} 4KPC. Wszystkie prawa zastrzeżone.`}
        </p>
      </div>
    </footer>
  );
}
