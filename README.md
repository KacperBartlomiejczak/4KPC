# 4KPC

Aplikacja, która pomaga dobrać komputer pod konkretne potrzeby, budżet
i zastosowanie — przez rozmowę z asystentem AI albo przez filtry.

## Uruchomienie

```bash
npm install
npm run dev
```

Strona startuje na [http://localhost:3000](http://localhost:3000).

## Trasy

| Trasa | Co to jest |
| --- | --- |
| `/` | landing page — hero z briefem, podzespoły, gotowe zestawy, asystent AI |
| `/design-system` | plansza design systemu v1.0, odwzorowanie `design/design-system.png` |

## Skrypty

| Komenda | Co robi |
| --- | --- |
| `npm run dev` | serwer deweloperski |
| `npm run build` | build produkcyjny |
| `npm test` | testy (Vitest + Testing Library) |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | kontrola typów |

## Struktura

```
src/app/                  trasy (App Router) — wyłącznie rozkład sekcji
src/components/landing/   sekcje strony głównej
src/components/design-system/  komponenty i tokeny design systemu
src/types/                domena: zod schema + `z.infer` (zero `any`)
src/lib/                  drobne funkcje pomocnicze (formatowanie)
public/media/             zdjęcia produktowe — patrz niżej
```

## Zdjęcia

Sekcje używają komponentu `ImageSlot`: jeśli plik istnieje w `public/`,
renderuje się przez `next/image`; jeśli nie — w jego miejsce wchodzi gradient
na tokenach design systemu. Nic nie trzeba przełączać, wystarczy wrzucić plik.

| Plik | Gdzie | Proporcja |
| --- | --- | --- |
| `public/media/hero-case.jpg` | hero | 4:5 |
| `public/media/product-gpu.jpg` | karta podzespołu | 16:10 |
| `public/media/product-cpu.jpg` | karta podzespołu | 16:10 |
| `public/media/product-ram.jpg` | karta podzespołu | 16:10 |
| `public/media/product-storage.jpg` | karta podzespołu | 16:10 |
| `public/media/build-starter.jpg` | karta zestawu | 16:10 |
| `public/media/build-performance.jpg` | karta zestawu | 16:10 |
| `public/media/build-ultra.jpg` | karta zestawu | 16:10 |
| `public/media/brand-landscape.jpg` | tło finalnego CTA | 21:9 |

## Zasady pracy

Konwencje projektu (modelowanie danych, kolejność zod → typ → test →
implementacja, zero `any`) opisuje [`.AGENTS.md`](.AGENTS.md).
Plany kolejnych funkcji leżą w [`prompts/`](prompts).
