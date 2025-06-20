import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#1a1a1a] text-white px-4 lg:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Column 1: Logo + Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">
            <span className="text-red-600">▮▮▮</span> RIBUILD
          </h2>
          <p className="text-gray-400 mb-4">
            Locally supply streamlined strategic themes whereas world class e-services. Globally repurpose virtual core
            competencies after scalable web-readiness.
          </p>
          <p className="text-gray-300 text-sm">
            <strong>Phone Number:</strong><br />
            +123 456 7890, +123 456 7891
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Testimonials</li>
            <li>Blog Grid</li>
            <li>Our Projects</li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div>
          <h3 className="font-semibold text-white mb-4">Our Service</h3>
          <ul className="text-gray-400 space-y-2">
            <li>General Contracting</li>
            <li>Property Maintenance</li>
            <li>Project Management</li>
            <li>Virtual Design & Build</li>
            <li>Construction</li>
            <li>Turnkey Projects</li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe to receive weekly info on large scale buildings.</p>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Your Email"
              className="px-4 py-2 w-full text-black rounded-l-md focus:outline-none border border-gray-300"
            />
            <button className="bg-red-600 px-4 py-2 rounded-r-md">
              <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
            </button>
          </div>

          <div className="mt-5">
            <p className="mb-2 text-gray-400">Follow Us:</p>
            <div className="flex space-x-3">
              <FontAwesomeIcon icon={faFacebookF} className="text-white hover:text-blue-500 cursor-pointer" />
              <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-sky-400 cursor-pointer" />
              <FontAwesomeIcon icon={faLinkedinIn} className="text-white hover:text-blue-700 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-gray-500 text-sm flex flex-col md:flex-row justify-between">
        <div>&copy; {currentYear} RIBUILD. All rights reserved.</div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;