import { Button } from "@/components/ui/button";
import {  Home } from "feather-icons-react";
import Image from "next/image";
import Header from "../components/Home-components/header";
import { faInstagram, faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "../servicesdetails/footer";


const SocialIcons = () => (
  <>
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-orange-600 hover:text-white transition">
      <FontAwesomeIcon icon={faInstagram} />
    </div>
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-orange-600 hover:text-white transition">
      <FontAwesomeIcon icon={faFacebookF} />
    </div>
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-orange-600 hover:text-white transition">
      <FontAwesomeIcon icon={faLinkedinIn} />
    </div>
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-orange-600 hover:text-white transition">
      <FontAwesomeIcon icon={faTwitter} />
    </div>
  </>
);


export default function OurTeam() {
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
          <h1 className="text-5xl font-bold mb-6">Our Team</h1>
          <Button className="bg-orange-600 text-white px-6 py-3 flex items-center gap-2">
            <Home size={20} />
            <span>Home</span>
            <span className="text-white">•••</span>
            <span className="underline">Our Team</span>
          </Button>
        </div>
      </div>

      {/* team section */}
      <section className="w-full bg-gray-100 py-20 px-6 md:px-20 text-center">
        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="relative bg-white rounded-2xl shadow overflow-hidden text-left w-[280px]">
            <div className="w-full h-[280px] relative">
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
              <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center shadow">
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white rounded-2xl shadow overflow-hidden text-left w-[280px]">
            <div className="w-full h-[280px] relative">
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
              <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center shadow">
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white rounded-2xl shadow overflow-hidden text-left w-[280px]">
            <div className="w-full h-[280px] relative">
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
              <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center shadow">
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative bg-white rounded-2xl shadow overflow-hidden text-left w-[280px]">
            <div className="w-full h-[280px] relative">
              <Image
                src="/images/i4.jpg"
                alt="Person 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              <SocialIcons />
            </div>
            <div className="flex items-center justify-between px-4 py-4 border-t bg-gray-300">
              <div className="text-left">
                <h3 className="text-lg font-semibold exo-font">Emily Johnson</h3>
                <p className="text-sm text-gray-600 roboto-font">Lead Designer</p>
              </div>
              <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center shadow">
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative bg-white rounded-2xl shadow overflow-hidden text-left w-[280px]">
            <div className="w-full h-[280px] relative">
              <Image
                src="/images/i5.jpg"
                alt="Person 5"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              <SocialIcons />
            </div>
            <div className="flex items-center justify-between px-4 py-4 border-t bg-gray-300">
              <div className="text-left">
                <h3 className="text-lg font-semibold exo-font">Michael Lee</h3>
                <p className="text-sm text-gray-600 roboto-font">Project Engineer</p>
              </div>
              <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center shadow">
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="relative bg-white rounded-2xl shadow overflow-hidden text-left w-[280px]">
            <div className="w-full h-[280px] relative">
              <Image
                src="/images/i6.jpg"
                alt="Person 6"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              <SocialIcons />
            </div>
            <div className="flex items-center justify-between px-4 py-4 border-t bg-gray-300">
              <div className="text-left">
                <h3 className="text-lg font-semibold exo-font">Sophia Turner</h3>
                <p className="text-sm text-gray-600 roboto-font">HR Specialist</p>
              </div>
              <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center shadow">
                <FontAwesomeIcon icon={faShareAlt} />
              </div>
            </div>
          </div>
        </div>
      </section>    
   
                       {/* logo section */}
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