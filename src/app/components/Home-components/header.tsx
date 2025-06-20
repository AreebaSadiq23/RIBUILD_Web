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

  useEffect(() => {
    const handleScroll = () => {
      setHideHeader(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-3/4 fixed top-0 left-0 right-0 z-50 max-w-screen-2xl mx-auto transition-transform duration-300 ${
        hideHeader ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative">
        <div className="flex">
          {/* Logo Box */}
          <div className="bg-white rounded-br-[60px] px-6 py-6 flex flex-col justify-center items-start z-20 h-[110px] shadow-md w-[250px]">
            <div className="flex items-center">
              <Image src="/logo/logo.png" alt="Logo" width={50} height={50} />
              <span className="ml-3 font-bold text-xl text-gray-800 exo-font">RIBUILD</span>
            </div>
          </div>

          {/* Top Orange Bar & Nav */}
          <div className="flex-1">
            {/* Top Orange Bar */}
            <div className="bg-orange-500 h-[50px] flex items-center justify-between px-6 text-white text-sm">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 roboto-font" />
                <span>59 Street, Chicago, New York City</span>
              </div>
              <div className="flex space-x-6">
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
            <nav className="bg-[#15181b] text-white px-6 py-4 flex justify-between items-center text-sm h-[70px] rounded-bl-lg">
              <div className="flex space-x-6">
                {/* Dropdowns and Links */}
                {/* Home */}
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

                {/* Service */}
                <DropdownMenu
                  label="Service"
                  open={serviceDropdownOpen}
                  setOpen={setServiceDropdownOpen}
                  links={[
                    { href: "/services", label: "Services" },
                    { href: "/servicesdetails", label: "Services Details" },
                  ]}
                />

                {/* Projects */}
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

                {/* Our Team */}
                <DropdownMenu
                  label="Our Team"
                  open={blogDropdownOpen}
                  setOpen={setBlogDropdownOpen}
                  links={[
                    { href: "/ourteam", label: "Our Team" },
                    { href: "/teamdetails", label: "Team Details" },
                  ]}
                />

                {/* Blog */}
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

              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5 cursor-pointer" />
                <Button
                  variant="default"
                  className="bg-[#f6f6f6] text-orange-500 font-semibold px-4 py-1.5 hover:bg-orange-100 text-sm roboto-font"
                >
                  Get A Quote
                </Button>
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
