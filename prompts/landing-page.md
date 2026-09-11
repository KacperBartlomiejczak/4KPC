# Feature: Landing page 4KPC (`/`)

## Co przeczytałem

- `design/design-system.png` — cała plansza, ze szczególnym naciskiem na panele
  marketingowe (header, hero „BUILT WITHOUT LIMITS.”, stopka „HIGHER POSSIBILITIES.”),
  bo to one definiują język wizualny landingu.
- `src/app/design-system/page.tsx` + całe `src/components/design-system/` —
  gotowe komponenty (`Button`, `Card`, `InputField`, `Section`, `Wordmark`, `icons.tsx`)
  i panele (`SiteHeader`, `HeroPanel`, `BrandPanel`) — landing ma z nich korzystać,
  nie duplikować stylów.
- `src/app/globals.css` — wszystkie tokeny siedzą w `@theme` (kolory, skala
  typografii, `--radius-*`, `--shadow-level-*`, `--ease-4kpc`, `--duration-*`).
  Landing nie dokłada ani jednej nowej wartości — używa wyłącznie tych tokenów.
- `src/app/layout.tsx`, `src/app/page.tsx`, `public/*.svg`, `README.md` — resztki
  `create-next-app` do usunięcia.
- `src/types/design-component.ts` — wzorzec: `z.enum` → `z.infer`, zero `any`.
- `.AGENTS.md` — kolejność: plan → akceptacja → schema/typ → test → implementacja;
  komponenty pod `src/components/{nazwa strony}`; bez plików `content.ts`.
- `vitest.config.mts` + istniejące testy (`Button.test.tsx`) — wzorzec testów:
  iteracja po `schema.options`, `@testing-library/react`, role ARIA.

## Co usuwam (boilerplate `create-next-app`)

| Plik | Co robię |
| --- | --- |
| `src/app/page.tsx` | cała zawartość wymieniona na landing 4KPC |
| `src/app/layout.tsx` | wypada `Geist` i `Geist_Mono` (nieużywane — DS stoi na Space Grotesk + Inter); `metadata` z „Create Next App” → 4KPC + `openGraph`; `lang="pl"` |
| `src/app/globals.css` | wypada blok `@theme inline` z `--font-geist-*` i `--background/--foreground` + `@media (prefers-color-scheme: dark)`; `body` dostaje tokeny DS (`--color-neutral-50` / `--color-neutral-950`). **Blok `@theme` z tokenami z planszy zostaje nietknięty.** |
| `public/next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg` | usuwam — żaden nie jest używany |
| `src/app/favicon.ico` | zostaje na razie (brak assetu 4KPC) — do podmiany, gdy dasz logo |
| `README.md` | przepisany na opis projektu: stack, `npm run dev/test/lint`, trasy `/` i `/design-system` |

`/design-system` zostaje bez zmian — to referencja, nie trasa produkcyjna.

## Model danych (kolejność z `.AGENTS.md`: zod → typ → test → implementacja)

Tokeny i treść marketingowa to **nie** domena, więc nie przechodzą przez zod
(tak jak ustaliliśmy przy design systemie). Przez zod idzie tylko to, co jest
realnym bytem domenowym albo wejściem od użytkownika.

### `src/types/build.ts` — gotowy zestaw komputerowy

```
buildIdSchema      -> BuildId        z.string().min(1).brand<'BuildId'>()
useCaseSchema      -> UseCase        'gaming-4k' | 'streaming' | 'video-editing' | 'work-study' | 'ai-ml'
buildTierSchema    -> BuildTier      'starter' | 'performance' | 'ultra'
buildSpecSchema    -> BuildSpec      { label: string, value: string }   // chip „24GB / GDDR6X”
buildSchema        -> Build          { id, name, tier, useCase, pricePln: int > 0, tagline, specs: BuildSpec[] }
```

Dlaczego tak, a nie „zwykły obiekt na landingu”: te trzy zestawy na stronie głównej
to ten sam kształt, który za chwilę przyjdzie z bazy (Drizzle/Neon) i z odpowiedzi
Gemini (`ComputerSuggestion`). Modeluję go raz, teraz — landing jest pierwszym
konsumentem, nie wyjątkiem. `BuildId` jest brandowany, żeby nie dało się go pomylić
z `UserId`. `pricePln` to `z.int().positive()` — grosze wchodzą dopiero przy koszyku,
landing pokazuje pełne złotówki; formatuje `Intl.NumberFormat('pl-PL')`.

