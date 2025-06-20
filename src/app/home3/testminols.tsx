import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faArrowRight,
  faArrowLeft,
  faLeaf,
  faHammer,
  faTools,
  faBuilding,
  faDraftingCompass,
  faFileAlt,
  faNetworkWired,
  faStar
} from "@fortawesome/free-solid-svg-icons";

export default function TestimonialsSection() {
  return (
    <div className="bg-[#101010] text-white">
      {/* Orange Belt Navigation with FontAwesome Icons */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white exo-font py-3 px-4 flex justify-center space-x-6 text-sm font-semibold uppercase gap-10">
        <span className="flex items-center space-x-1"><FontAwesomeIcon icon={faLeaf} /> <span>Green Building</span></span>
        <span className="flex items-center space-x-1"><FontAwesomeIcon icon={faHammer} /> <span>Remodeling</span></span>
        <span className="flex items-center space-x-1"><FontAwesomeIcon icon={faTools} /> <span>Services</span></span>
        <span className="flex items-center space-x-1"><FontAwesomeIcon icon={faBuilding} /> <span>Construction</span></span>
        <span className="flex items-center space-x-1"><FontAwesomeIcon icon={faDraftingCompass} /> <span>Architecture</span></span>
        <span className="flex items-center space-x-1"><FontAwesomeIcon icon={faFileAlt} /> <span>Blueprint</span></span>
        <span className="flex items-center space-x-1"><FontAwesomeIcon icon={faNetworkWired} /> <span>Infrastructure</span></span>
      </div>

      <div className="py-16 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:space-x-12 items-center">
          {/* Heading and Description - Left Side */}
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-orange-500 uppercase text-sm mb-2 roboto-font">
              - Clients Testimonials
            </h4>
            <h2 className="text-4xl font-bold mb-4 exo-font">
              What People Say About <br /> Our Company
            </h2>
            <p className="text-gray-300 mb-10 max-w-2xl roboto-font">
              We are an architecture firm with a focus beautiful but functional design. At its heart,
              we believe in design is about usability and accessibility these are the guiding principles for our work.
            </p>
          </div>

          {/* Testimonial Card - Right Side */}
          <div className="relative bg-[#ffffff10] rounded-xl p-6 max-w-xl w-full mb-8 md:mb-0 flex items-center">
            {/* Left Arrow Button */}
            <button className="absolute left-[-32px] md:left-[-30px] top-1/2 transform -translate-y-1/2 bg-white text-orange-500 hover:bg-orange-500 hover:text-white rounded-full w-8 h-8 flex items-center justify-center shadow transition-colors duration-200">
              <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
            </button>
            <div className="w-full">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-orange-500 text-2xl mb-4" />
              {/* 5 Star Rating*/}
              <div className="flex space-x-1 mb-4 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-200 mb-4 roboto-font">
                Effective testimonials go beyond a simple quote that proclaims your target greatness. They need to resonate with your target audience and the people who could also potentially benefit from the work you do in the future.
              </p>
              <p className="font-bold text-white exo-font">Jacklin Martinez</p>
              <p className="text-sm text-gray-400 roboto-font">UX Designer</p>
            </div>
            {/* Right Arrow Button */}
            <button className="absolute right-[-32px] md:right-[-30px] top-1/2 transform -translate-y-1/2 text-white bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center shadow transition-colors duration-200">
              <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
