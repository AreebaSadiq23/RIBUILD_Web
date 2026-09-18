import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Home } from "feather-icons-react";
import Image from "next/image";
import Header from "../components/Home-components/header";

export default function About() {
  return (
    <>
      <Header />
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <Button className="bg-orange-600 text-white px-6 py-3 flex items-center gap-2">
            <Home size={20} />
            <span>Home</span>
            <span className="text-white">•••</span>
            <span className="underline">About Us</span>
          </Button>
        </div>
      </div>

      {/* Rest of the sections */}
      <section className="w-full bg-white py-20 px-6 md:px-20 flex flex-col md:flex-row gap-10 items-center">
        {/* Left Images Stack */}
        <div className="flex w-full items-start justify-center gap-6 p-6 bg-cover bg-center" style={{ backgroundImage: 'url("/images/bg.png")' }}>
          {/* Left Image with Circular Play Icon */}
          <div className="w-[200px] h-[280px] rounded-tl-[48px] rounded-br-[48px] overflow-hidden relative mt-20 border-4 border-white">
            <Image src="/images/img4.jpg" alt="Image 1" fill className="object-cover" />

            {/* Play Icon Overlay - Circle */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right side: image 2 & 3 stacked vertically */}
          <div className="flex flex-col gap-6">
            <div className="w-[200px] h-[200px] rounded-tl-[48px] rounded-br-[48px] overflow-hidden relative border-4 border-white">
              <Image src="/images/img2.jpg" alt="Image 2" fill className="object-cover" />
            </div>
            <div className="w-[200px] h-[200px] rounded-bl-[48px] rounded-tr-[48px] overflow-hidden relative border-4 border-white">
              <Image src="/images/3.jpg" alt="Image 3" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full">
          <p className="text-orange-600 font-semibold uppercase mb-4 exo-font">- About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 exo-font">
            A Company To Change <br /> The world We&apos;re Driller <br /> Industrial
          </h2>
          <p className="text-gray-600 mb-8 roboto-font">
            Proactively pontificate client-centered realtionships vis-a-vis process <br /> centric
            leadership skills Credibly maintain focoused internal<br /> or &quot;organic&quot;  source rather
            than vertical alignments.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border-2 border-orange-600 rounded-full flex items-center justify-center text-orange-600">
                <Check size={22} />
              </div>
              <span className="roboto-font">Market Research</span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border-2 border-orange-600 rounded-full flex items-center justify-center text-orange-600">
                <Check size={22} />
              </div>
              <span className="roboto-font">Industrial manufacturing</span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border-2 border-orange-600 rounded-full flex items-center justify-center text-orange-600">
                <Check size={22} />
              </div>
              <span className="roboto-font">Pre-construction services</span>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border-2 border-orange-600 rounded-full flex items-center justify-center text-orange-600">
                <Check size={22} />
              </div>
              <span className="roboto-font">Building and construction</span>
            </div>
          </div>

          {/* About Us Button */}
          <Button className="bg-orange-600 text-white px-6 py-3">
            About Us
          </Button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="w-full py-20 px-6 md:px-20 text-center">
        {/* Top Text + Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-left mb-6 md:mb-0">
            <p className="text-orange-600 font-semibold uppercase exo-font">- What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold exo-font">
              Fully Integrated <br />Construction Service
            </h2>
          </div>
          <Button className="bg-orange-600 text-white px-6 py-3 roboto-font">More About Us</Button>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="w-12 h-12 mb-4 text-orange-600">
              <Image src="/icons/card1.png" alt="Check" width={32} height={32} className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 exo-font">
              Interior Remodeling<br /> Transform Spaces.
            </h3>
            <p className="text-gray-500 text-sm roboto-font">
              There are many variations of passages<br /> of Lorem Ipsum available...
            </p>
          </div>

          {/* Card 2 - Center Black */}
          <div className="bg-[#15181B] text-white rounded-2xl p-6 shadow-lg">
            <div className="w-12 h-12 mb-4 text-orange-600">
            </div>
            <h3 className="text-xl font-semibold mb-2 exo-font">
              Efficient Plumbing Services:<br /> Flow Mastery
            </h3>
            <p className="text-gray-300 text-sm mb-4 roboto-font">
              There are many variations of passages of Lorem <br />
              Ipsum available. At its heart, we believe design is about usability deserunt molitia.
            </p>
            <Button variant="ghost" className="text-white flex items-center gap-2">
              View Details <ArrowRight size={16} />
            </Button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="w-12 h-12 mb-4 text-orange-600">
              <Image src="/icons/card2.png" alt="Check" width={32} height={32} className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 exo-font">
              Roofing Solutions: Elevated<br /> Excellence
            </h3>
            <p className="text-gray-600 text-sm roboto-font">
              There are many variations of passages of Lorem Ipsum available...
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section className="w-full bg-[#15181B] text-white py-16 px-6 md:px-20">
        <div className="max-w-fit mx-auto flex flex-wrap justify-center items-center text-center gap-6 md:gap-20">
          {/* Stat 1 */}
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-3xl font-bold exo-font">400+</h3>
              <p className="text-sm mt-1 exo-font">Drilling Fields</p>
            </div>
          </div>

          <span className="hidden md:inline text-gray-500 text-4xl font-light">|</span>

          {/* Stat 2 */}
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-3xl font-bold exo-font">290+</h3>
              <p className="text-sm mt-1 exo-font">Expert Workers</p>
            </div>
          </div>

          <span className="hidden md:inline text-gray-500 text-4xl font-light">|</span>

          {/* Stat 3 */}
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-3xl font-bold exo-font">35+</h3>
              <p className="text-sm mt-1 exo-font">Award Winner</p>
            </div>
          </div>

          <span className="hidden md:inline text-gray-500 text-4xl font-light">|</span>

          {/* Stat 4 */}
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-3xl font-bold exo-font">25+</h3>
              <p className="text-sm mt-1 exo-font">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}