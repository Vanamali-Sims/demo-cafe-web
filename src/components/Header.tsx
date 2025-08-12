"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Shop" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/learn", label: "Learn" },
  { href: "/wholesale", label: "Wholesale" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-espresso text-latte">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold tracking-wide text-lg">
            Bitter & Bloom
          </Link>
          <nav className="hidden md:flex items-center gap-2 text-sm font-semibold">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md transition-colors hover:bg-latte/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-latte"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="px-3 py-2 rounded-md transition-colors hover:bg-latte/10 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-latte"
          >
            Login
          </Link>
          <a href="#coffees" className="rounded-full bg-sage/90 text-espresso px-4 py-2 text-sm font-semibold hover:bg-peach transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-latte">
            Find your fave
          </a>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-latte/10 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-latte/10">
          <nav className="px-4 py-4 flex flex-col gap-3 text-sm font-semibold">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/login" className="py-2" onClick={() => setOpen(false)}>
              Login
            </Link>
            <button className="mt-2 self-start rounded-full bg-sage/90 text-espresso px-4 py-2 text-sm font-semibold hover:bg-peach">
              Find your fave
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}


