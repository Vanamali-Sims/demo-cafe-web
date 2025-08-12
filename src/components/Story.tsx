import FadeIn from "./FadeIn";
import Image from "next/image";
import coffeeshop2 from "../../assets/coffeeshop2.webp";

export default function Story() {
  return (
    <section id="story" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-start">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-extrabold text-espresso">
            Bitter & Bloom — From soil to soul
          </h2>
          <div className="mt-6 space-y-5 text-espresso/90 leading-relaxed">
            <p>
              Founded in 2017 by Ava Larkins, a former landscape architect, Bitter &
              Bloom is a Fitzroy coffee space that treats cultivation and brewing as
              two sides of the same craft.
            </p>
            <p>
              Our house blend, Verdant No. 3, marries beans from a regenerative farm
              in Sidamo, Ethiopia with a women-owned collective in Huehuetenango,
              Guatemala—tasting of white peach, cocoa nib and a whisper of
              eucalyptus.
            </p>
            <p>
              Sundays are for AeroPress throwdowns. Cold brew is served in wine
              glasses. At 4pm the brass bell calls the last pour. Bring a jar of
              spent grounds and swap it for a jar of worm compost—your plants will
              love you.
            </p>
            <p>
              Find us at 213 Gertrude Street. Hidden behind the bar, a tiny
              greenhouse courtyard seats eight among jasmine and ferns.
            </p>
          </div>
        </FadeIn>
        <FadeIn delayMs={150}>
          <div className="relative w-full h-72 md:h-full min-h-72">
            <Image src={coffeeshop2} alt="Hidden courtyard" fill className="rounded-2xl shadow-md object-cover" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


