import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Header = () => {
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [showSocietyDropdown, setShowSocietyDropdown] = useState(false);

  const toggleBrandDropdown = () => {
    setShowBrandDropdown(!showBrandDropdown);
  };

  const toggleSocietyDropdown = () => {
    setShowSocietyDropdown(!showSocietyDropdown);
  };

  return (
    <div className="bg-white shadow-md h-24 flex justify-center items-center">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-black hover:text-gray-300 text-4xl font-bold"
            >
              Security Hub
            </Link>
          </div>
          <div className="flex items-center space-x-10 relative">
            <div
              className="relative"
              onMouseEnter={toggleSocietyDropdown}
              onMouseLeave={toggleSocietyDropdown}
            >
              <Link
                to="/services"
                className="text-black flex items-center hover:text-gray-600"
              >
                Society Solutions{" "}
                {showSocietyDropdown ? (
                  <FaAngleUp className="ml-1 text-xl" />
                ) : (
                  <FaAngleDown className="ml-1 text-xl" />
                )}
              </Link>
              {showSocietyDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-md z-10">
                  <Link
                    to="/society-solution1"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                  >
                    Society Solution 1
                  </Link>
                  <Link
                    to="/society-solution2"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                  >
                    Society Solution 2
                  </Link>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={toggleBrandDropdown}
              onMouseLeave={toggleBrandDropdown}
            >
              <Link
                to="/brand-solutions"
                className="text-black hover:text-gray-600 flex items-center"
              >
                Brand Solutions{" "}
                {showBrandDropdown ? (
                  <FaAngleUp className="ml-1 text-xl" />
                ) : (
                  <FaAngleDown className="ml-1 text-xl" />
                )}
              </Link>
              {showBrandDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-md z-10">
                  <Link
                    to="/brand-solution1"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                  >
                    Brand Solution 1
                  </Link>
                  <Link
                    to="/brand-solution2"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                  >
                    Brand Solution 2
                  </Link>
                </div>
              )}
            </div>
            <Link to="/about" className="text-black hover:text-gray-600">
              About Us
            </Link>
            <Link to="/login" className="text-black hover:text-gray-600">
              Login
            </Link>
            <Link>
              <button className="text-white bg-orange-700 hover:bg-black hover:text-white rounded-lg p-2">
                Book Demo
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
