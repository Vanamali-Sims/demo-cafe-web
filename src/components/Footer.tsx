import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F1D66] text-white mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-lg font-bold">Bitter & Bloom</h3>
          <p className="mt-3 text-white/80 text-sm max-w-xs">
            From soil to soul. Specialty coffee from partners around the world,
            roasted and brewed in Fitzroy.
          </p>
          <p className="mt-3 text-white/60 text-sm">213 Gertrude St, Fitzroy</p>
        </div>
        <div>
          <h4 className="font-semibold">Shop</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><Link href="#coffees">Coffee</Link></li>
            <li><Link href="#subscriptions">Subscriptions</Link></li>
            <li><Link href="#guides">Brew Guides</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">About</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><Link href="#story">Our Story</Link></li>
            <li><Link href="#impact">Sustainability</Link></li>
            <li><Link href="#events">Events</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Wholesale</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><Link href="#wholesale">Become a partner</Link></li>
            <li><Link href="#training">Training Center</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Bitter & Bloom</p>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <Link href="#privacy">Privacy Policy</Link>
            <Link href="#terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


