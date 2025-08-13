import React from "react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Section Hero */}
      <Hero />

      {/* Section À propos */}
      <section className="max-w-6xl mx-auto px-4 py-16 @container">
        <div className="text-center @md:text-left">
          <h2 className="text-3xl font-extrabold mb-6 @md:text-4xl">
            À propos
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto @md:mx-0">
            Bienvenue sur mon portfolio ! Je suis passionné par la création
            d’expériences numériques élégantes et performantes, adaptées à tous
            les appareils.
          </p>
        </div>
      </section>
    </div>
  );
}
