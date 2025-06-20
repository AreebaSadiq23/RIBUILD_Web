import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#15181B] text-white">
      {/* Newsletter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-6 border-b border-gray-700">
        <h2 className="text-2xl exo-font mb-4 md:mb-0 ml-24 font-semibold">
          Subscribe Newsletter for<br /> Latest Updates
        </h2>
        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 w-full md:w-72 text-white border border-gray-400"
          />
          <button className="bg-orange-600 text-white px-4 py-2">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main 4-column Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 py-10 ml-20">
        {/* Rebuild (Logo + About + Social) */}
        <div>
          <div className="flex items-center mb-3">
            <Image
              src="/logo/logo.png"
              alt="Rebuild Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-bold exo-font">Rebuild</span>
          </div>
          <p className="text-gray-300 mb-4 roboto-font text-sm font-light">
            Officia deserunt mollitia animi, id est laborum fuga. Et
            harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est
          </p>
          <div className="flex space-x-3">
            {[faFacebookF, faInstagram, faTwitter, faLinkedinIn].map((icon, i) => (
              <div
                key={i}
                className="border border-white w-10 h-10 flex items-center justify-center rounded hover:bg-orange-500"
              >
                <FontAwesomeIcon icon={icon} />
              </div>
            ))}
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-lg font-semibold mb-3 exo-font">Pages</h3>
          <ul className="space-y-4 text-gray-200 roboto-font">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Testmonials</li>
            <li>Blog Grid</li>
            <li>Projects</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3 exo-font">Our Services</h3>
          <ul className="space-y-5 text-gray-200 roboto-font">
            <li>General Construction</li>
            <li>Property Maintainance</li>
            <li>Virtual Design & Build</li>
            <li>Preconstruction</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3 exo-font">Contact Us</h3>
          <div className="flex items-center text-gray-400 gap-2 mb-1">
            <FontAwesomeIcon icon={faPhone} />
            <span>Call us for support:</span>
          </div>
          <p className="font-medium mb-3 ml-4">+92 300 1234567</p>
          <div className="flex items-center text-gray-400 gap-2 mb-1">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Email us for query:</span>
          </div>
          <p className="font-medium mb-1 ml-4">example@.com</p>
          <div className="flex items-center text-gray-400 gap-2 mb-1">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>1058 Helton Ave,stky</span>
          </div>
          <p className="font-medium mb-1 ml-4">Behrin,Germany</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 text-sm flex flex-col md:flex-row justify-between items-center px-6 py-4">
        <p className="text-[#FFFFFF] ml-14">
          &copy; {currentYear} Rebuild. All rights reserved.
        </p>
        <p className="mr-14 mt-2 md:mt-0 text-[#FFFFFF] roboto-font">Created by PRDevs</p>
      </div>
    </footer>
  );
};

export default Footer;
