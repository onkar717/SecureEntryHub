import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp, FaHome, FaBuilding, FaUserFriends, FaClipboardList, FaInfoCircle, FaBriefcase } from "react-icons/fa";

const Header = () => {
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [showSocietyDropdown, setShowSocietyDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const toggleBrandDropdown = () => {
    setShowBrandDropdown(!showBrandDropdown);
  };

  const toggleSocietyDropdown = () => {
    setShowSocietyDropdown(!showSocietyDropdown);
  };

  const toggleAboutDropdown = () => {
    setShowAboutDropdown(!showAboutDropdown);
  };

  const iconStyle = { color: "red", fontSize: "1.4rem" }; // Custom style for icons
  const iconsize = { fontSize: "1.4rem" };

  return (
    <div className="bg-white sticky top-0 z-50 shadow-md h-24 flex justify-center items-center">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-black hover:text-gray-300 text-4xl font-bold"
            >
              Security Hub
            </Link>
          </div>
          <div className="flex items-center space-x-10 relative">
            <div className="relative">
              <button
                onClick={toggleSocietyDropdown}
                className="text-black text-md gap-4 flex items-center"
              >
                Society Solutions
                {showSocietyDropdown ? (
                  <FaAngleUp style={iconsize} />
                ) : (
                  <FaAngleDown style={iconsize} />
                )}
              </button>
              {showSocietyDropdown && (
                <div
                  className="absolute left-0 mt-3 bg-white shadow-md py-2 rounded-sm w-72"
                  style={{ lineHeight: "2" }}
                  onMouseEnter={() => setShowSocietyDropdown(true)}
                  onMouseLeave={() => setShowSocietyDropdown(false)}
                >
                  <div className="flex flex-col items-start px-4">
                    <Link
                      to="/society/solution1"
                      className="text-gray-800 flex items-center py-2 px-3 rounded-md hover:text-red-500"
                    >
                      <FaHome className="mr-2" style={iconStyle} />
                      Community Management
                    </Link>
                    <Link
                      to="/society/solution2"
                      className="text-gray-800 flex items-center py-2 px-3 rounded-md hover:text-red-500"
                    >
                      <FaBuilding className="mr-2" style={iconStyle} />
                      Apartment Accounting
                    </Link>
                    <Link
                      to="/society/solution3"
                      className="text-gray-800 flex items-center py-2 px-3 rounded-md hover:text-red-500"
                    >
                      <FaUserFriends className="mr-2" style={iconStyle} />
                      Benefits of Residents
                    </Link>
                    <Link
                      to="/society/solution4"
                      className="text-gray-800 flex items-center py-2 px-3 rounded-md hover:text-red-500"
                    >
                      <FaClipboardList className="mr-2" style={iconStyle} />
                      All Mygate Features
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={toggleBrandDropdown}
                className="text-black  flex gap-4 items-center"
              >
                Brand Solutions
                {showBrandDropdown ? (
                  <FaAngleUp style={iconsize} />
                ) : (
                  <FaAngleDown style={iconsize} />
                )}
              </button>
              {showBrandDropdown && (
                <div
                  className="absolute left-0 mt-3 bg-white shadow-md py-2 rounded-sm w-72"
                  style={{ lineHeight: "2" }}
                  onMouseEnter={() => setShowBrandDropdown(true)}
                  onMouseLeave={() => setShowBrandDropdown(false)}
                >
                  <div className="flex flex-col items-start px-4">
                    <Link
                      to="/brand/solution1"
                      className="text-gray-800 flex items-center py-2 px-3 rounded-md hover:text-red-500"
                    >
                      <FaBriefcase className="mr-2" style={iconStyle} />
                      Add Platform
                    </Link>
                    <Link
                      to="/brand/solution2"
                      className="text-gray-800 flex items-center py-2 px-3 rounded-md hover:text-red-500"
                    >
                      <FaInfoCircle className="mr-2" style={iconStyle} />
                      Industries
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={toggleAboutDropdown}
                className="text-black flex gap-4 items-center"
              >
                About Us
                {showAboutDropdown ? (
                  <FaAngleUp style={iconsize} />
                ) : (
                  <FaAngleDown style={iconsize} />
                )}
              </button>
              {showAboutDropdown && (
                <div
                  className="absolute left-0 mt-3 bg-white shadow-md py-2 rounded-sm w-72"
                  style={{ lineHeight: "2" }}
                  onMouseEnter={() => setShowAboutDropdown(true)}
                  onMouseLeave={() => setShowAboutDropdown(false)}
                >
                  <div className="flex flex-col items-start px-4">
                    <Link
                      to="/about/history"
                      className="text-gray-800 flex items-center py-2 px-3 rounded-md hover:text-red-500"
                    >
                      <FaInfoCircle className="mr-2" style={iconStyle} />
                      History
                    </Link>
                    <Link
                      to="/about/team"
                      className="text-gray-800 flex items-center py-2 px-3 rounded-md hover:text-red-500"
                    >
                      <FaUserFriends className="mr-2" style={iconStyle} />
                      Our Team
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/login" className="text-black">
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
