import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import profileIcon from "../assets/profile_icon.jpg";
import cartBag from "../assets/cart_bag.webp";
import searchIcon from "../assets/search_icon.png";
import menuIcon from "../assets/menu_icon.webp";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 px-4 sm:px-8 font-medium bg-white shadow-md">
      {/* Logo */}
      <Link to="/">
        <img src={logo2} className="w-36" alt="Logo" />
      </Link>

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-6 text-gray-700">
        {[
          { name: "Home", to: "/" },
          { name: "SkinCareTip", to: "/skin-care-tip" },
          { name: "Categories", to: "/category" },
          { name: "About Us", to: "/about" },
          { name: "Contact", to: "/contact" },
        ].map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) =>
              `text-sm ${
                isActive ? "font-bold text-black" : "hover:text-gray-900"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </ul>

      {/* Search Bar */}
      <div className="hidden sm:flex relative">
        <input
          type="text"
          placeholder="Search"
          className="w-56 px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2"
          aria-label="Search Button"
        >
          <img src={searchIcon} alt="Search Icon" className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        {/* Login Button */}
        <Link
          to="/login"
          className="hidden sm:block px-4 py-2 text-sm text-white bg-black rounded-md hover:bg-gray-800"
        >
          Login
        </Link>

        {/* Profile Dropdown */}
        <div className="relative group">
          <img
            src={profileIcon}
            alt="Profile Icon"
            className="w-6 h-6 cursor-pointer rounded-full"
            aria-label="Profile Icon"
          />
          <div className="hidden group-hover:block absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-32">
            <p className="p-2 hover:bg-gray-100 cursor-pointer">My Profile</p>
            <p className="p-2 hover:bg-gray-100 cursor-pointer">Orders</p>
            <p className="p-2 hover:bg-gray-100 cursor-pointer">Logout</p>
          </div>
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img
            src={cartBag}
            alt="Cart Icon"
            className="w-6 h-6"
            aria-label="Cart Icon"
          />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-xs flex items-center justify-center rounded-full">
            0
          </span>
        </Link>

        {/* Mobile Menu Icon */}
        <button className="sm:hidden focus:outline-none">
          <img
            src={menuIcon}
            alt="Menu Icon"
            className="w-6 h-6"
            aria-label="Menu Icon"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;