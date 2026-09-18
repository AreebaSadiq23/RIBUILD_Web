import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div className="flex flex-col gap-2">
      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-orange-600 hover:text-white transition-colors">
        <FontAwesomeIcon icon={faInstagram} />
      </button>
      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-orange-600 hover:text-white transition-colors">
        <FontAwesomeIcon icon={faFacebookF} />
      </button>
      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-orange-600 hover:text-white transition-colors">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </button>
      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-orange-600 hover:text-white transition-colors">
        <FontAwesomeIcon icon={faTwitter} />
      </button>
    </div>
  );
};

export default function RecentProjects() {
  const clients = [
    { src: "/images/logo/logo-2.png", alt: "AESIR" },
    { src: "/images/logo/logo-1.png", alt: "MLS" },
    { src: "/images/logo/logo-5.png", alt: "PURE" },
    { src: "/images/logo/logo-3.png", alt: "TWAAJD" },
    { src: "/images/logo/logo-4.png", alt: "MARCADO" },
  ];

  return (
    <div>
      <section className="w-full">
        {/* Banner */}
        <div className="relative bg-[#15181B] text-white pb-32 pt-16 px-4 md:px-20 overflow-hidden">
          {/* BACKGROUND WORD "PROJECT" */}
          <h1 className="absolute text-[100px] mt-10 md:text-[170px] exo-font font-extrabold opacity-5 uppercase left-1/2 -translate-x-1/2 -top-4 z-0 leading-none text-center w-full">
            Projects
          </h1>

          {/* Header Content */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-sm text-orange-500 roboto-font mb-1 left-52 relative pl-5">
                - Our Projects
              </p>
              <h2 className="text-3xl md:text-4xl md:ml-56 font-bold exo-font">Explore Recent Projects</h2>
            </div>
            <button className="bg-[#F05123] text-sm px-6 py-2 text-white mt-4 md:mt-0 roboto-font">
              View All Projects
            </button>
          </div>
        </div>

        {/* CARDS – floating & overlapping the black background */}
        <div className="relative -mt-24 px-4 md:px-20 z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Left Card */}
            <div className="bg-white h-72 rounded-xl shadow-xl overflow-hidden relative">
              <Image
                src="/projects/9.jpg"
                alt="Modern House Design"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
              </div>
            </div>

            {/* Middle Card with Content */}
            <div className="bg-white h-72 rounded-xl shadow-xl overflow-hidden relative">
              <Image
                src="/projects/11.jpg"
                alt="House Roof Pattern"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#F05123] rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold mx-auto">
                    →
                  </div>
                  <p className="text-lg font-semibold leading-snug text-white">
                    Modern Pattern Style for <br />
                    House Roof
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-white h-72 rounded-xl shadow-xl overflow-hidden relative">
              <Image
                src="/projects/10.jpg"
                alt="Luxury Villa Project"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              </div>
            </div>
          </div>
        </div>

        {/* LOGO ROW */}
        <div className="px-4 md:px-20 mt-16 pb-12 flex flex-wrap justify-center items-center gap-x-22 gap-y-8 opacity-60">
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client.src}
              alt={client.alt}
              width={120}
              height={40}
              className="object-contain"
            />
          ))}
        </div>
      </section>

      <section className="w-full bg-gray-100 py-20 px-6 md:px-20 text-center">
        {/* Section Heading */}
        <p className="text-orange-600 font-semibold uppercase exo-font mb-2">- Work People -</p>
        <h2 className="text-3xl md:text-4xl font-bold exo-font mb-12">Our Awesome Creative Best<br /> Team Members</h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="relative bg-white rounded-md shadow overflow-hidden text-left w-[280px]">
            <div className="w-full h-[350px]  relative">
              <Image
                src="/images/1.jpg"
                alt="Person 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              <SocialIcons />
            </div>
            <div className="flex items-center justify-between px-4 py-4 border-t bg-gray-300">
              <div className="text-left">
                <h3 className="text-lg font-semibold exo-font">James Williams</h3>
                <p className="text-sm text-gray-600 roboto-font">Operations Manager</p>
              </div>
              <div className="w-9 h-9 bg-orange-600 text-white rounded-full flex items-center justify-center shadow">
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white rounded-md shadow overflow-hidden text-left w-[280px]">
            <div className="w-full h-[350px] relative">
              <Image
                src="/images/2.jpg"
                alt="Person 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              <SocialIcons />
            </div>
            <div className="flex items-center justify-between px-4 py-4 border-t bg-gray-300">
              <div className="text-left">
                <h3 className="text-lg font-semibold exo-font">Anthony Notson</h3>
                <p className="text-sm text-gray-600 roboto-font">Prodcution Manager</p>
              </div>
              <div className="w-9 h-9 bg-orange-600 text-white rounded-full flex items-center justify-center shadow">
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white rounded-md shadow overflow-hidden text-left w-[280px]">
            <div className="w-full h-[350px] relative">
              <Image
                src="/images/i3.jpg"
                alt="Person 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              <SocialIcons />
            </div>
            <div className="flex items-center justify-between px-4 py-4 border-t bg-gray-300">
              <div className="text-left">
                <h3 className="text-lg font-semibold exo-font">Joseph Crawford</h3>
                <p className="text-sm text-gray-600 roboto-font">Chief Marketing</p>
              </div>
              <div className="w-9 h-9 bg-orange-600 text-white rounded-full flex items-center justify-center shadow">
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
