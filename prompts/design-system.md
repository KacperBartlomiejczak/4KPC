# Feature: Design System Page (`/design-system`)

## Co przeczytałem

- `design/design-system.png` — cała plansza, odczytana sekcja po sekcji przez
  powiększone wycinki (sips crop + upscale), żeby nie zgadywać wartości HEX ani liczb.
- `.AGENTS.md` — zasady projektu (kolejność: zod → typ → test → implementacja, zero `any`,
  `snake_case` w DB, `camelCase` w kodzie, `PascalCase` w typach, typy w `src/types/`).
- `src/app/layout.tsx`, `src/app/globals.css`, `package.json`, `tsconfig.json`,
  `postcss.config.mjs` — obecny stan: Next 16, React 19, Tailwind v4 (`@theme inline`),
  fonty Geist, brak zainstalowanego `zod`, brak test runnera.

## Źródło prawdy — tokeny odczytane z obrazu (nic nie zmieniam, 1:1)

### 02 Color Palette

Primary: `900 #07111F`, `700 #102A46`, `500 #1976D2`, `400 #42A5F5`, `300 #90CAF9`
Secondary: `700 #006778`, `500 #00B8DA`, `400 #26C6DA`, `300 #80DEEA`
Neutral: `950 #05070A`, `800 #141A21`, `600 #3A4652`, `400 #8D99A6`, `200 #D8DEE4`,
`100 #EEF1F4`, `50 #F8FAFC`
Semantic: `success #16A34A`, `warning #F59E0B`, `error #DC2626`, `info #2563EB`
CTA: `default #1976D2`, `hover #1565C0`, `pressed #0D47A1`, `disabled #B7C0C9`

### 03 Typography

Fonty: **Space Grotesk** (Headings / Display / Brand), **Inter** (Body / UI / Readability).

| Token | Size / Line height | Weight |
| --- | --- | --- |
| Display XL | 72 / 80 | 700 |
| Display L | 64 / 72 | 700 |
| Display M | 56 / 64 | 700 |
| Heading XL | 48 / 56 | 700 |
| Heading L | 40 / 48 | 700 |
| Heading M | 32 / 40 | 600 |
| Heading S | 24 / 32 | 600 |
| Title | 20 / 28 | 600 |
| Body L | 18 / 28 | 400 |
| Body M | 16 / 24 | 400 |
| Body S | 14 / 20 | 400 |
| Label L | 14 / 20 | 600 |
| Label M | 12 / 16 | 600 |
| Caption | 11 / 16 | 500 |

### 04 Spacing & Grid

Skala (base 8), kroki 1–12: `4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160` px.
Grid (Desktop 1440–3840): `Columns 12`, `Gutter 32px`, `Side margin 160px`,
`Max content 3520px`.

### 05 Border Radius

`S 4px`, `M 8px`, `L 12px`, `XL 16px`, `2XL 24px`, `Full 999px`.

### 06 Elevation

`Level 0` — none
`Level 1` — `0 2px 8px rgba(5, 7, 10, 0.08)`
`Level 2` — `0 8px 24px rgba(5, 7, 10, 0.12)`
`Level 3` — `0 16px 48px rgba(5, 7, 10, 0.18)`

### 07 Breakpoints

`Mobile 320–767` (4 kolumny, 16px margin), `Tablet 768–1439` (8 kolumn, 48px margin),
`Desktop 1440–3840` (12 kolumn, 160px margin).

### 08 Motion

`Micro 120–160ms`, `Component 180–240ms`, `Large 300–400ms`,
easing `cubic-bezier(0.2, 0.8, 0.2, 1)`.

### 09 Components (stany do odwzorowania)

- **Button**: warianty `primary | secondary | ghost`, stany
  `default | hover | pressed | disabled | loading`.
- **Input**: stany `default | focus | error | disabled`, label nad polem,
  komunikat błędu `This field is required.` + ikona błędu.
