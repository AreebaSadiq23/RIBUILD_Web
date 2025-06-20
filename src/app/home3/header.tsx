"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faInstagram,
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "react-feather";

const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [teamDropdownOpen, setteamDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideHeader(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-3/4 fixed top-0 left-0 right-0 z-50 max-w-screen-2xl mx-auto transition-transform duration-300 ${hideHeader ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      {/* Top Black Bar */}
      <div className="bg-[#15181b] text-white text-sm py-2 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 roboto-font">
          <MapPin className="w-4 h-4 text-orange-600" />
          <span>59 Street, Chicago, New York City</span>
        </div>
        <div className="flex items-center space-x-3 roboto-font">
          <span>Follow us:</span>
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-white hover:text-orange-400 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            className="text-orange-500 hover:text-orange-400 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            className="text-white hover:text-orange-400 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-white hover:text-gray-300 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="text-white hover:text-orange-400 cursor-pointer"
          />
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="px-6 py-4 flex justify-between items-center bg-white text-sm">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/logo/logo.png" alt="Logo" width={50} height={50} />
          <span className="font-bold text-xl text-gray-800 exo-font">RIBUILD</span>
        </div>

        {/* Center: Nav Items */}
        <nav className="flex space-x-6 text-gray-800 font-medium">
          {/* Home Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setHomeDropdownOpen(true)}
            onMouseLeave={() => setHomeDropdownOpen(false)}
          >
            <button className="hover:text-orange-500 flex items-center space-x-1">
              <span>Home</span>
              <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
            </button>
            {homeDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md w-40 py-2 z-50 text-black roboto-font">
                <Link href="/" className="block px-4 py-2 hover:bg-orange-100">
                  Home 1
                </Link>
                <Link
                  href="/home2"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  Home 2
                </Link>
                <Link
                  href="/home3"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  Home 3
                </Link>
              </div>
            )}
          </div>

          {/* About */}
          <Link href="/about" className="hover:text-orange-500">
            About
          </Link>

          {/* Service Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServiceDropdownOpen(true)}
            onMouseLeave={() => setServiceDropdownOpen(false)}
          >
            <button className="hover:text-orange-500 flex items-center space-x-1">
              <span>Service</span>
              <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
            </button>
            {serviceDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md w-40 py-2 z-50 text-black">
                <Link
                  href="/services"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  Services
                </Link>
                <Link
                  href="/servicesdetails"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  Services Details
                </Link>
              </div>
            )}
          </div>

          {/* Projects Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProjectsDropdownOpen(true)}
            onMouseLeave={() => setProjectsDropdownOpen(false)}
          >
            <button className="hover:text-orange-500 flex items-center space-x-1">
              <span>Projects</span>
              <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
            </button>
            {projectsDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md w-40 py-2 z-50 text-black">
                <Link
                  href="/project"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  Projects1
                </Link>
                <Link
                  href="/project2"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  Projects2
                </Link>
                <Link
                  href="/project3"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  Projects3
                </Link>
                <Link
                  href="/projectdetail"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  ProjectsDetails
                </Link>
              </div>
            )}
          </div>

          {/* Blog Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBlogDropdownOpen(true)}
            onMouseLeave={() => setBlogDropdownOpen(false)}
          >
            <button className="hover:text-orange-500 flex items-center space-x-1">
              <span>Blog</span>
              <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
            </button>
            {blogDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md w-40 py-2 z-50 text-black">
                <Link
                  href="/blog"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  Blog
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  Blog Grid
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  Pricing
                </Link>
              </div>
            )}
          </div>

          {/* Blog Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setteamDropdownOpen(true)}
            onMouseLeave={() => setteamDropdownOpen(false)}
          >
            <button className="hover:text-orange-500 flex items-center space-x-1">
              <span>Our Team</span>
              <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
            </button>
            {teamDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md w-40 py-2 z-50 text-black">
                <Link
                  href="/team"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  Our Team
                </Link>
                <Link
                  href="/team"
                  className="block px-4 py-2 hover:bg-orange-100"
                >
                  Team Detail
                </Link>
              </div>
            )}
          </div>

          {/* Contact */}
          <Link href="/contact" className="hover:text-orange-500">
            Contact
          </Link>
        </nav>

        {/* Right: Call Us */}
        <div className="flex items-center space-x-2 text-orange-500 font-semibold">
          <Phone className="w-4 h-4" />
          <span>Call Us: </span>
          <span>(+245) 592 1125</span>
        </div>
      </div>
    </header>
  );
};

export default Header;