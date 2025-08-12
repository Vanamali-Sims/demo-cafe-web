type Testimonial = {
  quote: string;
  author: string;
  product: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I've been a single origin subscriber for nearly a decade and still love the variety and complexity.",
    author: "Johnny Flapjacks",
    product: "Single-Origin Subscription - Two Bags",
  },
  {
    quote:
      "Smoothest coffee—Hologram is my weekday ritual. Fruity and chocolatey in one cup.",
    author: "DMF",
    product: "Hologram",
  },
  {
    quote:
      "Cold brew on tap in wine glasses? Say less. This place makes winter feel like summer.",
    author: "Kaya",
    product: "Seasonal Cold Brew",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#A2A1E8]" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F1D66] text-center">
          What our customers are saying
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="rounded-2xl bg-white/60 p-6 shadow-sm border border-[#0F1D66]/10 transition-transform hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-[#0F1D66] font-medium">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-[#0F1D66]/70">
                {t.author} · {t.product}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}


