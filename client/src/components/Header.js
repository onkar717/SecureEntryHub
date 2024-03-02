import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
          <div className="flex items-center space-x-10"> {/* Increased space between the elements */}
            <Link
              to="/services"
              className="text-black hover:text-gray-600"
            >
              Society Solutions
            </Link>
            <Link to="/contact" className="text-black hover:text-gray-600">
              Brand Solution
            </Link>
            <Link to="/about" className="text-black hover:text-gray-600">
              About Us
            </Link>
            <Link to="/login" className="text-black hover:text-gray-600">
              Login
            </Link>
            <Link>
              <button className='text-white bg-orange-700 hover:bg-black hover:text-white rounded-lg p-2'>
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