Dane trzech zestawów siedzą w samej sekcji jako `const featuredBuilds: Build[]`
(bez osobnego `content.ts` — zgodnie z Twoją regułą), ale są otypowane domenowo,
więc kompilator pilnuje zgodności z modelem.

### `src/types/product.ts` — pojedynczy podzespół

```
productIdSchema       -> ProductId        z.string().min(1).brand<'ProductId'>()
productCategorySchema -> ProductCategory  'gpu' | 'cpu' | 'ram' | 'storage'
productSchema         -> Product          { id, name, category, tagline, pricePln: int > 0, specs: SpecChip[], imagePath }
```

### `src/types/spec.ts` — chip specyfikacji

`specChipSchema -> SpecChip { label, value }` — wspólny dla `Product` i `Build`,
bo to ten sam byt („24GB / GDDR6X”). Jeden plik, dwa konsumenty.

### `src/types/lead.ts` — wejście z hero

```
buildBriefSchema -> BuildBrief  { prompt: z.string().trim().min(10).max(500) }
```

Walidacja `safeParse` po stronie klienta przy submicie; komunikat błędu pod polem
(reużywam `InputField` ze stanem `error`). Zero wywołań Gemini na tym etapie —
formularz przekazuje `prompt` dalej do trasy czatu.

## Sekcje strony (język wizualny 1:1 z planszy)

| # | Komponent | Co pokazuje |
| --- | --- | --- |
| — | `SiteNav` | ciemny, sticky pasek: `Wordmark`, kotwice do sekcji, CTA „Dobierz zestaw”, hamburger na mobile (jedyny `"use client"` w nawigacji) |
| 1 | `HeroSection` | pełna szerokość, gradient `neutral-950 → primary-900 → primary-700` jak w `SiteHeader`; eyebrow `HIGH PERFORMANCE COMPUTERS`, `display-l/xl` „BUILT WITHOUT LIMITS.”, akcent `h-1 w-12 bg-primary-500`, dwa CTA, pasek liczb (np. „2 min • dobór przez AI”) |
| 2 | `PrinciplesSection` | trzy karty z ikonami (`CrosshairIcon`, `BoltIcon`, `OverlapIcon`) — dlaczego 4KPC, w rytmie sekcji 01 planszy |
| 3 | `HowItWorksSection` | 4 kroki (opisz potrzeby → AI dobiera → filtruj i porównaj → zamawiasz), numeracja jak `01–04` z planszy |
| 4 | `UseCasesSection` | kafelki generowane z `useCaseSchema.options` — gaming 4K, streaming, montaż, praca/studia, AI/ML |
| 5 | `ProductsSection` + `ProductCard` | karty pojedynczych podzespołów (GPU/CPU/RAM/dysk) — dokładnie karta z sekcji 09 planszy: zdjęcie, nazwa, chipy, cena, CTA „Dodaj do zestawu” |
| 6 | `FeaturedBuildsSection` + `BuildCard` | trzy zestawy na komponencie `Card` (`elevated` / `selected` dla wyróżnionego) + `Button` z DS, chipy specyfikacji, cena |
| 7 | `AiAssistantSection` | ciemny panel z makietą rozmowy (statyczne dymki) — pokazuje, czym jest czat, bez podpinania modelu |
| 8 | `FinalCtaSection` | pasmo w stylu `BrandPanel`: `MORE THAN COMPUTERS` / `HIGHER POSSIBILITIES.` + CTA |
| — | `SiteFooter` | `Wordmark`, kolumny linków, link do `/design-system`, rok |

Wszystko w `src/components/landing/`, `src/app/page.tsx` odpowiada **wyłącznie**
za rozkład sekcji (tak jak `design-system/page.tsx`). Serwerowe komponenty
wszędzie poza `SiteNav` (mobilne menu) i ewentualnym formularzem hero.