- **Card**: warianty `default | outlined | elevated | hover | selected | disabled`
  + przykładowa karta produktu (RTX 4090, `$1,599`, specy chips, CTA "Add to Build").

### 10 Implementation Guidelines

6 kafelków: Use design tokens / Accessible by default / Responsive design /
Component driven / Consistent naming / Document everything (teksty 1:1 z obrazu).

### Header + panele marketingowe

- Header: logo `4KPC` + `BUILT FOR A HIGHER REALITY`, `Design System v1.0`,
  `Components for a higher standard.`, po prawej `PERFORMANCE / PRECISION / POSSIBILITIES`.
- Hero: `HIGH PERFORMANCE COMPUTERS` / `BUILT WITHOUT LIMITS.` / opis / CTA `Explore Systems`.
- Stopka sekcji 10: `MORE THAN COMPUTERS` / `HIGHER POSSIBILITIES.` / logo `4KPC`.

## Model danych — korekta po Twojej uwadze

Pierwotnie chciałem opisać schematami zod **także tokeny stylów** (kolory, skalę
typografii, cienie). Kacper to uciął i słusznie: tokeny to style, nie domena.
Nie ma sensu walidować runtime'owo czegoś, co jest stałą w CSS.

Ostateczny podział:

- **Style → `src/app/globals.css`**, jako zmienne Tailwinda w bloku `@theme`.
  Tam mieszkają kolory, skala typografii, spacing, radiusy, cienie, breakpointy
  i motion. To jedyne źródło prawdy dla wartości.
- **Typy → tylko dla komponentów**, w `src/types/design-component.ts`:

```
buttonVariantSchema -> ButtonVariant  'primary' | 'secondary' | 'ghost'
buttonStateSchema   -> ButtonState    'default' | 'hover' | 'pressed' | 'disabled' | 'loading'
inputStateSchema    -> InputState     'default' | 'focus' | 'error' | 'disabled'
cardVariantSchema   -> CardVariant    'default' | 'outlined' | 'elevated' | 'hover' | 'selected' | 'disabled'
productSpecSchema   -> ProductSpec    { label, value }
```

Wszystko jako `z.infer<typeof schema>` i unie literałów (`z.enum`), zero TS `enum`,
zero `any`. Testy iterują po `.options` tych schematów, więc dodanie wariantu
automatycznie rozszerza pokrycie testowe.

Treść planszy (etykiety, wartości do wyświetlenia) leży w
`src/app/design-system/content.ts` jako zwykłe `as const` — to statyczny tekst
strony, nie dane wejściowe, więc nie przechodzi przez zod.

## Kroki (kolejność z `.AGENTS.md`: schema → test → implementacja)

1. `prompts/design-system.md` (ten plik) → **akceptacja**.
2. Instalacja zależności: `zod`, `vitest`, `@vitejs/plugin-react`, `jsdom`,
   `@testing-library/react`, `@testing-library/jest-dom`; skrypt `"test": "vitest run"`.
3. Tokeny w CSS: `src/app/globals.css` — wszystkie wartości jako zmienne w `@theme`
   (`--color-primary-500`, `--text-display-xl`, `--spacing-*`, `--radius-*`,
   `--shadow-level-*`, `--ease-4kpc`), fonty `Space_Grotesk` + `Inter` w `layout.tsx`.
4. `src/types/design-component.ts` — schematy zod + typy tylko dla komponentów.
5. `src/app/design-system/content.ts` — treść planszy 1:1 z obrazu.
6. **Testy** (`*.test.ts(x)`) przed implementacją komponentów:
   - `Button.test.tsx` — render 3 wariantów × 5 stanów; `disabled` ma atrybut `disabled`,
     `loading` ma `aria-busy="true"` i spinner.
   - `InputField.test.tsx` — label powiązany z inputem (`getByLabelText`), stan `error`
     renderuje `This field is required.`, `aria-invalid="true"` i `aria-describedby`.
   - `Card.test.tsx` — 6 wariantów renderuje się, `selected` ma `aria-current`.
