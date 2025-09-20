import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHeart, FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const cartProducts = useSelector((state) => state.cart?.carts);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-screen h-[60px] md:h-[85px] flex justify-between items-center px-6 md:px-12 shadow-md bg-white fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <NavLink to="/">
          <p className="text-lg md:text-3xl font-bold text-[#1a0089] mb-5">
            FOREVER<span className="text-5xl text-[#fa5e33]">.</span>
          </p>
        </NavLink>
      </div>

      {/* Nav Links (Desktop) */}
      <nav className="hidden md:flex gap-x-10">
        {["Home", "Products", "Contact", "About"].map((link) => (
          <NavLink
            key={link}
            to={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
            className={({ isActive }) =>
              isActive
                ? "text-[#fa5e33] text-lg font-semibold"
                : "text-[#1a0089] text-lg font-semibold"
            }
          >
            {link}
          </NavLink>
        ))}
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-x-3 md:gap-x-5">
        <FaHeart className="text-lg md:text-2xl text-[#fa5e33] cursor-pointer" />

        {/* Cart with badge */}
        <NavLink to="/cart" className="relative">
          <FaCartShopping className="text-lg md:text-2xl text-[#fa5e33]" />
          {cartProducts.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] md:text-xs font-bold h-4 w-4 flex items-center justify-center rounded-full">
              {cartProducts.length}
            </span>
          )}
        </NavLink>

        {/* Hamburger (Mobile only) */}
        <button
          className="text-2xl text-[#1a0089] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[60px] md:top-[85px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-y-6 py-6 md:hidden z-40">
          {["Home", "Products", "Contact", "About"].map((link) => (
            <NavLink
              key={link}
              to={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? "text-[#fa5e33] text-lg font-semibold"
                  : "text-[#1a0089] text-lg font-semibold"
              }
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
