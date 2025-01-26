"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
       
        <div className="flex items-center">
          <Image
            src="/30TOL logo.png"
            alt="BOTOL Logo"
            width={120}
            height={80}
            className="ml-2"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">Shop</li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">Contact us</li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">About</li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">Journal</li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">Custom</li>
          </ul>
        </nav>

        {/* Inquiry Button */}
        <div className="hidden md:block">
          
        <button className="bg-gradient-to-r from-[#00D1FF] to-[#1A83FF] text-black px-4 py-2 rounded-full transition hover:shadow-md">
  Inquiry Now
</button>
          
        </div>

        {/* Mobile Menu Button */}

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-4">
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">Shop</li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">Contact us</li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">About</li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">Journal</li>
            <li className="text-gray-700 hover:text-gray-900 cursor-pointer">Custom</li>
            <li>
              <Link href="/inquiry">
                <button className="w-full bg-[#00D1FF] text-black px-4 py-2 rounded-full transition hover:shadow-md">
                  Inquiry Now
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
