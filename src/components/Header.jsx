import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header bg-gray-900 flex">
      {/* Logo on the left side -> img */}
      <Link to="/" className="mt-3">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
          className="w-[100px] mx-[20px] object-cover"
        />
      </Link>
      {/* Search Box */}
      <div className="header__search flex items-center flex-1">
        <input
          type="text"
          className="h-8 flex-1 focus:outline-none border-none px-3"
        />
        <i className="fa-solid fa-magnifying-glass flex justify-center items-center bg-yellow-500 w-8 h-8"></i>
      </div>
      {/* Header Links */}
      <div className="header__links flex justify-evenly space-x-6 mx-4">
        <Link to="/login" className="flex items-center">
          <div className="header_option text-white flex flex-col">
            <span className="text-[10px] text-gray-300">Hello</span>
            <span className="text-[13px] font-bold">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="flex items-center">
          <div className="header_option text-white flex flex-col">
            <span className="text-[10px] text-gray-300">Return</span>
            <span className="text-[13px] font-bold">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="flex items-center">
          <div className="header_option text-white flex flex-col">
            <span className="text-[10px] text-gray-300">Your</span>
            <span className="text-[13px] font-bold">Prime</span>
          </div>
        </Link>
        <Link to="/" className="flex items-center">
          <div className="header_option text-white flex flex-col">
            <i className="fa-solid fa-cart-arrow-down"></i>
            <span className="text-[13px] font-bold">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
