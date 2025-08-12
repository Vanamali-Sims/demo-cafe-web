
import Image from "next/image";
import cofeee2 from "../../assets/cofeee2.webp";
import coffee2 from "../../assets/coffee2.webp";
import snacks1 from "../../assets/snacks1.webp";

type Coffee = {
  title: string;
  origin: string;
  notes: string;
  roast: string;
  price: string;
  image: any;
};

const coffees: Coffee[] = [
  {
    title: "Cold Hearted",
    origin: "Limited-Release Blend | Ethiopia + Colombia",
    notes: "sweet tea | cherry | cacao nibs",
    roast: "medium",
    price: "$24",
    image: cofeee2,
  },
  {
    title: "Idido",
    origin: "Single-Origin | Yirgacheffe, Ethiopia",
    notes: "floral | melon | citrus",
    roast: "light",
    price: "$23",
    image: coffee2,
  },
  {
    title: "Kamavindi",
    origin: "Single-Farm Lot | Embu, Kenya",
    notes: "citrus | blackberry | sweet",
    roast: "light",
    price: "$31",
    image: snacks1,
  },
];

import FadeIn from "./FadeIn";

export default function Coffees() {
  return (
    <section id="coffees" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-extrabold text-espresso">Our Coffees</h2>
          <a href="#shop-all" className="btn-outline">
            Shop All Coffees
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {coffees.map((c, idx) => (
            <FadeIn key={c.title} delayMs={idx * 100}>
            <article
              key={c.title}
              className="group border rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5 will-change-transform"
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={c.image} alt={c.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-espresso/70">{c.origin}</p>
                <h3 className="mt-1 text-xl font-bold text-espresso">{c.title}</h3>
                <p className="mt-1 text-sm text-espresso/70">{c.notes}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-espresso">{c.price}</span>
                  <button className="btn-cta text-sm transition-colors group-hover:translate-x-0.5">
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}


