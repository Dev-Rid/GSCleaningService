"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full h-26 sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        
        {/* Logo */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
          CleanPro
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`relative group transition ${
                pathname === link.path
                  ? "text-sky-600 font-semibold"
                  : "text-gray-700 hover:text-sky-600"
              }`}
            >
              {link.name}

              {/* Underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-sky-600 transition-all duration-300 ${
                  pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/booking"
          className="hidden md:inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block ${
                pathname === link.path
                  ? "text-sky-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/booking"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}