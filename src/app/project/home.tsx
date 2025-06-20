import Image from 'next/image';
import Header from '../components/Home-components/header';
import { Button } from "@/components/ui/button";
import { Home } from "feather-icons-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


export default function Projects() {
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
          <h1 className="text-5xl font-bold mb-6 exo-font">Projects</h1>
          <Button className="bg-orange-600 text-white px-6 py-3 flex items-center gap-2">
            <Home size={20} />
            <span>Home</span>
            <span className="text-white">•••</span>
            <span className="underline exo-font">Projects</span>
          </Button>
        </div>
      </div>
      {/* Latest Projects Section */}
      <section className="w-full bg-white py-20 px-6 md:px-20">
        {/* Filters */}
        <div className="flex gap-6 mb-12 flex-wrap justify-center">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </>
  );
}  