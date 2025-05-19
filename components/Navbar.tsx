"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <div className="fixed flex flex-row flex-nowrap p-3 text-white top-1 left-1 w-full h-auto z-50 items-center ">
        
        <Link href="/" className="flex flex-nowrap align-middle items-center"><h1 className="satisfy text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          The Silk Lady
        </h1>
        <Image
          src="/TheSilkLadyLogoIcon.png"
          width={25}
          height={25}
          alt="A Pansy Flower"
          className="w-5 h-5 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-8 lg:h-8"
        />
        </Link>
        {/* Menu Button */}
        <button
          className="ml-auto md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className={`w-8 h-8 transition-transform duration-300 ${
              menuOpen ? "rotate-45" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-4 p-4 justify-center text-white fixed top-0 left-0 w-full z-50 ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* Mobile Nav */}
        <ul
          className={`
            flex flex-col space-y-4 p-6 text-2xl text-white fixed w-full h-full text-center justify-center
             bg-opacity-95 backdrop-blur-lg z-50 md:hidden
            transition-all duration-300 ease-in-out
            ${
              menuOpen
                ? "opacity-100 pointer-events-auto translate-y-0"
                : "opacity-0 pointer-events-none -translate-y-8"
            }
          `}
          style={{
            top: 0,
            left: 0,
          }}
        >
          <svg
            className={`absolute top-4 right-4 w-8 h-8 cursor-pointer transition-transform duration-300 ${
              menuOpen ? "rotate-90" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <li>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
