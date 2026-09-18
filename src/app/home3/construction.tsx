import React from "react";
import Image from "next/image";

export default function ConstructionPage() {
  return (
    <div className="w-screen min-h-screen bg-[#0d0d0d] text-white font-sans relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-10">

          {/* LEFT COLUMN */}
          <div>
            <h1 className="text-orange-500">- Services</h1>
            <h2 className="text-4xl font-bold leading-tight mb-10 exo-font">
              The Essence Of Building <br /> Construction Design
            </h2>

            {/* Services List */}
            <div className="space-y-10 relative exo-font">
              {[{
                number: "01",
                title: "Building Renovation",
                tag: "Project Planning"
              }, {
                number: "02",
                title: "Industrial Structure",
                tag: "Hydro Structure"
              }, {
                number: "03",
                title: "Interior Design",
                tag: "Interior Planning"
              }].map((item, index) => (
                <div className="flex items-start space-x-5" key={index}>
                  <p className="text-3xl font-bold text-white/30">{item.number}</p>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-1">{item.tag}</p>
                    <p className="text-xl font-semibold">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col justify-start">
            <p className="text-white/70 text-sm max-w-[400px] mb-20 mt-8">
              Our construction expertise spans from residential renovations to industrial projects. We combine innovative design with practical engineering solutions to create structures that stand the test of time while meeting modern standards of efficiency and sustainability.
            </p>
            <div className="relative flex justify-center items-center mt-20">
              <div className="absolute w-[150px] h-[200px] bg-orange-500 rotate-[10deg] shadow-xl" />
              <div className="relative w-[150px] h-[200px] rotate-[2deg] shadow-lg z-10 overflow-hidden">
                <Image
                  src="/images/cons1.jpg"
                  alt="Construction Project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BACKGROUND CONSTRUCTION TEXT */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <h1 className="text-[10rem] font-black text-white/5 tracking-tight">
            CONSTRUCTION
          </h1>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-2 gap-10 mt-40 relative z-10 items-center">
          {/* Left Image Block */}
          <div className="h-[200px] relative overflow-hidden">
            <Image
              src="/images/cons2.jpg"
              alt="Factory Upgrade"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Text Block */}
          <div>
            <h3 className="text-2xl font-bold mb-4 exo-font">Upgrade Your Factory Performance</h3>
            <p className="text-sm text-gray-400 mb-6 roboto-font">
              We specialize in factory upgrades and optimization. Our approach is performance-driven with attention to cost-efficiency, safety, and long-term benefits.
            </p>
            <div className="grid grid-cols-2 gap-4 text-white/50 text-sm roboto-font">
              <div>Metal Framework</div>
              <div>Corporate Building</div>
              <div>Project Planning</div>
              <div>Budget Planning</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
