import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
  return (
    <section className="relative bg-cover bg-center pt-24 pb-60 min-h-[500px] text-white" style={{ backgroundImage: "url('/images/img.png')" }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-28">
          <div className="bg-white p-4 text-center text-black">
            <Image src="/icons/phone.png" alt="Phone" width={24} height={24} className="mx-auto mb-2" />
            <p className="text-sm font-semibold">Phone Number</p>
            <p className="text-xs">(+55) 654 - 545 - 5418</p>
          </div>
          <div className="bg-white p-4 text-center text-black">
            <Image src="/icons/email.png" alt="Email" width={24} height={24} className="mx-auto mb-2" />
            <p className="text-sm font-semibold">Email Address</p>
            <p className="text-xs">info@jrbuild.com</p>
          </div>
          <div className="bg-white p-4 text-center text-black">
            <Image src="/icons/loct.png" alt="Location" width={24} height={24} className="mx-auto mb-2" />
            <p className="text-sm font-semibold">Our Location</p>
            <p className="text-xs">B321, Anchor St, USA</p>
          </div>
          <div className="bg-white p-4 text-center text-black">
            <Image src="/icons/time.png" alt="Clock" width={24} height={24} className="mx-auto mb-2" />
            <p className="text-sm font-semibold">Opening Hour</p>
            <p className="text-xs">Mon - Fri: 09am - 07pm</p>
          </div>
        </div>

        {/* Floating Container with Form and Text */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-150px] w-full max-w-5xl bg-white text-black rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden flex-col md:flex-row p-0 sm:p-0">
          {/* Left Info */}
          <div className="p-5 sm:p-8 lg:p-12 bg-[#ffe6e6]">
            <p className="text-orange-600 font-medium mb-2">- Let&apos;s Talk</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Have a Project in Mind? <br /> Contact With Us
            </h2>
            <p className="text-gray-600 mb-6 mt-5">
              If you are going to use a passage of Lorem Ipsum, you need this<br />
              to be sure there isn&apos;t anything embarrassing hidden.
            </p>
            <div className="flex items-center gap-4">
              <Image
                src="/images/testm.png"
                alt="Person"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">Hozian Smith</h4>
                <p className="text-sm text-gray-500">Support Manager</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="p-5 sm:p-8 lg:p-12 bg-gray-100">
            <h3 className="text-xl font-bold mb-6">Request A Quote</h3>
            <form className="grid grid-cols-1 gap-4">
              <div className="relative col-span-2 md:col-span-1">
                <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  className="pl-10 border border-gray-300 p-2 rounded w-full"
                  placeholder="Name"
                />
              </div>
              <div className="relative col-span-2 md:col-span-1">
                <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  className="pl-10 border border-gray-300 p-2 rounded w-full"
                  placeholder="Phone Number"
                />
              </div>
              <div className="relative col-span-2 md:col-span-1">
                <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  className="pl-10 border border-gray-300 p-2 rounded w-full"
                  placeholder="Email"
                />
              </div>
              <div className="relative col-span-2 md:col-span-1">
                <FontAwesomeIcon icon={faBriefcase} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  className="pl-10 border border-gray-300 p-2 rounded w-full"
                  placeholder="Work Inquiry"
                />
              </div>
              <textarea
                className="border border-gray-300 p-2 rounded col-span-2"
                placeholder="Project Details"
                rows={4}
              ></textarea>

              <button className="bg-orange-600 text-white py-2 px-4 rounded col-span-2 hover:bg-orange-700 transition">
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;