7. Komponenty prezentacyjne: `src/components/design-system/` — `Button.tsx`,
   `InputField.tsx`, `Card.tsx`, `Swatch.tsx`, `TokenTable.tsx`, `SectionHeading.tsx`.
   Wszystkie **Server Components** poza tymi, które wymagają stanu — sekcje pokazują
   stany `hover/pressed/focus` przez propsy (statyczna prezentacja), więc `"use client"`
   nie jest potrzebny nigdzie.
8. Strona: `src/app/design-system/page.tsx` — 10 sekcji w kolejności z obrazu.
9. `npm test`, `npm run lint`, `npx tsc --noEmit` — wszystko na zielono.
10. Podsumowanie + jak sprawdzić.

## Czego świadomie NIE robię

- Nie zmieniam żadnej wartości z obrazu (kolory, rozmiary, cienie, easing — 1:1).
- Nie dotykam `src/app/page.tsx` (strona główna zostaje) — design system pod `/design-system`.
- Nie dodaję dark mode do tej strony — obraz pokazuje wersję jasną; ciemne są tylko
  panele marketingowe (header/hero/footer), i takie zostaną.
- Zdjęcia sprzętu z obrazu (RTX 4090, obudowa, góry) nie są dostępne jako pliki —
  w ich miejsce wchodzą placeholdery w tej samej proporcji i z tym samym tłem
  (`neutral-950` → `primary-900`). Jeśli masz te assety, podrzuć je do `public/`.

## Struktura plików (po Twojej regule o dzieleniu na komponenty)

```
src/app/design-system/page.tsx        — wyłącznie rozkład sekcji na siatce
src/types/design-component.ts         — zod + typy wariantów komponentów
src/app/globals.css                   — wszystkie tokeny w @theme

src/components/design-system/
  Button.tsx  Card.tsx  InputField.tsx — komponenty z sekcji 09 (+ testy obok)
  Section.tsx  Swatch.tsx  Wordmark.tsx  icons.tsx  content.ts
  sections/
    SiteHeader.tsx
    PrinciplesSection.tsx  HeroPanel.tsx          — 01
    ColorPaletteSection.tsx                       — 02
    TypographySection.tsx                         — 03
    SpacingGridSection.tsx                        — 04
    BorderRadiusSection.tsx                       — 05
    ElevationSection.tsx                          — 06
    BreakpointsSection.tsx                        — 07
    MotionSection.tsx                             — 08
    ComponentsSection.tsx                         — 09
      ButtonShowcase.tsx  InputShowcase.tsx  CardShowcase.tsx
    GuidelinesSection.tsx  BrandPanel.tsx         — 10
```

## Co wyszło w trakcie

- **Zepsuty `package-lock.json`** — wpis `node_modules/next/node_modules/@next/swc-win32-x64-msvc`
  bez pola `version` wywracał każdy `npm install` na `TypeError: Invalid Version`.
  Usunięty, lock przeliczony.
- **Spinner w stanie `loading` znikał** — `<Button>` jest `inline-flex`, więc SVG bez
  `shrink-0` zgniatało się do `width: 0` obok etykiety. Poprawione, z testem regresyjnym.
- **Poziomy scroll na mobile (441px przy 390px viewportu)** — dzieci grida mają domyślnie
  `min-width: auto` i nie schodzą poniżej min-content. `min-w-0` na sekcjach i panelach,
  próbki kolorów 4-w-rzędzie na mobile, macierz przycisków we własnym `overflow-x-auto`.

## Pytania do Ciebie

1. Trasa `/design-system` czy podmieniamy stronę główną `/`?
2. Vitest + Testing Library OK? (w projekcie nie ma jeszcze żadnego runnera, a reguła
   mówi "test przed komponentem")
3. Fonty Space Grotesk + Inter przez `next/font/google` — czy zostawiamy Geist w layoucie
   dla reszty aplikacji i dokładamy tamte dwa obok?
