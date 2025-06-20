import React from "react";
import Image from "next/image";


const Hero = () => {
  return (
    <div>
      <section
        className="relative text-white py-20 px-6 text-center md:text-left"
        style={{
          backgroundImage: "url('/images/home2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Decorative lines */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Left side decorations */}
          <div className="absolute top-0 left-0 w-full h-1 bg-orange-500/30"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-orange-500/30"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500/30"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-orange-500/30"></div>
          <div className="absolute top-1/2 left-0 w-1/3 h-0.5 bg-orange-500/20 transform -rotate-45"></div>

          {/* Right side decorations */}
          <div className="absolute top-1/3 right-0 w-1/4 h-0.5 bg-orange-500/20 transform rotate-45"></div>
          <div className="absolute top-1/4 right-10 w-20 h-0.5 bg-orange-500/20 transform rotate-12"></div>
          <div className="absolute bottom-1/3 right-5 w-16 h-0.5 bg-orange-500/20 transform -rotate-12"></div>
          <div className="absolute top-2/3 right-8 w-24 h-0.5 bg-orange-500/20 transform rotate-30"></div>
          <div className="absolute top-1/2 right-0 w-1/4 h-0.5 bg-orange-500/20 transform -rotate-30"></div>

          {/* Bottom right decorations */}
          <div className="absolute bottom-10 right-8 w-32 h-0.5 bg-orange-500/20 transform rotate-15"></div>
          <div className="absolute bottom-20 right-12 w-24 h-0.5 bg-orange-500/20 transform -rotate-20"></div>
          <div className="absolute bottom-16 right-4 w-20 h-0.5 bg-orange-500/20 transform rotate-45"></div>
          <div className="absolute bottom-24 right-16 w-28 h-0.5 bg-orange-500/20 transform -rotate-30"></div>
          <div className="absolute bottom-8 right-20 w-16 h-0.5 bg-orange-500/20 transform rotate-60"></div>

          {/* Center decorations */}
          <div className="absolute top-1/2 left-1/2 w-40 h-0.5 bg-orange-500/20 transform -translate-x-1/2 -translate-y-1/2 rotate-0"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-orange-500/20 transform -translate-x-1/2 -translate-y-1/2 rotate-90"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-orange-500/20 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-orange-500/20 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-orange-500/20 transform -translate-x-1/2 -translate-y-1/2 rotate-30"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-orange-500/20 transform -translate-x-1/2 -translate-y-1/2 -rotate-30"></div>

          {/* decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-20 h-0.5 bg-orange-500/15 transform rotate-15"></div>
          <div className="absolute top-3/4 left-1/3 w-24 h-0.5 bg-orange-500/15 transform -rotate-25"></div>
          <div className="absolute top-1/3 left-2/3 w-28 h-0.5 bg-orange-500/15 transform rotate-35"></div>
          <div className="absolute top-2/3 left-1/4 w-16 h-0.5 bg-orange-500/15 transform -rotate-40"></div>
          <div className="absolute top-1/4 left-3/4 w-20 h-0.5 bg-orange-500/15 transform rotate-50"></div>
          <div className="absolute top-3/4 left-2/3 w-24 h-0.5 bg-orange-500/15 transform -rotate-55"></div>

          {/* Small accent lines */}
          <div className="absolute top-1/6 left-1/6 w-12 h-0.5 bg-orange-500/10 transform rotate-20"></div>
          <div className="absolute top-5/6 left-5/6 w-12 h-0.5 bg-orange-500/10 transform -rotate-20"></div>
          <div className="absolute top-1/6 left-5/6 w-12 h-0.5 bg-orange-500/10 transform -rotate-20"></div>
          <div className="absolute top-5/6 left-1/6 w-12 h-0.5 bg-orange-500/10 transform rotate-20"></div>
        </div>
        <div className="max-w-3xl mx-auto md:mx-0 mt-20">
          <p className="text-orange-500 uppercase font-semibold mb-2 ml-28">
            Roofing Solutions
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 ml-24">
            We Provide Effective <br /> Roofing Service
          </h1>
          <p className="mb-6 text-lg ml-28">
            All the lorem ipsum generators on the internet tend to chunks
          </p>
          <button className="bg-orange-600 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold ml-28">
            Take Our Service
          </button>
        </div>
      </section>

      {/* section Two */}
      <section className="w-full px-4 py-16 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left side: Years of Experience Badge */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <div className="relative">

            {/* Top right square image */}
            <div className="absolute -top-10 -right-10 w-50 h-60 bg-gray-300 rounded-md overflow-hidden shadow-xl z-0">
              <Image
                src="/images/roof2.jpg"
                alt="Roofing Work"
                width={200}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main square image (Front) */}
            <div className="w-64 h-70 md:h-92 md:w-70 bg-gray-300 rounded-md relative z-10">
              <Image
                src="/images/roof.jpg"
                alt="Roofing Service"
                width={256}
                height={280}
                className="w-full h-full object-cover rounded-md"
              />

              {/* Experience Badge — bottom-right */}
              <div className="absolute -bottom-3 -right-32 mb-14 bg-[#15181b] border-8 border-white text-white p-4 shadow-lg z-20 flex items-center gap-3">
                <Image src="/logo/logo.png" alt="Logo" width={32} height={32} className="w-10 h-4 absolute bottom-2 right-2" />
                <div>
                  <p className="text-[14px] font-bold exo-font">25+</p>
                  <p className="text-sm opacity-70 exo-font mb-2">Years of Experiences</p>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* Right side: Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h4 className="text-orange-600 text-sm roboto-font">— Who We Are</h4>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 exo-font">
            Professional And Expert <br /> Roofing Contractor.
          </h1>
          <p className="text-gray-600 leading-relaxed roboto-font">
            Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Image src="/icons/award.png" alt="Award" width={24} height={24} className="w-6 h-6 [filter:invert(48%)_sepia(79%)_saturate(2476%)_hue-rotate(346deg)_brightness(118%)_contrast(119%)]" />
              <span className="font-medium text-md text-black roboto-font">Certified & Awards <br /> winner</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/icons/champion.png" alt="Quality" width={32} height={32} className="w-8 h-8 [filter:invert(48%)_sepia(79%)_saturate(2476%)_hue-rotate(346deg)_brightness(118%)_contrast(119%)]" />
              <span className="font-medium text-md text-black roboto-font">Best Quality <br /> Services</span>
            </div>
          </div>

          <p className="text-sm text-gray-700 roboto-font">
            Sponsoring and managing work visas parts becoming results <br /> for fulfill your dream wishes
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-orange-600 text-white px-6 py-2  hover:bg-orange-700 transition">
              Discover More
            </button>
            <div className="flex items-center gap-2">
              <Image src="/logo/sign.png" alt="Signature" width={80} height={40} className="h-10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;