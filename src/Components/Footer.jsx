import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-6">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        
        {/* Logo & About */}
        <div>
          <h1 className="text-3xl font-bold text-[#1a0089] mb-5">
            FOREVER<span className="text-5xl text-[#fa5e33]">.</span>
          </h1>
          <p className="mt-4 text-sm leading-6">
            Forever is your one-stop destination for fashion, lifestyle, and
            essentials. Shop the latest trends with quality and trust.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Men</a></li>
            <li><a href="/" className="hover:text-white">Women</a></li>
            <li><a href="/" className="hover:text-white">Kids</a></li>
            <li><a href="/" className="hover:text-white">Accessories</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/" className="hover:text-white">FAQ</a></li>
            <li><a href="/" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="/" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md bg-gray-800 border border-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="bg-amber-500 text-white px-4 py-2 rounded-md text-sm hover:bg-amber-600"
            >
              Subscribe
            </button>
          </form>
          {/* Social Links */}
          <div className="flex space-x-4 mt-5 text-xl">
            <a href="/" className="hover:text-white"><FaFacebookF /></a>
            <a href="/" className="hover:text-white"><FaInstagram /></a>
            <a href="/" className="hover:text-white"><FaTwitter /></a>
            <a href="/" className="hover:text-white"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-400 mt-6">
        © {new Date().getFullYear()} Forever. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer