
import Image from "next/image";
import FadeIn from "./FadeIn";
import coffee1 from "../../assets/coffee1.webp";
import coffee2 from "../../assets/coffee2.webp";
import mocha1 from "../../assets/mocha1.webp";

type Card = {
  title: string;
  price: string;
  notes: string;
  image: any;
};

const cards: Card[] = [
  {
    title: "Equilibrium",
    price: "$24",
    notes: "stone fruit | tangerine | dynamic",
    image: coffee1,
  },
  {
    title: "Idido",
    price: "$23",
    notes: "floral | melon | citrus",
    image: coffee2,
  },
  {
    title: "Subscription – Two Bags",
    price: "$37",
    notes: "Best-selling rotating single origins",
    image: mocha1,
  },
];

 

export default function Favorites() {
  return (
    <section className="bg-white" id="favorites">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-espresso text-center">
          Bitter & Bloom Favorites
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((c) => (
            <FadeIn key={c.title}>
              <article
              key={c.title}
              className="group rounded-xl overflow-hidden border shadow-sm transition-shadow hover:shadow-lg focus-within:shadow-lg"
            >
              <div className="relative h-56 overflow-hidden">
                <Image src={c.image} alt={c.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-espresso">{c.title}</h3>
                <p className="text-sm text-espresso/70 mt-1">{c.notes}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-espresso">{c.price}</span>
                  <button className="btn-cta text-sm group-hover:translate-x-0.5 will-change-transform">
                    Learn more
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


