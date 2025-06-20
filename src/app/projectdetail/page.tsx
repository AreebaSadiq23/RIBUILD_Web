import { Button } from "@/components/ui/button";
import { Home } from "feather-icons-react";
import Footer from "../servicesdetails/footer";
import Image from "next/image";
import Header from "../components/Home-components/header";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faUserTie,
  faCalendarAlt,
  faLink,
  faChevronLeft,
  faChevronRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Page() {
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
          <h1 className="text-5xl font-bold mb-6">Project Details</h1>
          <Button className="bg-orange-600 text-white px-6 py-3 flex items-center gap-2 ml-10">
            <Home size={20} />
            <span>Home</span>
            <span className="text-white">•••</span>
            <span className="underline">Project Details</span>
          </Button>
        </div>
      </div>

      {/* Main Image with Arrows */}
      <div className="relative w-full max-w-5xl mx-auto mt-[80px] z-20">
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/roof.jpg"
            alt="Project Main"
            fill
            className="object-cover"
            priority
          />
          {/* Left Arrow */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-100 z-10">
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </button>
          {/* Right Arrow */}
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-100 z-10">
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </button>
        </div>
        {/* Project Info Card (overlapping image) */}
        <div className="absolute right-0 translate-y-[-20%] w-full sm:w-[340px] bg-white rounded-xl shadow-xl p-6 z-30 border border-gray-100" style={{boxShadow: "0 8px 32px rgba(0,0,0,0.08)"}}>
          <h3 className="text-lg font-semibold mb-4 p-2 bg-orange-600 text-white text-center exo-font">Project Info</h3>
          <div className="space-y-0 text-sm">
            {/* Client */}
            <div className="mb-2">
              <div className="flex items-center gap-2 mb-1 roboto-font"><FontAwesomeIcon icon={faUserTie} className="text-orange-600" /> <span className="font-medium">Client</span></div>
              <div className="font-semibold text-gray-800 pl-7 roboto-font">Ribuild Construction</div>
            </div>
            <div className="border-b border-gray-200 mb-2" />
            {/* Category */}
            <div className="mb-2">
              <div className="flex items-center gap-2 mb-1 roboto-font"><FontAwesomeIcon icon={faTags} className="text-orange-600" /> <span className="font-medium">Category</span></div>
              <div className="font-semibold text-gray-800 pl-7 roboto-font">Construction Agency</div>
            </div>
            <div className="border-b border-gray-200 mb-2" />
            {/* Start Date */}
            <div className="mb-2">
              <div className="flex items-center gap-2 mb-1 roboto-font"><FontAwesomeIcon icon={faCalendarAlt} className="text-orange-600" /> <span className="font-medium">Start Date</span></div>
              <div className="font-semibold text-gray-800 pl-7 roboto-font">07 January 2024</div>
            </div>
            <div className="border-b border-gray-200 mb-2" />
            {/* End Date */}
            <div className="mb-2">
              <div className="flex items-center gap-2 mb-1 roboto-font"><FontAwesomeIcon icon={faCalendarAlt} className="text-orange-600" /> <span className="font-medium">End Date</span></div>
              <div className="font-semibold text-gray-800 pl-7 roboto-font">03 May 2024</div>
            </div>
            <div className="border-b border-gray-200 mb-2" />
            {/* Website */}
            <div className="mb-2">
              <div className="flex items-center gap-2 mb-1 roboto-font"><FontAwesomeIcon icon={faLink} className="text-orange-600" /> <span className="font-medium">Website</span></div>
              <div className="font-semibold text-blue-600 underline pl-7 roboto-font"><a href="https://ribers.com" target="_blank" rel="noopener noreferrer">ribers.com</a></div>
            </div>
          </div>
          <div className="mt-6">
            <span className="font-semibold text-gray-700 exo-font">Share:</span>
            <div className="flex gap-3 mt-2">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-black hover:text-white transition"><FontAwesomeIcon icon={faXTwitter} /></a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-700 hover:text-white transition"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gradient-to-tr from-pink-500 to-yellow-500 hover:text-white transition"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 pt-32 pb-16 px-4 md:px-0 relative z-10">
        {/* Left: Project Summary */}
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold mb-4 exo-font">Project Summary</h2>
          <p className="text-base roboto-font text-gray-700 leading-relaxed mb-4">
          An industrial manufacturing company is a business entity that specializes in producing and supplying a wide range of products and components used in various industries. These products can range from machinery and equipment to electronics, automotive parts, consumer goods, and more. Industrial manufacturing companies often produce a diverse. Effective communication with project stakeholders, including clients, architects, subcontractors, and regulatory agencies, is crucial for project success.          </p>
          <ul className="list-disc pl-6 mb-4 roboto-font text-gray-700 space-y-1">
            <li>Aliquam tincidunt nisi vitae nulla molestie laoreet.</li>
            <li>Praesent convallis odio elementum tortor tempor, sed varius odio iaculis.</li>
            <li>Nunc molestie ex at nisi vehicula, et pellentesque tortor elementum.</li>
            <li>Cras id purus faucibus, euismod metus quis, fermentum justo.</li>
            <li>Aenean et libero tincidunt, auctor urna fermentum, sagittis dolor.</li>
          </ul>
          <p className="text-base text-gray-700 leading-relaxed roboto-font mb-6">
          The first step in the roofing replacement process is to have a professional roofing contractor inspect the roof to determine its condition and the extent of any damage. The contractor will then provide an estimate of the cost and time required for the replacement.</p>
          {/* More content below summary */}
          <div className="mb-6">
            {/* Side by side images */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1 h-32 rounded-lg overflow-hidden bg-gray-200 relative">
                <Image src="/images/b1.jpg" alt="Project 1" fill className="object-cover" />
              </div>
              <div className="flex-1 h-32 rounded-lg overflow-hidden bg-gray-200 relative">
                <Image src="/images/3.jpg" alt="Project 2" fill className="object-cover" />
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold exo-font mb-2">Over View & Challenges</h3>
            <p className="text-base roboto-font text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
        </div>
        {/* Right: Empty for spacing on large screens */}
        <div className="w-full lg:w-[340px] hidden lg:block" />
      </section>
      {/* Latest Projects Section */}
      <section className="w-full bg-white py-20 px-6 md:px-20">
        {/* Header */}
        <div className="flex flex-col justify-center items-center mb-12">
          <div>
            <p className="text-black font-bold text-2xl exo-font text-center">Related Projects</p>
          </div>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl shadow hover:shadow-lg transition">
              {/* Image */}
              <div className="h-64 bg-gray-200 relative">
                <Image
                  src={`/projects/${(i % 3) + 1}.jpg`}
                  alt={`Project ${i + 1}`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
                {/* Residential Label on Hover */}
                <div className="absolute bottom-0 left-0 w-full text-left text-sm text-white bg-black  py-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="text-lg ml-4">
                    <h2 className="exo-font">Residential</h2>
                    <h3 className="roboto-font">Home Construction</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-24 text-center mb-10">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20">
          {["logo-2.png", "logo-1.png", "logo-5.png", "logo-3.png", "logo-4.png"].map((logo, index) => (
            <div key={index} className="w-28 h-16 relative">
              <Image
                src={`/images/logo/${logo}`}
                alt={`Client logo ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
 <Footer/>
    </>
  );
}