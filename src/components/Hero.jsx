// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Colonne texte */}
          <div>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-200">
              Portfolio
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Bienvenue sur mon{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Développeur web passionné par la création d’interfaces modernes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projets"
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-base font-semibold text-white shadow-sm ring-1 ring-transparent hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900/20"
              >
                Télécharger mon cv
              </a>
            </div>

            {/* À propos intégré dans le Hero */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900">À propos</h2>
              <p className="mt-4 max-w-prose text-lg leading-relaxed text-gray-600">
                Bienvenue sur mon portfolio ! Je suis passionné par la création
                d’expériences numériques élégantes et performantes, adaptées à
                tous les appareils.
              </p>
            </div>
          </div>

          {/* Colonne visuelle (remplace par une image/illustration si tu veux) */}
          <div className="relative">
            <div
              className="aspect-[4/3] w-full rounded-3xl bg-gray-100 shadow-inner lg:aspect-square"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Petites touches décoratives */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-indigo-100 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-fuchsia-100 blur-3xl" />
    </section>
  );
}
