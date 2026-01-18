"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Wind } from "lucide-react";

// 1. Optional: Define a type for your link objects for better safety
type NavLink = {
  name: string;
  href: string;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("#home");

  const navLinks: NavLink[] = [
    { name: "Home", href: "#home" },
    { name: "Motivation", href: "#motivation" },
    { name: "Features", href: "#features" },
    { name: "Team", href: "#team" },
    { name: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    // 2. FIX: Add type 'IntersectionObserverEntry[]' for entries
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navLinks]); // Added navLinks to dependency array for safety

  // 3. FIX: Add type 'React.MouseEvent' for the event and 'string' for href
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab(href);
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="#home"
            // We cast the event here to satisfy the handler
            onClick={(e) =>
              handleLinkClick(
                e as unknown as React.MouseEvent<HTMLAnchorElement>,
                "#home",
              )
            }
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full bg-[#FFAEBC] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Wind size={18} className="text-white" />
            </div>
            <span className="font-black text-xl tracking-tighter text-gray-800">
              Rambl
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-bold transition-colors duration-200 cursor-pointer ${
                  activeTab === link.href
                    ? "text-[#FFAEBC]"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button className="px-5 py-2.5 bg-[#4A4A4A] text-white text-sm font-bold rounded-xl shadow-lg hover:bg-black hover:-translate-y-0.5 transition-all duration-200">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block px-3 py-3 rounded-xl text-base font-bold transition-colors ${
                  activeTab === link.href
                    ? "bg-[#FFF9F1] text-[#FFAEBC]"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <button className="w-full py-3 bg-[#4A4A4A] text-white font-bold rounded-xl shadow-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
