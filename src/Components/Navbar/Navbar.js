import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [closeNav, setCloseNav] = useState(false);
  const handleDropdownEnter = () => {
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    setDropdownOpen(false);
  };

  const handleCloseNav = () => {
    setCloseNav(!closeNav);
  };

  return (
    <nav className="bg-gray-800 mb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white">
                Your Logo
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button className="nav-item">
              {closeNav ? (
                <FaTimes onClick={handleCloseNav} />
              ) : (
                <FaBarsStaggered onClick={handleCloseNav} />
              )}
            </button>
          </div>

          <div className={` md:flex ${closeNav ? "flex" : "hidden"}`}>
            <div
              className={`md:flex  ${
                closeNav ? "md:flex navbarSmItemStyle" : "hidden"
              }`}
            >
              <a href="###" className="nav-item">
                Home
              </a>
              <a href="##" className="nav-item">
                About
              </a>
              <a href="##" className="nav-item">
                Contact
              </a>
              <a href="##" className="nav-item">
                Team
              </a>
              <div
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Product
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 z-50 mt-2 py-2 w-32 bg-white rounded-md shadow-2xl">
                    <a
                      href="##"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Product 1
                    </a>
                    <a
                      href="##"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Product 2
                    </a>
                    <a
                      href="##"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Product 3
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
