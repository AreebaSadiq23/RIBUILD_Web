import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/images/b1.jpg",
      title: "Construction Begins On New Office Building",
      author: "Admin",
      date: "12 January 2025",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugiat sequi, est temporibus..."
    },
    {
      id: 2,
      image: "/images/b2.jpg",
      title: "Modern Architecture Trends in 2025",
      author: "Admin",
      date: "10 January 2025",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugiat sequi, est temporibus..."
    },
    {
      id: 3,
      image: "/images/b3.jpg",
      title: "Sustainable Building Materials Guide",
      author: "Admin",
      date: "8 January 2025",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugiat sequi, est temporibus..."
    }
  ];

  return (
    <section className="bg-white py-16 px-4 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <p className="text-[#FF4500] font-semibold mb-2 tracking-wide">Our Latest Blog</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
          Read Our Blog & Post
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition hover:shadow-2xl"
            >
              {/* Blog Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6 text-left">
                <div className="flex items-center text-gray-500 text-sm mb-3 gap-4">
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faUser} className="text-[#FF4500]" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-[#FF4500]" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {post.excerpt}
                </p>
                <a href="#" className="text-[#FF4500] font-medium text-sm hover:underline">
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;