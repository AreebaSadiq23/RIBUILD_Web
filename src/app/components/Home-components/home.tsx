import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./header";

export default function HomeSection() {
  return (
    <>
      <Header />

      {/* ===== Home Section ===== */}
      <section className="relative h-[650px] w-full overflow-hidden -mt-1 z-10">
        {/* Background Image + Overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/home.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-20 text-white mt-10">
          <p className="text-sm uppercase border-l-4 border-white pl-4 mb-4 ml-20 roboto-font">
            Collaborate With Us
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold mb-4 max-w-2xl leading-tight ml-20 exo-font">
            We Build Your Dream With Passion
          </h1>
          <p className="text-base md:text-lg mb-8 max-w-xl ml-20 roboto-font">
            We conduct all business with the highest standards of honesty and fairness, we can be trusted for consultation.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-6 ml-20">
            <Button className="text-base px-6 py-3 bg-orange-600 text-white">
              Get Quote
            </Button>

            <button className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <Image src="/icons/play-button.png" alt="Play" width={20} height={20} />
              </div>
              <span className="text-white text-base">Play Now</span>
            </button>
          </div>

          {/* Arrows */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center hover:bg-white">
              <Image src="/icons/left-arrow.png" alt="Left" width={16} height={16} />
            </div>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center hover:bg-white">
              <Image src="/icons/right-arrow.png" alt="Right" width={16} height={16} />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}