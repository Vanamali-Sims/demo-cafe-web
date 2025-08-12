"use client";

import Image from "next/image";
import coffeeshop1 from "../../assets/coffeeshop1.webp";
import { useEffect, useRef } from "react";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;
    const handler = () => {
      const y = window.scrollY;
      el.style.transform = `translateY(${Math.min(y * 0.1, 30)}px)`;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <section className="relative isolate overflow-hidden bg-[#0F1D66] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex items-center justify-between pb-8">
          <div className="max-w-2xl">
            <p className="uppercase tracking-widest text-sm text-white/70">It’s officially</p>
            <h1 className="mt-2 text-4xl sm:text-6xl font-extrabold leading-tight">
              August on Ice
            </h1>
            <p className="mt-4 text-white/80 max-w-lg">
              Seasonal cold brews, sparkling cascara and fruit-forward single
              origins—chilled and ready for Melbourne’s bright days.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#coffees" className="rounded-full bg-white text-[#0F1D66] px-5 py-3 font-semibold hover:bg-white/90 transition-colors">
                Shop Cold Brews
              </a>
              <a href="#quiz" className="rounded-full border border-white/30 px-5 py-3 font-semibold hover:bg-white/10 transition-colors">
                Find your fave
              </a>
            </div>
          </div>
          <div ref={parallaxRef} className="hidden md:block relative w-[420px] h-[320px] rounded-lg overflow-hidden shadow-lg">
            <Image src={coffeeshop1} alt="Bitter & Bloom cafe" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}


