import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-gray-600" />
            <div>
              <h4 className="font-semibold text-lg">Email Address</h4>
              <p className="text-gray-600">info@ribuild.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-gray-600" />
            <div>
              <h4 className="font-semibold text-lg">Phone Number</h4>
              <p className="text-gray-600">(+55) 654 545 5418</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6 text-gray-600" />
            <div>
              <h4 className="font-semibold text-lg">Our Location</h4>
              <p className="text-gray-600">4821, Anchor St, USA.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FontAwesomeIcon icon={faClock} className="w-6 h-6 text-gray-600" />
            <div>
              <h4 className="font-semibold text-lg">Opening Hour</h4>
              <p className="text-gray-600">Mon - Fri: 09am - 07pm</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase text-orange-600 mb-2">Lets Talk</h3>
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind? <br />Contact With Us</h2>
          <p className="text-gray-600 mb-6 max-w-md">
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form by injected humour.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 px-4 py-2 w-full rounded"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 px-4 py-2 w-full rounded"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 px-4 py-2 w-full rounded"
              />
              <input
                type="text"
                placeholder="Work Inquiries"
                className="border border-gray-300 px-4 py-2 w-full rounded"
              />
            </div>
            <textarea
              placeholder="Project Details"
              rows={4}
              className="border border-gray-300 px-4 py-2 w-full rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
