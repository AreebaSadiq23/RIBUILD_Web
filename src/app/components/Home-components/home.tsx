import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./header";
import Link from "next/link";
export default function HomeSection() {
  return (
    <>
      <Header />

      {/* ===== Home Section ===== */}
      <section className="relative min-h-[350px] sm:min-h-[400px] md:h-[650px] w-full overflow-hidden mt-10 sm:mt-16 md:mt-0 z-10 flex items-center">
        {/* Background Image + Overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/home.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-2 sm:px-4 md:px-20 text-white mt-4 sm:mt-6 md:mt-10 w-full max-w-5xl mx-auto">
          <p className="text-[10px] sm:text-xs md:text-sm uppercase border-l-4 border-white pl-2 sm:pl-3 md:pl-4 mb-2 sm:mb-3 md:mb-4 ml-0 sm:ml-4 md:ml-20 roboto-font">
            Collaborate With Us
          </p>
          <h1 className="text-lg sm:text-2xl md:text-6xl font-semibold mb-2 sm:mb-3 md:mb-4 max-w-xs sm:max-w-xl md:max-w-2xl leading-tight ml-0 sm:ml-4 md:ml-20 exo-font">
            We Build Your Dream With Passion
          </h1>
          <p className="text-[10px] sm:text-xs md:text-lg mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-xl ml-0 sm:ml-4 md:ml-20 roboto-font">
            We conduct all business with the highest standards of honesty and fairness, we can be trusted for consultation.
          </p>
          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 ml-0 sm:ml-4 md:ml-20">
            <Link href="/error">
              <Button className="text-xs sm:text-base px-3 cursor-pointer sm:px-4 md:px-6 py-2 sm:py-3 bg-orange-600 text-white">
                Get Quote
              </Button>
            </Link>
            
            <button className="flex items-center gap-2 mt-2 sm:mt-0">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center">
                <Image src="/icons/play-button.png" alt="Play" width={16} height={16} />
              </div>
              <span className="text-white text-xs sm:text-base">Play Now</span>
            </button>
          </div>

          {/* Arrows */}
          <div className="absolute left-1 top-1/2 transform -translate-y-1/2 hidden xs:block sm:left-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/70 flex items-center justify-center hover:bg-white">
              <Image src="/icons/left-arrow.png" alt="Left" width={14} height={14} />
            </div>
          </div>
          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 hidden xs:block sm:right-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/70 flex items-center justify-center hover:bg-white">
              <Image src="/icons/right-arrow.png" alt="Right" width={14} height={14} />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}