## Testy (piszę je **przed** komponentami)

- `SiteNav.test.tsx` — landmark `navigation`, komplet linków, hamburger otwiera
  i zamyka menu (`aria-expanded`).
- `HeroSection.test.tsx` — dokładnie jeden `h1`, oba CTA z poprawnym `href`.
- `HowItWorksSection.test.tsx` — cztery kroki w kolejności, każdy z numerem.
- `UseCasesSection.test.tsx` — tyle kafelków, ile `useCaseSchema.options`
  (dodanie zastosowania automatycznie rozszerza pokrycie).
- `ProductCard.test.tsx` — nazwa, kategoria, cena po polsku, komplet chipów,
  CTA „Dodaj do zestawu” z `aria-label` zawierającym nazwę produktu.
- `ProductsSection.test.tsx` — po jednej karcie na każdą `productCategorySchema.options`.
- `BuildCard.test.tsx` — nazwa, cena sformatowana po polsku, wszystkie chipy,
  CTA z `aria-label` zawierającym nazwę zestawu, wariant wyróżniony ma `aria-current`.
- `FeaturedBuildsSection.test.tsx` — trzy karty, dane przechodzą `buildSchema.safeParse`.
- `SiteFooter.test.tsx` — landmark `contentinfo`, link do `/design-system`.
- `build.test.ts` — schemat: odrzuca ujemną cenę i nieznany `useCase`, przyjmuje
  poprawny zestaw.

## Kroki

1. `prompts/landing-page.md` (ten plik) + odpowiedzi na pytania → **akceptacja**.
2. Sprzątanie boilerplate'u (tabela wyżej), `npx tsc --noEmit` na zielono.
3. `src/types/build.ts` (+ `lead.ts`, jeśli dotyczy) — zod → typy.
4. `src/types/build.test.ts` — testy schematu.
5. Testy komponentów landingu (pliki `*.test.tsx` obok przyszłych komponentów).
6. Implementacja komponentów `src/components/landing/*`.
7. `src/app/page.tsx` — złożenie sekcji; `layout.tsx` — metadata 4KPC.
8. `npm test`, `npm run lint`, `npx tsc --noEmit` — wszystko na zielono.
9. Podgląd w przeglądarce (desktop + mobile 375px), sprawdzenie braku
   poziomego scrolla i kontrastów WCAG AA.
10. Podsumowanie + jak sprawdzić.

## Czego świadomie NIE robię

- Nie podpinam Gemini, Clerka, Neona ani Zustanda — to landing, nie feature AI.
  CTA prowadzą do kotwic na stronie (decyzja 2).
- Nie dodaję dark mode (plansza definiuje jasny motyw + ciemne panele).
- Nie zmieniam ani jednego tokena w `@theme` — landing tylko konsumuje.
- Nie tworzę `content.ts` dla treści landingu (Twoja reguła) — copy siedzi
  w komponentach sekcji.
- Nie dorzucam zdjęć sprzętu (brak assetów) — wchodzą sloty `ImageSlot` (decyzja 4).

## Decyzje (Twoje odpowiedzi, 2026-09-11)

1. **Język: całość po polsku.** Nagłówki z planszy tłumaczę
   („BUILT WITHOUT LIMITS.” → „ZBUDOWANY BEZ KOMPROMISÓW.”,
   „HIGHER POSSIBILITIES.” → „WIĘKSZE MOŻLIWOŚCI.”).
   Jedyny wyjątek: sam logotyp `4KPC / BUILT FOR A HIGHER REALITY` —
   to znak marki z planszy, nie copy, więc zostaje nietknięty (i `Wordmark`
   jest współdzielony z `/design-system`, gdzie musi być 1:1). Powiedz słowo,
   jeśli chcesz też polski claim pod logo — to jedna linijka.
2. **CTA: pole w hero + kotwice.** Hero dostaje `BuildBriefForm` — opis potrzeb
   walidowany `buildBriefSchema.safeParse()`, bez żadnego wywołania modelu.
   Po poprawnym submicie panel pokazuje potwierdzenie z przepisanym briefem
   i kieruje do sekcji z zestawami. Reszta CTA to kotwice (`#jak-to-dziala`,
   `#zestawy`, `#asystent`). Zero martwych linków.
