import React from "react";
import Image from "next/image";

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/projects/13.jpg",
      title: "Construction Begins On New Office Building",
      author: "By Admin",
      date: "12 January 2025",
    },
    {
      id: 2,
      image: "/projects/12.jpg",
      title: "Modern Architecture Trends in 2025",
      author: "By Admin",
      date: "10 January 2025",
    },
    {
      id: 3,
      image: "/projects/14.jpg",
      title: "Sustainable Building Materials Guide",
      author: " By Admin",
      date: "8 January 2025",
    }
  ];

  return (
    <section className="bg-white py-16 px-4 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <p className="text-[#FF4500] font-semibold mb-2 tracking-wide roboto-font"> - Trending Topics -</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 exo-font">
          Latest Articles & Blog Posts
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
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
                <div className={`flex items-center text-sm mb-3 gap-4 ${index === 1 ? 'text-[#FF4500]' : 'text-gray-500'}`}>
                  <div className="flex items-center gap-1">
                    <Image src="/icons/person.png" alt="user" width={16} height={16} className="w-4 h-4 filter-orange" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src="/icons/calendar.png" alt="calendar" width={16} height={16} className="w-4 h-4 filter-orange" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className={`text-lg font-semibold mb-2 leading-snug roboto-font ${index === 1 ? 'text-[#FF4500]' : 'text-gray-800'}`}>
                  {post.title}
                </h3>
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