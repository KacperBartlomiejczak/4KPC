"use client";

import { useState, type FormEvent } from "react";

import { Button } from "../design-system/Button";
import { InputField } from "../design-system/InputField";
import { buildBriefSchema, type BuildBrief } from "@/types/lead";

/**
 * Brief z hero. Model jeszcze nie jest podpięty, więc formularz nic nie wysyła —
 * waliduje wejście tym samym schematem, który przyjmie Server Action, i mówi
 * wprost, na czym stoimy. Świadomie bez udawania, że coś się zapisało.
 */
export function BuildBriefForm() {
  const [prompt, setPrompt] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [brief, setBrief] = useState<BuildBrief | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = buildBriefSchema.safeParse({ prompt });

    if (!result.success) {
      setErrorMessage(
        result.error.issues[0]?.message ?? "Sprawdź wpisany opis.",
      );
      return;
    }

    setErrorMessage(null);
    setBrief(result.data);
  }

  if (brief) {
    return (
      <div className="flex flex-col gap-4">
        <p className="font-display text-title text-neutral-950">
          Mamy Twój opis
        </p>
        <p className="rounded-lg border border-neutral-200 bg-neutral-100 px-4 py-3 text-body-s text-neutral-800">
          {`„${brief.prompt}”`}
        </p>
        <p className="text-body-s text-neutral-600">
          Asystent AI jest w budowie. Zanim ruszy, zobacz zestawy złożone pod
          podobne potrzeby.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#zestawy"
            className="inline-flex items-center rounded-full bg-cta px-5 py-2.5 text-label-l text-white shadow-level-1 transition-colors duration-component-min ease-4kpc hover:bg-cta-hover active:bg-cta-pressed"
          >
            Zobacz zestawy
          </a>
          <Button variant="ghost" onClick={() => setBrief(null)}>
            Zmień opis
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <InputField
        label="Opisz, do czego potrzebujesz komputera"
        placeholder="Gram w 4K i montuję filmy, budżet do 9000 zł"
        value={prompt}
        onChange={(event) => setPrompt(event.target.value)}
        state={errorMessage ? "error" : "default"}
        errorMessage={errorMessage ?? undefined}
        maxLength={500}
      />

      <Button type="submit" className="w-full sm:w-auto sm:self-start">
        Dobierz zestaw
      </Button>

      <p className="text-body-s text-neutral-600">
        Bez zakładania konta. Opis zostaje na Twoim urządzeniu.
      </p>
    </form>
  );
}
