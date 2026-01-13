"use client";

import { ChevronDown, Search, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../button";

const Logo = () => (
  <Link href="/" className="flex items-center">
    <div className="relative w-24 sm:w-28 md:w-32 h-12 sm:h-12 flex-shrink-0">
      <Image
        src="/logo.png"
        alt="Company Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  </Link>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <div className="w-full px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between relative">
        <Logo />
        <nav className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-6 text-[#424242] text-[13px]">
          <Link href="/features">Features</Link>
          <Link href="/solution">Solution</Link>
          <Link href="/resources" className="flex items-center gap-1">
            Resources
            <ChevronDown className="w-3.5 h-3.5 mt-0.5" />
          </Link>
          <Link href="/pricing">Pricing</Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/search"
            className="p-1 rounded transition"
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-[#212121]" />
          </Link>
          <Link
            href="/signin"
            className="px-3 py-1 text-[14px] font-[600] rounded transition hidden sm:inline-flex"
          >
            Sign In
          </Link>
          <Link
            href="/get-started"
            className="px-4 py-2 text-[14px] font-semibold bg-[#CC1072] text-white rounded-[8px] hover:bg-[#b01063] transition hidden sm:inline-flex"
          >
            Get Started
          </Link>
          <Button
            variant="secondary"
            className="md:hidden p-2 rounded hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5 text-[#424242]" />
            ) : (
              <Menu className="w-5 h-5 text-[#424242]" />
            )}
          </Button>
        </div>
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t shadow-md flex flex-col md:hidden">
            <Link
              href="/features"
              className="px-4 py-3 hover:bg-gray-100 border-b border-gray-100"
            >
              Features
            </Link>
            <Link
              href="/solution"
              className="px-4 py-3 hover:bg-gray-100 border-b border-gray-100"
            >
              Solution
            </Link>
            <Link
              href="/resources"
              className="px-4 py-3 hover:bg-gray-100 border-b border-gray-100 flex items-center justify-between"
            >
              Resources <ChevronDown className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-3 hover:bg-gray-100 border-b border-gray-100"
            >
              Pricing
            </Link>
            <div className="flex flex-col gap-2 px-4 py-3">
              <Link
                href="/signin"
                className="px-4 py-2 text-center text-[#424242] border border-gray-300 rounded hover:bg-gray-100"
              >
                Sign In
              </Link>
              <Link
                href="/get-started"
                className="px-4 py-2 text-center bg-[#CC1072] text-white rounded hover:bg-[#b01063]"
              >
                Get Started
              </Link>
              <Link
                href="/search"
                className="px-4 py-2 text-center border border-gray-300 rounded hover:bg-gray-100"
              >
                Search
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
