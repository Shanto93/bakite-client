"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import logo from "./../../assets/Bakite.jpg";
import { FiDownload } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "হোম", href: "/" },
    { name: "দোকান", href: "/shop" },
    { name: "টিম", href: "/team" },
    { name: "যোগাযোগ", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm w-full sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <Image
                src={logo}
                alt="Bakite Logo"
                width={120}
                height={50}
                className="sm:w-[140px] sm:h-[60px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 lg:px-4 py-2 text-sm lg:text-base font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "bg-cyan-100 text-[#0aa9a2]"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Download Button */}
          <div className="hidden md:block">
            <button className="flex items-center justify-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 text-sm lg:text-base text-white bg-[#0aa9a2] hover:bg-cyan-600 rounded-lg shadow-md transition-colors duration-200">
              <FiDownload />
              <span className="whitespace-nowrap">অ্যাপ ডাউনলোড</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0aa9a2]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <AiOutlineCloseCircle className="text-2xl" />
              ) : (
                <RiMenu3Fill className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-100">
          {/* Mobile Navigation Links */}
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "bg-cyan-100 text-[#0aa9a2]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile Download Button */}
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base text-white bg-[#0aa9a2] hover:bg-cyan-600 rounded-lg shadow-md transition-colors duration-200 mt-4">
            <FiDownload />
            <span>অ্যাপ ডাউনলোড</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
