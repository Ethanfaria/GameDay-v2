import React, { useState } from "react";
import logo from "../assets/gameday.png";

const NavBar = () => {
  const navItems = ["Home", "Grounds", "Academy", "Tournament", "Referee", "About", "FAQ"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md  px-[5%] py-4 mb-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="GameDay Logo" className="h-8" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="px-4 py-2 text-white font-medium rounded-2xl transition-all duration-300 hover:bg-[rgba(0,100,50,0.3)]"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center">
          <a
            href="#"
            className="px-4 py-2 text-white font-medium rounded-2xl transition-all duration-300 hover:bg-[rgba(0,100,50,0.3)]"
          >
            Login
          </a>
          <a
            href="#"
            className="ml-4 px-5 py-2.5 bg-lime-400 text-green-950 font-bold rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#d1ff4d] hover:shadow-[0_5px_15px_rgba(185,255,0,0.3)]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-lime-400 text-2xl font-bold"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-2 md:hidden">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="px-4 py-2 text-white font-medium rounded-2xl transition-all duration-300 hover:bg-[rgba(0,100,50,0.3)]"
            >
              {item}
            </a>
          ))}

          <a
            href="#"
            className="px-4 py-2 text-white font-medium rounded-2xl transition-all duration-300 hover:bg-[rgba(0,100,50,0.3)]"
          >
            Login
          </a>
          <a
            href="#"
            className="px-5 py-2.5 bg-lime-400 text-green-950 font-bold rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#d1ff4d] hover:shadow-[0_5px_15px_rgba(185,255,0,0.3)] text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;