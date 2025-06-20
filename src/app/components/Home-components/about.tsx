import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Check } from "feather-icons-react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight, faShareAlt, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => (
  <>
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-orange-600 hover:text-white transition">
      <FontAwesomeIcon icon={faInstagram} />
    </div>
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-orange-600 hover:text-white transition">
      <FontAwesomeIcon icon={faFacebookF} />
    </div>
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-orange-600 hover:text-white transition">
      <FontAwesomeIcon icon={faLinkedinIn} />
    </div>
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-orange-600 hover:text-white transition">
      <FontAwesomeIcon icon={faTwitter} />
    </div>
  </>
);

export default function About() {
  return (
    <>
      <section className="w-full bg-white py-10 sm:py-14 md:py-20 px-3 sm:px-6 md:px-20 flex flex-col md:flex-row gap-6 md:gap-10 items-center">
        {/* Left Images Stack */}
        <div className="flex w-full flex-col sm:flex-row items-start justify-center gap-4 sm:gap-6 p-3 sm:p-6 bg-cover bg-center" style={{ backgroundImage: 'url("/images/bg.png")' }}>
          {/* Left Image with Circular Play Icon */}
          <div className="w-full sm:w-[180px] md:w-[200px] h-[220px] sm:h-[260px] md:h-[280px] rounded-tl-[32px] md:rounded-tl-[48px] rounded-br-[32px] md:rounded-br-[48px] overflow-hidden relative mt-6 sm:mt-20 border-4 border-white">
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
          <div className="flex flex-row sm:flex-col gap-4 sm:gap-6">
            <div className="w-[100px] sm:w-[180px] md:w-[200px] h-[100px] sm:h-[180px] md:h-[200px] rounded-tl-[32px] md:rounded-tl-[48px] rounded-br-[32px] md:rounded-br-[48px] overflow-hidden relative border-4 border-white">
              <Image src="/images/img2.jpg" alt="Image 2" fill className="object-cover" />
            </div>
            <div className="w-[100px] sm:w-[180px] md:w-[200px] h-[100px] sm:h-[180px] md:h-[200px] rounded-bl-[32px] md:rounded-bl-[48px] rounded-tr-[32px] md:rounded-tr-[48px] overflow-hidden relative border-4 border-white">
              <Image src="/images/3.jpg" alt="Image 3" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full mt-8 md:mt-0">
          <p className="text-orange-600 font-semibold uppercase mb-4 exo-font">- About Us</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 exo-font">
            A Company To Change <br /> The world We&apos;re Driller <br /> Industrial
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 roboto-font text-sm sm:text-base">
            Proactively pontificate client-centered realtionships vis-a-vis process <br /> centric
            leadership skills Credibly maintain focoused internal<br /> or &quot;organic&quot;  source rather
            than vertical alignments.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
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
          <Button 
          className="bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
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
      {/* Latest Projects Section */}
      <section className="w-full bg-white py-10 sm:py-14 md:py-20 px-3 sm:px-6 md:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-12">
          <div>
            <p className="text-orange-600 font-semibold uppercase exo-font">- Latest Projects</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold exo-font">Our Recent Case Studies & <br /> Latest Success Stories</h2>
          </div>
          <p className="text-gray-600 max-w-md roboto-font mt-4 md:mt-0 text-left md:text-right">
            It&apos;s always a joy that the work I do has positively impacted<br />
            our client and that they are happy to share their experience.
          </p>
        </div>

        {/* CTA aligned to right */}
        <div className="flex justify-end">
          <button className="text-orange-600 flex items-center gap-2 font-semibold hover:underline">
            View & Explore Case Studies
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-6 mb-12 flex-wrap">
          {['All', 'Design', 'Development', 'Ideas', 'Technology'].map((item, i) => (
            <span
              key={i}
              className={`text-base font-medium cursor-pointer transition ${item === 'All'
                ? 'text-orange-600'
                : 'text-black hover:text-orange-600'
                }`}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl shadow hover:shadow-lg transition">
              {/* Image */}
              <div className="h-64 bg-gray-200 relative">
                <Image
                  src={`/projects/${(i % 6) + 1}.jpg`}
                  alt={`Project ${i + 1}`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </div>
                </div>
                {/* Residential Label on Hover */}
                <div className="absolute bottom-0 left-0 w-full text-left text-sm text-white bg-black py-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="text-lg font-semibold ml-4">
                    <h2>Residential</h2>
                    <h3>Home Construction</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Skill Section */}
      <section className="w-full bg-white py-10 sm:py-14 md:py-20 px-3 sm:px-6 md:px-20 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <p className="text-orange-600 font-semibold uppercase mb-2 exo-font">- Our Skill</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 exo-font">
            This Building Skill Member <br /> Meet ON Rent.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-10 roboto-font">
            If you are going to use a passage of lorem ipsum, you nee this be sure<br />
            there isn&apos;t anything embrassing hidden in the best middle if text .All<br />
            the lorem ipsum genertors.
          </p>

          {/* Skill Progress 1 */}
          <div className="mb-6">
            <div className="flex justify-between mb-1">
              <p className="text-base font-semibold text-black">+ Building Create Website</p>
              <span className="text-sm text-black font-medium">75%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded relative overflow-hidden">
              <div className="h-2 bg-orange-600 rounded" style={{ width: '75%' }}></div>
            </div>
          </div>

          {/* Skill Progress 2 */}
          <div>
            <div className="flex justify-between mb-1">
              <p className="text-base font-semibold text-black">+ Luxury Home</p>
              <span className="text-sm text-black font-medium">85%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded relative overflow-hidden">
              <div className="h-2 bg-orange-600 rounded" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>

        {/* Right Content - Square + Circle Image */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* Square Image with Orange Border */}
          <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] relative rounded-xl shadow-xl border-4 border-orange-600">
            <div className="w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/projects/8.jpg"
                alt="Skill Square"
                fill
                className="object-cover"
              />
            </div>

            {/* Circle Image Positioned at Bottom-Left */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] rounded-full border-4 border-white overflow-hidden shadow-lg z-10">
              <Image
                src="/projects/7.jpg"
                alt="Circle Skill"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </section>

      <section className="w-full bg-gray-100 py-10 sm:py-14 md:py-20 px-3 sm:px-6 md:px-20 text-center">
        {/* Section Heading */}
        <p className="text-orange-600 font-semibold uppercase exo-font mb-2">- Work People -</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold exo-font mb-8 sm:mb-12">Our Awesome Creative Best<br /> Team Members</h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {/* Card 1 */}
          <div className="relative bg-white rounded-2xl shadow overflow-hidden text-left w-full max-w-[280px]">
            <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] relative">
              <Image
                src="/images/1.jpg"
                alt="Person 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              <SocialIcons />
            </div>
            <div className="flex items-center justify-between px-4 py-4 border-t bg-gray-300">
              <div className="text-left">
                <h3 className="text-lg font-semibold exo-font">James Williams</h3>
                <p className="text-sm text-gray-600 roboto-font">Operations Manager</p>
              </div>
              <div className="w-9 h-9 bg-orange-600 text-white rounded-full flex items-center justify-center shadow">
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white rounded-2xl shadow overflow-hidden text-left w-full max-w-[280px]">
            <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] relative">
              <Image
                src="/images/2.jpg"
                alt="Person 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              <SocialIcons />
            </div>
            <div className="flex items-center justify-between px-4 py-4 border-t bg-gray-300">
              <div className="text-left">
                <h3 className="text-lg font-semibold exo-font">Anthony Notson</h3>
                <p className="text-sm text-gray-600 roboto-font">Prodcution Manager</p>
              </div>
              <div className="w-9 h-9 bg-orange-600 text-white rounded-full flex items-center justify-center shadow">
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white rounded-2xl shadow overflow-hidden text-left w-full max-w-[280px]">
            <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] relative">
              <Image
                src="/images/i3.jpg"
                alt="Person 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              <SocialIcons />
            </div>
            <div className="flex items-center justify-between px-4 py-4 border-t bg-gray-300">
              <div className="text-left">
                <h3 className="text-lg font-semibold exo-font">Joseph Crawford</h3>
                <p className="text-sm text-gray-600 roboto-font">Chief Marketing</p>
              </div>
              <div className="w-9 h-9 bg-orange-600 text-white rounded-full flex items-center justify-center shadow">
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}