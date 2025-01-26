import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-bold tracking-widest text-white">
            BOTOL
          </h1>
          <div className="flex mt-4 space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div>
          {/* Top Navigation Links */}
          <div className="flex flex-col items-center gap-7  space-y-5 md:space-y-0 md:items-start md:flex-row md:space-x-12 ">
            <Link href="/shop">
              <span className="hover:underline">Shop</span>
            </Link>
            <Link href="/contact-us">
              <span className="hover:underline">Contact</span>
            </Link>
            <Link href="/about">
              <span className="hover:underline">About</span>
            </Link>
            <Link href="/journal">
              <span className="hover:underline">Journal</span>
            </Link>
            <Link href="/custom">
              <span className="hover:underline">Custom</span>
            </Link>
          </div>

          {/* Bottom Navigation Links */}
          <div className="flex flex-col items-center space-y-4 gap-9 md:space-y-0 md:items-start md:flex-row md:space-x-8">
            <Link href="">
              <span className="hover:underline">FAQs</span>
            </Link>
            <Link href="/returns">
              <span className="hover:underline">Returns</span>
            </Link>
            <Link href="/ordering">
              <span className="hover:underline">Ordering</span>
            </Link>
            <Link href="/shipping">
              <span className="hover:underline">Shipping</span>
            </Link>
            <Link href="/personalization-policies">
              <span className="hover:underline"> Policies</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 py-4 text-center">
        <p className="text-sm text-gray-500">
          Copyright © 2023 BOTOL. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
