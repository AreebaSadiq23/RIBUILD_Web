import React from "react";
import Image from "next/image";

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

const RecentProjects: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-orange-500 uppercase text-sm font-semibold tracking-wide roboto-font">
            - Recent Works
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 exo-font">
            Explore Our Best Recently <br className="hidden md:block" />
            Completed Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-gray-200 h-72 w-72 flex flex-col justify-end overflow-hidden rounded-md shadow-md"
            >
              {/* Project Image as background */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="absolute inset-0 bg-opacity-30 z-10 transition-opacity duration-300 group-hover:bg-opacity-40" />
              {/* Hover Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <button className="bg-white text-gray-700 px-4 py-2 rounded-full shadow text-sm font-semibold roboto-font">
                  View
                </button>
              </div>
              {/* Bottom Title Bar */}
              <div className="absolute bottom-0 left-0 w-full z-30 text-white text-sm font-semibold py-2 text-center roboto-font bg-gradient-to-t from-black/70 to-transparent">
                {project.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default RecentProjects;