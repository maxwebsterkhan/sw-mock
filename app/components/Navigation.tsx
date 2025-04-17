"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, LogOut } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  // Mock authentication state - in a real app, this would come from your auth system
  const [isSignedIn, setIsSignedIn] = useState(true); // Set to false to test the signed-out view
  const pathname = usePathname();

  // Toggle auth state function for demo purposes
  const toggleAuthState = () => {
    setIsSignedIn(!isSignedIn);
  };

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if we're at the top
      const isAtTop = currentScrollY < 10;

      // Update scrolled state
      setScrolled(currentScrollY > 0);

      // Determine scroll direction and hide/show nav accordingly
      if (currentScrollY > lastScrollY && !isAtTop && !isOpen) {
        // Scrolling down - hide the navbar
        setHidden(true);
      } else {
        // Scrolling up or at the top - show the navbar
        setHidden(false);
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/assets", label: "Assets" },
    { href: "/advisor", label: "Advisor" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0b0a0a]/80 backdrop-blur-md border-b border-gray-800"
            : "bg-[#0b0a0a] border-b border-[#0b0a0a]"
        } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 z-[60] relative"
            >
              <span className="text-xl font-bold">
                Stellar<span className="text-blue-500">Wealth</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {isSignedIn ? (
                // Signed-in view
                <>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-sm font-medium transition-colors ${
                        pathname === link.href
                          ? "text-blue-500"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="relative group">
                    <button className="p-2 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-300" />
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-[#1c1c1c] rounded-md shadow-lg border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="p-2">
                        <button
                          onClick={toggleAuthState}
                          className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-white/10 rounded-md flex items-center space-x-2"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // Signed-out view
                <>
                  <Link href="/signin">
                    <button className="text-gray-300 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                      Sign In
                    </button>
                  </Link>
                  <Link href="/signup">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors z-[60] relative"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 translate-y-[0.1875rem]"
                      : "-translate-y-[0.1875rem]"
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                    isOpen
                      ? "-rotate-45 -translate-y-[0.1875rem]"
                      : "translate-y-[0.1875rem]"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0b0a0a] z-[55] transition-all duration-300 md:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
            <div className="text-xl font-bold">
              Stellar<span className="text-blue-500">Wealth</span>
            </div>
            <button
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {isSignedIn ? (
                // Signed-in mobile view
                <>
                  <div className="space-y-6 mb-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block text-xl font-medium transition-colors py-2 ${
                          pathname === link.href
                            ? "text-blue-500"
                            : "text-gray-300 hover:text-white"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="space-y-6 mt-12">
                    <button
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-2 w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="w-5 h-5" />
                      <span className="text-lg font-medium">Profile</span>
                    </button>
                    <button
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors py-2 w-full"
                      onClick={() => {
                        toggleAuthState();
                        setIsOpen(false);
                      }}
                    >
                      <LogOut className="w-5 h-5" />
                      <span className="text-lg font-medium">Sign Out</span>
                    </button>
                  </div>
                </>
              ) : (
                // Signed-out mobile view
                <div className="space-y-6 mt-8">
                  <Link href="/signin" className="block w-full">
                    <button
                      className="border border-gray-700 text-white px-4 py-3 rounded-full text-lg font-medium transition-colors w-full hover:bg-white/10"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign In
                    </button>
                  </Link>
                  <Link href="/signup" className="block w-full">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full text-lg font-medium transition-colors w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
