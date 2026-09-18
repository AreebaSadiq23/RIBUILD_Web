'use client'
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

const teamMembers = [
  { name: "Alex Jonison", title: "UI/UX Designer", image: "/images/blo.jpg" },
  { name: "Eduard Noel", title: "UI/UX Designer", image: "/images/blo4.jpg" },
  { name: "Jason Joy", title: "UI/UX Designer", image: "/images/blo3.jpg" },
  { name: "Laura Lepla", title: "UI/UX Designer", image: "/images/blo2.jpg" },
];

const faqs = [
  "What Are The Charges of Renovation?",
  "What is Project Timing in Construction?",
  "How to contact our Support Team?",
  "How Are Construction Permits Obtained?",
];

export default function TeamAndFAQSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="p-4 md:px-20 md:py-16 bg-white text-gray-800 font-sans">
      {/* Team Section */}
      <div className="flex justify-center items-start gap-6 flex-wrap md:flex-nowrap mb-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-60 bg-white rounded-md shadow-lg overflow-hidden text-center border border-gray-200"
          >
            <button
              onClick={() => setActiveCard(activeCard === index ? null : index)}
              className="absolute top-3 right-3 h-8 w-8 text-base font-bold bg-orange-600 text-white rounded-full z-10 flex items-center justify-center"
            >
              +
            </button>
            <div className="w-full h-48 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={240}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="font-semibold text-gray-900 text-sm exo-font">{member.name}</p>
              <p className="text-xs text-gray-500 roboto-font">{member.title}</p>
            </div>

            {activeCard === index && (
              <div className="absolute top-12 right-3 bg-white rounded-md shadow-md p-2 space-y-2 z-20">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <FontAwesomeIcon icon={faFacebookF} className="text-blue-600 text-xs" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <FontAwesomeIcon icon={faTwitter} className="text-black text-xs" />
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-800 text-xs" />
                </div>
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                  <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-xs" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 gap-16">
        {/* Left Side */}
        <div>
          <p className="text-xs text-orange-500 tracking-widest uppercase font-semibold mb-2 exo-font">
            -Support</p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6 exo-font">
            Integerated Building Design<br /> For Enhanced Eficiency
          </h2>
          <div className="space-y-5 roboto-font">
            {[
              "Vivamus eget tristique purus. Mauris rhoncus sem non lorem aliquet varius. Aliquam non odio et arcu ullamcorper efficitur.",
              "Suspendisse facilisis dolor id turpis varius malesuada. Morbi egestas libero ac consectetur interdum uisque.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <FontAwesomeIcon icon={faChevronRight} className="text-orange-600 text-lg" />
                <span className="text-sm text-gray-700 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-t pt-4 border-gray-200 flex justify-between items-start"
            >
              <div>
                <p className="text-sm text-gray-800 leading-tight">{faq}</p>
                {index === 1 && (
                  <span className="block text-xs text-gray-600 mt-1">
                    Project timing in construction typically depends on the scope and complexity of the project. It can range from a few weeks for small renovations to several months or years for large-scale builds.
                  </span>
                )}
              </div>
              <span className="text-xl text-gray-500 font-bold">{index === 1 ? '-' : '+'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}