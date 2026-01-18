import { Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Motivation", href: "#motivation" },
    { name: "Features", href: "#features" },
    { name: "Team", href: "#team" },
    { name: "FAQ", href: "#faq" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Github", icon: Github, href: "#" },
  ];

  return (
    <footer className="bg-[#F5F5F5] border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1: Logo and Mascot */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-[#4A4A4A]">rambl</span>
              {/* Mini mascot */}
              <div className="w-10 h-10 bg-[#7EC8E3] rounded-blob animate-blob-wobble flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-1.5 h-2 bg-white rounded-full" />
                  <div className="w-1.5 h-2 bg-white rounded-full" />
                </div>
              </div>
            </div>
            <p className="text-[#7A7A7A] leading-relaxed mb-6 max-w-xs">
              A safe space for your thoughts. Ramble freely, without judgment.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#7A7A7A] hover:bg-[#7EC8E3] hover:text-white transition-all duration-300 shadow-soft"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-lg font-bold text-[#4A4A4A] mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#7A7A7A] hover:text-[#7EC8E3] transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support / Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-[#4A4A4A] mb-4">Stay Connected</h3>
            <p className="text-[#7A7A7A] mb-4">
              Get updates on new features and mental health resources.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-white rounded-[50px] border border-[#E5E5E5] focus:outline-none focus:border-[#7EC8E3] transition-colors text-[#4A4A4A] placeholder:text-[#AAAAAA]"
              />
              <button className="px-6 py-3 bg-[#7EC8E3] text-white font-bold rounded-[50px] hover:bg-[#5BA3C0] transition-colors shadow-pastel-blue">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5E5E5] mt-12 pt-8">
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-[#7A7A7A]">
              © 2026 Rambl. All Rights Reserved.
            </div>
            <div className="flex items-center gap-2 text-[#7A7A7A]">
              <span>Made with</span>
              <span className="text-[#FFAEBC] animate-pulse-soft">♥</span>
              <span>and good vibes</span>
              <span className="text-lg">✨</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
