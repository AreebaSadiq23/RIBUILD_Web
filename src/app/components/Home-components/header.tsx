"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideHeader(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full md:w-3/4 fixed top-0 left-0 right-0 z-50 max-w-screen-2xl mx-auto transition-transform duration-300 ${
        hideHeader ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative">
        <div className="flex flex-col md:flex-row">
          {/* Logo Box */}
          <div className="bg-white rounded-br-[40px] md:rounded-br-[60px] px-4 md:px-6 py-4 md:py-6 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start z-20 h-[80px] md:h-[110px] shadow-md w-full md:w-[250px]">
            <div className="flex items-center">
              <Image src="/logo/logo.png" alt="Logo" width={50} height={40} className="md:w-[100px] md:h-[50px]" />
              <span className="ml-2 md:ml-3 font-bold text-lg md:text-xl text-gray-800 exo-font">RIBUILD</span>
            </div>
            {/* Hamburger for mobile */}
            <button
              className="md:hidden ml-auto text-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Top Orange Bar & Nav */}
          <div className="flex-1">
            {/* Top Orange Bar */}
            <div className="bg-orange-500 h-[40px] md:h-[50px] flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 text-white text-xs md:text-sm py-1 md:py-0">
              <div className="flex items-center space-x-2 mb-1 md:mb-0">
                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 roboto-font" />
                <span>59 Street, Chicago, New York City</span>
              </div>
              <div className="flex space-x-4 md:space-x-6">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4 roboto-font" />
                  <span>(+245) 592 1125</span>
                  </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 roboto-font" />
                  <span>info@ribuild.com</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="bg-[#15181b] text-white px-4 md:px-6 py-3 md:py-4 flex-col md:flex-row flex justify-between items-start md:items-center text-xs md:text-sm h-auto md:h-[70px] rounded-bl-lg transition-all duration-300">
              {/* Desktop Nav */}
              <div className="hidden md:flex space-x-4 md:space-x-6">
                {/* Dropdowns and Links */}
                <DropdownMenu
                  label="Home"
                  open={homeDropdownOpen}
                  setOpen={setHomeDropdownOpen}
                  links={[
                    { href: "/", label: "Home 1" },
                    { href: "/home2", label: "Home 2" },
                    { href: "/home3", label: "Home 3" },
                  ]}
                />
                <Link href="/about" className="hover:text-orange-500">About</Link>
                <DropdownMenu
                  label="Service"
                  open={serviceDropdownOpen}
                  setOpen={setServiceDropdownOpen}
                  links={[
                    { href: "/services", label: "Services" },
                    { href: "/servicesdetails", label: "Services Details" },
                  ]}
                />
                <DropdownMenu
                  label="Projects"
                  open={projectsDropdownOpen}
                  setOpen={setProjectsDropdownOpen}
                  links={[
                    { href: "/project", label: "Projects1" },
                    { href: "/project2", label: "Projects2" },
                    { href: "/project3", label: "Projects3" },
                    { href: "/projectdetail", label: "ProjectsDetails" },
                  ]}
                />
                <DropdownMenu
                  label="Our Team"
                  open={blogDropdownOpen}
                  setOpen={setBlogDropdownOpen}
                  links={[
                    { href: "/ourteam", label: "Our Team" },
                    { href: "/teamdetails", label: "Team Details" },
                  ]}
                />
                <DropdownMenu
                  label="Blog"
                  open={teamDropdownOpen}
                  setOpen={setTeamDropdownOpen}
                  links={[
                    { href: "/bloggrid", label: "Blog" },
                    { href: "/blogdetail", label: "Blog Detail" },
                    { href: "/pricing", label: "Pricing" },
                  ]}
                />
                <Link href="/contact" className="hover:text-orange-500">Contact</Link>
              </div>
              {/* Desktop Right Side */}
              <div className="hidden md:flex items-center space-x-3 md:space-x-4 mt-2 md:mt-0">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5 cursor-pointer" />
                <Link href="/error">
                  <Button asChild>
                    <span>Get A Quote</span>
                  </Button>
                </Link>
              </div>
              {/* Mobile Nav */}
              <div className={`w-full md:hidden ${mobileMenuOpen ? "flex flex-col" : "hidden"} mt-2 space-y-2 transition-all duration-300`}>
                <Link href="/" className="block px-2 py-2 rounded hover:bg-orange-100 hover:text-orange-500">Home</Link>
                <Link href="/about" className="block px-2 py-2 rounded hover:bg-orange-100 hover:text-orange-500">About</Link>
                <Link href="/services" className="block px-2 py-2 rounded hover:bg-orange-100 hover:text-orange-500">Services</Link>
                <Link href="/servicesdetails" className="block px-2 py-2 rounded hover:bg-orange-100 hover:text-orange-500">Services Details</Link>
                <Link href="/project" className="block px-2 py-2 rounded hover:bg-orange-100 hover:text-orange-500">Projects1</Link>
                <Link href="/project2" className="block px-2 py-2 rounded hover:bg-orange-100 hover:text-orange-500">Projects2</Link>
                <Link href="/project3" className="block px-2 py-2 rounded hover:bg-orange-100 hover:text-orange-500">Projects3</Link>
                <Link href="/projectdetail" className="block px-2 py-2 rounded hover:bg-orange-100 hover:text-orange-500">ProjectsDetails</Link>
                <Link href="/ourteam" className="block px-2 py-2 rounded hover:bg-orange-100 hover:text-orange-500">Our Team</Link>
                <Link href="/teamdetails" className="block px-2 py-2 rounded hover:bg-orange-100 hover:text-orange-500">Team Details</Link>
                <Link href="/bloggrid" className="block px-2 py-2 rounded hover:bg-orange-100 hover:text-orange-500">Blog</Link>
                <Link href="/blogdetail" className="block px-2 py-2 rounded hover:bg-orange-100 hover:text-orange-500">Blog Detail</Link>
                <Link href="/pricing" className="block px-2 py-2 rounded hover:bg-orange-100 hover:text-orange-500">Pricing</Link>
                <Link href="/contact" className="block px-2 py-2 rounded hover:bg-orange-100 hover:text-orange-500">Contact</Link>
                <div className="flex items-center space-x-2 mt-2">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5 cursor-pointer text-gray-700" />
                  <Link
                    href="/error"
                    className="bg-[#f6f6f6] text-orange-500 font-semibold px-3 py-1 hover:bg-orange-100 text-xs roboto-font"
                  >
                    Get A Quote
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

const DropdownMenu = ({
  label,
  open,
  setOpen,
  links,
}: {
  label: string;
  open: boolean;
  setOpen: (val: boolean) => void;
  links: { href: string; label: string }[];
}) => (
  <div
    className="relative"
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}
  >
    <button className="hover:text-orange-500 flex items-center space-x-1">
      <span>{label}</span>
      <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
    </button>
    {open && (
      <div className="absolute top-full left-0 bg-white shadow-md w-40 py-2 z-50 text-black">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="block px-4 py-2 hover:bg-orange-100"
          >
            {link.label}
          </Link>
        ))}
      </div>
    )}
  </div>
);

export default Header;
