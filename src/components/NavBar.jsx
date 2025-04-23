"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const navLinks = [
  { name: "HOME", href: "/", active: true },
  { name: "ABOUT US", href: "/about" },
  { name: "OUR SERVICES", href: "/ourservices" },
  { name: "BLOG", href: "/#" },
  { name: "FAQ", href: "/#" },
  { name: "PAGES", href: "/#" },
  { name: "CONTACT US", href: "/contactus" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-gray-200 border-t w-full">
      <div className="flex justify-between items-center mx-auto px-6 py-4 max-w-7xl">
        {/* Book Button */}
        <Link
          href="/book"
          className="bg-[color:var(--color-primary)] hover:bg-[color:var(--color-accent)] px-4 py-2 rounded font-semibold text-white text-sm transition"
        >
          BOOK FOR A RIDE
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-black text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu />
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-200 ${
                link.active
                  ? "text-[color:var(--color-primary)] border-b-2 border-[color:var(--color-primary)]"
                  : "text-black hover:text-[color:var(--color-primary)]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="lg:hidden space-y-1 px-6 pb-4 border-gray-100 border-t">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block py-2 text-sm font-semibold transition ${
                link.active
                  ? "text-[color:var(--color-primary)] border-b-2 border-[color:var(--color-primary)]"
                  : "text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
