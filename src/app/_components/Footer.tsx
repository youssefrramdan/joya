import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/Projects" },
  { name: "Services", href: "/Services" },
  { name: "About Us", href: "/About" },
  { name: "Contact", href: "/Contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[#041d1a] text-[#f4f3ef] py-16  mt-12   ">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-3xl font-extrabold text-[#a0b3b1] mb-6">
              Joya Properties
            </h3>
            <p className="text-lg text-[#f0ede6]/80">
              Discover breathtaking residences that redefine elegance and
              exclusivity, curated just for you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#a0b3b1]">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#3d6a64] transition-all ease-in-out duration-300 text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#a0b3b1]">
              Contact Us
            </h4>
            <p className="text-lg text-[#f0ede6]/80 mb-2">
              123 Elite St, Dubai, UAE
            </p>
            <p className="text-lg text-[#f0ede6]/80 mb-2">
              Phone: +971 4 765 4321
            </p>
            <p className="text-lg text-[#f0ede6]/80">
              Email: contact@Joyaproperties.com
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#a0b3b1]">
              Follow Us
            </h4>
            <div className="flex space-x-8">
              {[
                { icon: Facebook },
                { icon: Twitter },
                { icon: Instagram },
                { icon: Linkedin },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-[#3d6a64] transition-all ease-in-out duration-300"
                >
                  <social.icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider Line & Copyright */}
        <div className="mt-16 pt-8 border-t border-[#111810] text-center">
          <p className="text-lg text-[#f0ede6]/60">
            &copy; 2024 for Joya Properties{" "}
            <a href="https://www.siimedia.net/" className="text-[#faf8f7] font-bold transition-all duration-300 hover:text-opacity-80" target="_blank" >By
            Sii Media</a> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
