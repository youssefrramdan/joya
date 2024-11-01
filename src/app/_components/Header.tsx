"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import useScrollPosition from "../_hooks/useScrollPosition";
import Image from "next/image";
import Link from "next/link";
import "./header.css";
import { usePathname } from "next/navigation";

import image from "../../images/sliders/Joya Logo Full Rounded.png"


const navigationLinks = [
  { name: "Home", href: "/" },
  {
    name: "Projects",
    href: "/Projects",
    subLinks: [
      { name: "Off Plan", href: "/Projects/Off-Plan" },
      { name: "Features", href: "/Projects/Features" },
    ],
  },
  { name: "Services", href: "/Services" },
  { name: "NEWS & BLOG", href: "/news-blog" },
  { name: "About Us", href: "/About" },
  { name: "Contact Us", href: "/Contact" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false); // State for dropdown
  const scrollPosition = useScrollPosition();
  const pathName = usePathname();
  const isScrolled = React.useMemo(() => scrollPosition > 0, [scrollPosition]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-t from-transparent to-[#111612] bg-opacity-90 h-[80px]"
          : "bg-gradient-to-t from-transparent to-[#111612] h-[120px]"
      } shadow-lg`}
    >
      <div className="relative h-full">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-[#111612] to-transparent transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <div className="container mx-auto px-2 py-5 flex justify-between items-center relative z-10">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image
                src={image}
                alt="Joya properties"
                width={300}
                height={60}
                className={`transition-all duration-300 ${
                  isScrolled ? "ml-[-45px] w-[200px] h-auto md:m-0 md:h-10 md:w-auto" : "md:h-[60px] md:w-auto w-[250px] h-auto ml-[-45px]"
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 header-nav">
            {navigationLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.subLinks && setIsDropdownOpen(true)}
                onMouseLeave={() => link.subLinks && setIsDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`${
                    isScrolled ? "text-[#f1f0ec]" : "text-[#f0ede6]"
                  } hover:text-[#a0b3b1] hover:font-bold transition-colors font-semibold text-l link ${
                    pathName === link.href ? "link-active" : ""
                  }`}
                >
                  <span className={pathName === link.href ? "active" : ""}>
                    {link.name}
                  </span>
                </Link>
                {/* Dropdown Menu */}
                {link.subLinks && isDropdownOpen && (
                  <div className="absolute w-[100px] left-0 pt-5  bg-transparent text-[#f1f0ec] rounded-lg shadow-lg transition-opacity duration-300 ease-in-out opacity-100">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className={`block  link  py-2  ${
                          pathName === subLink.href ? " link-active" : ""
                        }`}
                      >
                        <span
                          className={pathName === link.href ? "active" : ""}
                        >
                          {subLink.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div>
              <a href="https://wa.me/+9710585734777" target="_blank">
                <i className="fa-brands text-base fa-whatsapp"></i>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${
                isScrolled ? "text-[#f1f0ec]" : "text-[#9da5a4]"
              } hover:text-[#a0b3b1] transition-colors`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#041d1a] shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-4 text-[#f1f0ec]">
            {navigationLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.subLinks && setIsDropdownOpen(true)}
                onMouseLeave={() => link.subLinks && setIsDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`hover:text-[#a0b3b1] transition-colors font-semibold ${
                    pathName === link.href ? "link-active" : ""
                  }`}
                >
                  <span className={pathName === link.href ? "active" : ""}>
                    {link.name}
                  </span>
                </Link>
                {/* Mobile Dropdown Menu */}
                {link.subLinks && isDropdownOpen && (
                  <div className="absolute left-0 w-[100px] mt-2 bg-[#041d1a] text-[#f1f0ec] rounded-lg shadow-lg transition-opacity duration-300 ease-in-out opacity-100 z-[2]">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className={`block px-4 py-2 hover:bg-[#698f8c] transition-colors ${
                          pathName === subLink.href ? "font-bold" : ""
                        }`}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
