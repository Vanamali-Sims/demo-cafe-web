export default function Subscribe() {
  return (
    <section id="subscribe" className="bg-latte text-espresso">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Stay in the loop</h2>
          <p className="mt-3 text-espresso/80">
            Join our newsletter for seasonal drops, brew guides and special offers.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3" action="#" method="post">
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full sm:w-auto flex-1 rounded-md border border-espresso/20 bg-white px-4 py-2 placeholder:text-espresso/50 focus:outline-none focus:ring-2 focus:ring-espresso/40"
            />
            <button type="submit" className="btn-primary self-start sm:self-auto">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


