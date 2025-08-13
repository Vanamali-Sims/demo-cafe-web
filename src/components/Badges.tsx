const items = [
  { title: "Sustainably Sourced" },
  { title: "Quality-Focused" },
  { title: "B Corp Inspired" },
  { title: "Transparently Traded" },
];

export default function Badges() {
  return (
    <section className="border-y bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 overflow-hidden">
        <div className="flex items-center gap-6 sm:gap-10 animate-[marquee_18s_linear_infinite] whitespace-nowrap">
          {[...items, ...items].map((i, idx) => (
            <div
              key={`${i.title}-${idx}`}
              className="text-xs sm:text-sm font-semibold text-espresso opacity-80 hover:opacity-100 active:opacity-100 transition-opacity"
            >
              {i.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


