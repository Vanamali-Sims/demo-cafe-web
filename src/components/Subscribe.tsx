export default function Subscribe() {
  const items = [
    {
      title: "Single-Origin Subscription - Two Bags",
      price: "$37",
      desc: "Rotating coffees curated by our roasters.",
    },
    {
      title: "Office Coffee Subscription",
      price: "$99",
      desc: "5 lb bags to brighten the breakroom.",
    },
    {
      title: "Blend Box Subscription",
      price: "$33.50",
      desc: "Taste every best-selling Bitter & Bloom blend.",
    },
  ];

  return (
    <section id="subscriptions" className="bg-[#F4D1C4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F1D66]">Subscribe & Save</h2>
          <p className="mt-4 text-[#0F1D66]/80 max-w-prose">
            The highest-quality coffee from our network of producer partners, roasted to perfection, delivered on your schedule.
          </p>
          <ol className="mt-6 space-y-4 text-[#0F1D66] font-semibold">
            <li>01 Choose your coffee</li>
            <li>02 Select delivery frequency</li>
            <li>03 Enjoy fresh coffee on repeat!</li>
          </ol>
          <a href="#start-subscription" className="mt-6 inline-block rounded-full bg-[#0F1D66] text-white px-6 py-3 font-semibold hover:bg-[#122891] transition-colors">
            Start a subscription
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl bg-white p-6 border shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-[#0F1D66] font-bold">{i.title}</h3>
                  <p className="text-[#0F1D66]/70 text-sm mt-1">{i.desc}</p>
                </div>
                <div className="text-[#0F1D66] font-extrabold">{i.price}</div>
              </div>
              <button className="mt-4 rounded-full bg-[#0F1D66] text-white px-4 py-2 text-sm font-semibold hover:bg-[#122891] transition-colors">
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


