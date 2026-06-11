import { Link } from "wouter";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Shield,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f1a] border-t border-[#00ff88]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-[#00ff88]" />
              <span className="text-lg font-bold text-white">Mission Hub</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Comprehensive cybersecurity solutions for Pakistani businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services" className="hover:text-[#00ff88] transition">
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00ff88] transition">
                  Security Audit
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00ff88] transition">
                  SOC as a Service
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00ff88] transition">
                  Incident Response
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-[#00ff88] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-[#00ff88] transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#00ff88] transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00ff88] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#00ff88]" />
                <a
                  href="tel:+923001234567"
                  className="hover:text-[#00ff88] transition"
                >
                  +92 300 123 4567
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#00ff88]" />
                <a
                  href="mailto:support@missionhub.com"
                  className="hover:text-[#00ff88] transition"
                >
                  support@missionhub.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#00ff88] mt-1 flex-shrink-0" />
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="border-t border-[#1e1e3a] pt-8 pb-4">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[
              "✅ ISO 27001 Aligned Process",
              "🔒 NDA Available",
              "🏆 Pakistan's #1 Ethical Hacking Firm",
              "⚡ 24/7 Incident Response",
              "📋 CEH & OSCP Certified",
            ].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded-full text-xs border border-[#00ff88]/20 bg-[#00ff88]/5 text-gray-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e1e3a] py-8">
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00ff88] transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00ff88] transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00ff88] transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>
              © {currentYear} Mission Hub Digital Solution. All rights reserved.
            </p>
            <p className="mt-2">
              <a href="#" className="hover:text-[#00ff88] transition">
                Privacy Policy
              </a>
              {" | "}
              <a href="#" className="hover:text-[#00ff88] transition">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
