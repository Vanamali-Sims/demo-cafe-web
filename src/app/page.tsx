import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Badges from "@/components/Badges";
import Favorites from "@/components/Favorites";
import Testimonials from "@/components/Testimonials";
import Subscribe from "@/components/Subscribe";
import Coffees from "@/components/Coffees";
import Story from "@/components/Story";

export default function Home() {
  return (
    <div className="bg-white text-[#0F1D66]">
      <Header />
      <main>
        <Hero />
        <Badges />
        <Favorites />
        <Testimonials />
        <Subscribe />
        <Coffees />
        <Story />
      </main>
      <Footer />
    </div>
  );
}
