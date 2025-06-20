import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faArrowRight, faChevronLeft, faChevronRight, faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const TestimonialsAndBlog: React.FC = () => {
  return (
    <section className="bg-white px-2 sm:px-4 py-10 sm:py-16 flex justify-center mt-12 sm:mt-24">
      <div className="w-full max-w-5xl px-2 sm:px-6 py-6 sm:py-8">
        {/* Top Heading */}
        <div className="text-center mb-8">
          <p className="text-orange-500 text-sm font-semibold underline underline-offset-4 mb-1 roboto-font">Testimonial</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 exo-font">What The People Thinks<br /> About Us</h2>
        </div>

        {/* Card */}
        <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6 relative">
          {/* Left Image */}
          <div className="w-full md:w-1/2 h-64 relative rounded-md overflow-hidden">
            <Image
              src="/images/test.jpg"
              alt="Testimonial person"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 pr-10 relative">
            {/* Quote Icon */}
            <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </div>

            {/* Paragraph */}
            <p className="text-gray-700 leading-relaxed mb-4 text-sm roboto-font">
              We are an architecture firm with a focus on beautiful but functional design. At its heart,
              we believe design is about usability and accessibility—these are the guiding principles
              for our work. Read projects, our process and our team below.
            </p>

            {/* Stars */}
            <div className="text-yellow-500 text-sm mb-1">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="mr-1" />
              ))}
            </div>

            {/* Name */}
            <p className="text-gray-900 font-bold text-sm">Carlton Trapp</p>

            {/* Orange Arrow Button (Right Center) */}
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white w-8 h-8 flex items-center justify-center">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        {/* Blog section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 mt-10 sm:mt-16 gap-4 sm:gap-0">
          <div>
            <p className="text-orange-600 font-medium roboto-font">— Trending Topics —</p>
            <h2 className="text-2xl md:text-3xl font-bold exo-font">Latest Articles & Blog Posts</h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50">
              <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded hover:bg-orange-700">
              <FontAwesomeIcon icon={faChevronRight} className="text-white" />
            </button>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: "Construction Begins On New Office Building",
              author: "Steve Brown",
              date: "March 15, 2024",
              image: "/images/b1.jpg"
            },
            {
              title: "Safety Essentials: Protocols for Construction Sites",
              author: "Jane Miller",
              date: "March 14, 2024",
              image: "/images/b2.jpg"
            },
            {
              title: "From Blueprint to The Art of Architectural Design",
              author: "Tom Hardy",
              date: "March 13, 2024",
              image: "/images/b3.jpg"
            },
          ].map((post, index) => (
            <div key={index} className="bg-gray-100 rounded-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-40 relative rounded mb-4 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className={`font-semibold mb-3 exo-font ${index === 1 ? 'text-orange-600' : 'text-black'}`}>{post.title}</h3>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-orange-600">
                    <path fill="currentColor" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
                  </svg>
                  <span className="text-sm text-gray-600">by admin</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-orange-600" />
                  <span className="text-sm text-gray-600">{post.date}</span>
                </div>
              </div>

              <button className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors exo-font">
                Read More
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          ))}
        </div>

        {/* Our Clients Section */}
        <div className="mt-12 sm:mt-24 text-center">
          <p className="text-orange-600 font-medium mb-2 roboto-font">— Our Clients —</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 exo-font">Awarding winning clients</h2>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-20">
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
      </div>
    </section>
  );
};

export default TestimonialsAndBlog;