3. **Zakres: pełne 7 sekcji** z tabeli wyżej + **sekcja „Podzespoły”** (karty
   pojedynczych produktów jak RTX 4090 z planszy) wstawiona **po zastosowaniach,
   przed gotowymi zestawami**. Lejek: co robisz → z czego to zbudować →
   gotowe zestawy → asystent AI.
4. **Grafiki: sloty `next/image`.** Komponent `ImageSlot` (Server Component)
   sprawdza `existsSync` w `public/` i — jeśli plik jest — renderuje `next/image`
   (`fill` + `object-cover`, `sizes`, `priority` tylko w hero). Jeśli pliku nie ma,
   rysuje gradient na tokenach w tej samej proporcji, a ścieżkę do podrzucenia
   pokazuje **tylko w devie**. Nic się nie psuje, nic nie wymaga przełącznika:
   wrzucasz plik do `public/` i wskakuje sam.

   Oczekiwane assety:

   | Ścieżka | Gdzie | Proporcja |
   | --- | --- | --- |
   | `public/media/hero-case.jpg` | hero | 4:5 (pion) |
   | `public/media/product-gpu.jpg` | karta podzespołu (GPU) | 16:10 |
   | `public/media/product-cpu.jpg` | karta podzespołu (CPU) | 16:10 |
   | `public/media/product-ram.jpg` | karta podzespołu (RAM) | 16:10 |
   | `public/media/product-storage.jpg` | karta podzespołu (dysk) | 16:10 |
   | `public/media/build-starter.jpg` | karta zestawu 1 | 16:10 |
   | `public/media/build-performance.jpg` | karta zestawu 2 | 16:10 |
   | `public/media/build-ultra.jpg` | karta zestawu 3 | 16:10 |
   | `public/media/brand-landscape.jpg` | finalne CTA (tło) | 21:9 |


## Co wyszło w trakcie

- **`Wordmark` dostał prop `size`.** Logotyp z planszy ma 40px wersalik — w pasku
  nawigacji nie ma prawa się zmieścić. Prop jest addytywny z domyślnym `"lg"`,
  więc `/design-system` renderuje się bez zmiany.
- **Placeholder `ImageSlot` nie może zawierać tekstu.** Pierwsza wersja rysowała
  napis „4KPC” i kolidował on z chipem specyfikacji „4K” na karcie produktu
  (`getByText` znajdował dwa elementy). Znak jest teraz rysowany SVG.
- **Chipy specyfikacji nie są listą.** `<ul>` w karcie zagnieżdżał się w `<ul>`
  sekcji — rozmywało to strukturę dla czytnika ekranu i psuło liczenie
  `listitem` w testach sekcji. Chipy to zwykłe `div`-y.
- **Cena z `Intl` używa twardej spacji (U+00A0)**, a Testing Library normalizuje
  ją do zwykłej — porównanie z literałem nigdy nie trafiało. Testy kart
  dopasowują cenę wzorcem.
- **`pl-PL` domyślnie nie grupuje czterocyfrowych kwot** („9499 zł”), stąd
  `useGrouping: "always"` w `formatPricePln`.
- **`BuildId` jest brandowany**, więc nie da się go porównać z literałem
  `"build-prime"` — wyróżniony zestaw wybieramy po `tier === "performance"`.
- **Tytuł `/design-system` skracam do „Design System v1.0”** — `template: "%s — 4KPC"`
  w layoucie dopisywał markę drugi raz („4KPC — Design System v1.0 — 4KPC”).

## Weryfikacja (stan na koniec)

- `npm test` — 85 testów, 22 pliki, wszystko na zielono.
- `npx tsc --noEmit`, `npm run lint` — czysto.
- Na żywo (`localhost:3000`): brak poziomego scrolla przy 375 / 768 / 1440 px,
  nagłówek `position: sticky`, menu mobilne otwiera się i zamyka, `h1` renderuje
  się w Space Grotesk 64/700, karty mają `radius 12px` i `shadow-level-1`,
  gradient hero stoi na `#102A46`. `/design-system` nietknięty (10 sekcji).
