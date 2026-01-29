import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/gameday.png";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 rounded-2xl border border-white/10 bg-[rgba(0,100,50,0.3)] p-6 md:p-8 backdrop-blur-md">
        {/* Brand */}
        <div>
          <img src={logo} alt="GameDay Logo" className="h-8 mb-4" />
          <p className="max-w-xs text-white/80 leading-relaxed">
            The #1 platform for booking futsal grounds and finding the best
            playing experiences in your area.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lime-400 text-lg font-bold">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { label: "Find Grounds", href: "#" },
              { label: "Join Academy", href: "#" },
              { label: "Partner With Us", href: "#" },
              { label: "About Us", href: "#" },
              { label: "FAQs", href: "#" },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white/80 transition-all hover:text-lime-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <div className="mb-6">
            <h3 className="mb-4 text-lime-400 text-lg font-bold">
              Contact Us
            </h3>
            <div className="space-y-2 text-white/80">
              <p className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-lime-400"
                />
                info@gameday.com
              </p>
              <p className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-lime-400"
                />
                +1 234 567 8900
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lime-400 text-lg font-bold">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {[faFacebookF, faInstagram, faTwitter, faYoutube].map(
                (icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white transition-all hover:bg-lime-400 hover:text-green-950 hover:-translate-y-1"
                    aria-label="Social link"
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;