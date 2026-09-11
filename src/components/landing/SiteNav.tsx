"use client";

import { useState } from "react";

import { Wordmark } from "../design-system/Wordmark";

const navLinks = [
  { label: "Jak to działa", href: "#jak-to-dziala" },
  { label: "Zastosowania", href: "#zastosowania" },
  { label: "Podzespoły", href: "#podzespoly" },
  { label: "Zestawy", href: "#zestawy" },
  { label: "Asystent AI", href: "#asystent" },
] as const;

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      className="size-5 shrink-0"
    >
      {isOpen ? (
        <path d="m6 6 12 12M18 6 6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur-md">
      <nav
        aria-label="Nawigacja główna"
        className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8"
      >
        <Wordmark size="sm" />

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-label-l text-white transition-colors duration-component-min ease-4kpc hover:bg-white/10 md:hidden"
        >
          <MenuIcon isOpen={isOpen} />
          Menu
        </button>

        <div
          id="nav-menu"
          className={`${
            isOpen ? "flex" : "hidden"
          } w-full flex-col items-start gap-5 pb-2 md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:pb-0`}
        >
          <ul className="flex w-full flex-col gap-4 md:w-auto md:flex-row md:items-center md:gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-body-s text-neutral-400 transition-colors duration-micro-min ease-4kpc hover:text-white focus-visible:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#brief"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center rounded-full bg-cta px-5 py-2.5 text-label-l text-white shadow-level-1 transition-colors duration-component-min ease-4kpc hover:bg-cta-hover active:bg-cta-pressed"
          >
            Dobierz komputer
          </a>
        </div>
      </nav>
    </header>
  );
}
