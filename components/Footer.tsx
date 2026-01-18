import React from "react";
import { Smile } from "lucide-react";

const Footer = () => {
  return (
    // Matches the light gray background from the image
    <footer className="bg-[#E5E5E5] text-gray-700 py-12 border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Top Section: Logo & Columns --- */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          {/* Left: Brand / Logo */}
          <div className="flex items-center gap-3 mb-8 md:mb-0">
            <span className="text-4xl font-bold text-[#334155] tracking-tight">
              rambl
            </span>
            {/* Smiley Face Icon Box */}
            <div className="w-10 h-10 bg-[#93C5FD] rounded-lg flex items-center justify-center shadow-sm">
              <Smile className="text-[#1E293B]" size={24} strokeWidth={2.5} />
            </div>
          </div>

          {/* Right: Navigation Columns */}
          <div className="flex flex-row gap-16 md:gap-24">
            {/* Column 1: Navigation */}
            <div className="flex flex-col items-center md:items-end">
              <h3 className="font-bold text-xl text-[#1e3a8a] mb-4">
                Navigation
              </h3>
              <ul className="space-y-2 text-center md:text-right">
                <li>
                  <a
                    href="#home"
                    className="hover:text-black transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#motivation"
                    className="hover:text-black transition-colors"
                  >
                    Motivation
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-black transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="hover:text-black transition-colors"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-black transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Social Media */}
            <div className="flex flex-col items-center md:items-end">
              <h3 className="font-bold text-xl text-[#1e3a8a] mb-4">
                Social Media
              </h3>
              <ul className="space-y-2 text-center md:text-right">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Divider Line --- */}
        <div className="border-t border-gray-400 mb-8 opacity-50"></div>

        {/* --- Bottom Section: Copyright --- */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium text-black">
          <div className="mb-4 md:mb-0">© 2026 Rambl. All Rights Reserved.</div>
          <div>Made with Sean Jin</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
