import { Button } from "@/components/ui/button";
import {  Home } from "feather-icons-react";
import Image from "next/image";
import Header from "../components/Home-components/header";
import Footer from "../servicesdetails/footer";

type Project = {
  title: string;
  image: string;
};
const projects: Project[] = [
  { title: "Construction Management", image: "/logo/cons.jpg" },
  { title: "Construction Pro Solution", image: "/logo/cons2.jpg" },
  { title: "Renovation & Remodeling", image: "/logo/cons3.jpg" },
  { title: "General Construction", image: "/logo/con4.jpg" },
];


export default function Project3() {
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
          <h1 className="text-5xl font-bold mb-6">Project Three</h1>
          <Button className="bg-orange-600 text-white px-6 py-3 flex items-center gap-2 ml-10">
            <Home size={20} />
            <span>Home</span>
            <span className="text-white">•••</span>
            <span className="underline">Project Three</span>
          </Button>
        </div>
      </div>
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="text-7xl font-extrabold text-gray-100">Recent Works</h2>
          </div>

          {/* Projects Grid */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="relative group bg-white h-80 w-80 flex flex-col justify-end overflow-hidden rounded-2xl shadow-xl border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl mx-auto"
                >
                  {/* Project Image as background */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 z-10 transition-opacity duration-300 group-hover:bg-black/40" />
                  {/* Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button className="bg-orange-600 text-white px-6 py-2 rounded-full shadow text-base font-semibold roboto-font hover:bg-orange-700 transition-colors duration-200">
                      View
                    </button>
                  </div>
                  {/* Bottom Title Bar */}
                  <div className="absolute bottom-0 left-0 w-full z-30 text-white text-lg font-bold py-3 text-center roboto-font bg-gradient-to-t from-black/80 to-transparent">
                    {project.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="mt-24 text-center mb-20">
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
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
  )}