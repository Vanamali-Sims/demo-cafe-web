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
    <section id="subscriptions" className="bg-peach/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-espresso">Subscribe & Save</h2>
          <p className="mt-4 text-espresso/80 max-w-prose">
            The highest-quality coffee from our network of producer partners, roasted to perfection, delivered on your schedule.
          </p>
          <ol className="mt-6 space-y-4 text-espresso font-semibold">
            <li>01 Choose your coffee</li>
            <li>02 Select delivery frequency</li>
            <li>03 Enjoy fresh coffee on repeat!</li>
          </ol>
          <a href="#start-subscription" className="mt-6 inline-block btn-cta">
            Start a subscription
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl bg-latte p-6 border border-espresso/10 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-espresso font-bold">{i.title}</h3>
                  <p className="text-espresso/70 text-sm mt-1">{i.desc}</p>
                </div>
                <div className="text-espresso font-extrabold">{i.price}</div>
              </div>
              <button className="mt-4 btn-cta text-sm">
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


