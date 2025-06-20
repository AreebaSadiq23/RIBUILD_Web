import Image from 'next/image';
import Header from '../components/Home-components/header';
import { Button } from "@/components/ui/button";
import {  Home } from "feather-icons-react";
import Footer from '../servicesdetails/footer';

export default function Service() {
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
            <h1 className="text-5xl font-bold mb-6 exo-font">Contact Us</h1>
            <Button className="bg-orange-600 text-white px-6 py-3 flex items-center gap-2">
              <Home size={20} />
              <span>Home</span>
              <span className="text-white">•••</span>
              <span className="underline exo-font">Contact Us</span>
            </Button>
          </div>
        </div>
    <section className="w-full bg-white text-gray-800 mt-10">
      {/* --- Contact Info Section --- */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-6 px-6 py-10 text-center">
        <div className="flex flex-col items-center">
          <img src="/icons/loct.png" alt="Location" className="w-12 h-12 mb-2" />
          <h3 className="font-bold text-sm">Our Location</h3>
          <p className="text-xs text-gray-600">
            2801 Sanchester Dr. Richardson<br />California 62630
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/email.png" alt="Email" className="w-12 h-12 mb-2" />
          <h3 className="font-bold text-sm">Email Address</h3>
          <p className="text-xs text-gray-600">
            example@creative.co<br />info@creative.co
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/phone.png" alt="Phone" className="w-12 h-12 mb-2" />
          <h3 className="font-bold text-sm">Phone Number</h3>
          <p className="text-xs text-gray-600">
            01 (245) 325 362<br />01 (245) 325 363
          </p>
        </div>
      </div>

      {/* --- Live Google Map Section --- */}
      <div className="w-full h-80 md:h-96">
      <iframe
       title="World Map"
       className="w-full h-full border-0"
       loading="lazy"
       allowFullScreen
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13385422.984479422!2d0!3d20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1718801234567!5m2!1sen!2s"
      ></iframe>
     </div>


      {/* --- Contact Form Section --- */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Us */}
          <div>
            <h2 className="text-4xl font-bold mb-6 exo-font text-center">Contact Us</h2>
          </div>

          {/* Right Column - Get in Touch Form */}
          <div>
            <h2 className="text-4xl mb-6 exo-font">Get in Touch</h2>
            <form className="grid gap-6 text-sm">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 px-4 py-3 w-full rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 px-4 py-3 w-full rounded-md"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 px-4 py-3 w-full rounded-md"
              />
              <textarea
                placeholder="Your Message"
                className="border border-gray-300 px-4 py-3 h-32 w-full rounded-md"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-8 py-3 rounded-md w-max"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20 mb-16">
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
    </section>
    <Footer/>
      </>
    );
}  