import React from "react";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  icon: string;
  gray?: boolean;
  highlight?: boolean;
}

const services: Service[] = [
  {
    title: "Apartment Design",
    description: "There are many variations of passages of Lorem Ipsum available.",
    icon: "/icons/blog.png",
  },
  {
    title: "Repair & Painting",
    description: "There are many variations of passages of Lorem Ipsum available.",
    icon: "/icons/paintwork.png",
    gray: true,
    highlight: true,
  },
  {
    title: "General Construction",
    description: "There are many variations of passages of Lorem Ipsum available.",
    icon: "/icons/dev.png", 
  },
  {
    title: "Apartment Design",
    description: "There are many variations of passages of Lorem Ipsum available.",
    icon: "/icons/blog.png",
  },
  {
    title: "Expert Mechanical",
    description: "There are many variations of passages of Lorem Ipsum available.",
    icon: "/icons/technician.png",
  },
  {
    title: "Architecture & Building",
    description: "There are many variations of passages of Lorem Ipsum available.",
    icon: "/icons/copywriting.png",
  },
];

export default function ServiceSection() {
  return (
    <section className="relative bg-gray-100 roboto-font py-20 px-4 sm:px-10 md:px-20">
      {/* Left Vertical 'Service' Label */}
      <div className="absolute top-20 left-12 h-full w-24 flex items-center justify-center bg-gray-50 text-gray-200 text-8xl exo-font rotate-[-90deg] origin-left select-none pointer-events-none font-bold">
        Service
      </div>

      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-orange-600 font-exo text-sm uppercase tracking-wide">
          --- What We Do ---
        </p>
        <h2 className="text-3xl md:text-4xl exo-font font-bold mt-2">
          Fully Integrated Roofing Services
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10 ml-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-lg transition-all duration-300 border border-gray-200 ${
              service.highlight ? "z-10" : ""
            } ${service.gray ? "bg-gray-200" : "bg-white"}`}
          >
            {/* Icon */}
            <div className="mb-4">
              <Image
                src={service.icon}
                alt={service.title}
                width={40}
                height={40}
                className="filter-orange"
              />
            </div>

            {/* Heading */}
            <h3
              className={`text-lg font-bold mb-2 ${
                index === 1 ? "text-orange-600" : "text-black"
              }`}
            >
              {service.title}
            </h3>

            {/* Paragraph */}
            <p className="text-sm text-black">{service.description}</p>

            {/* Highlight Triangle */}
            {service.highlight && (
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[80px] border-t-orange-600 border-l-[80px] border-l-transparent"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
