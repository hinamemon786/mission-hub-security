"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Shield, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#00ff88]/20"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Shield className="w-8 h-8 text-[#00ff88] group-hover:text-[#00d4ff] transition-colors" />
            <span className="text-xl font-bold text-white hidden sm:inline">
              Mission Hub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-300 hover:text-[#00ff88] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#00ff88]/10 hover:bg-[#00ff88]/20 text-[#00ff88] transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Chat Now</span>
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">Get Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-[#00ff88]/20 bg-[#0f0f1a]"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-gray-300 hover:text-[#00ff88] transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="space-y-2 pt-4 border-t border-[#1e1e3a]">
                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-4 py-2 rounded-lg bg-[#00ff88]/10 text-[#00ff88] transition-all"
                  >
                    Chat on WhatsApp
                  </a>
                  <Link
                    href="/quote"
                    className="block text-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
