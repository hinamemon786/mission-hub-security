import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Lock } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 flex items-center overflow-hidden bg-[#0a0a0f]">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 136, 0.15), transparent 50%)`,
        }}
      />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-[#00ff88]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-xs text-[#00ff88] font-mono">
              Cybersecurity Solutions
            </span>
          </motion.div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">
              Secure Your Business
            </span>
            <br />
            <span>From Cyber Threats</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
            Mission Hub Digital Solution provides comprehensive cybersecurity services
            including penetration testing, vulnerability assessment, SOC setup, and
            incident response. Protect your organization with expert security audits
            and 24/7 monitoring.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-center md:text-left">
            <div>
              <div className="text-2xl font-bold text-[#00ff88]">400+</div>
              <div className="text-xs text-gray-400">Vulnerabilities Fixed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#00d4ff]">50+</div>
              <div className="text-xs text-gray-400">Clients Protected</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#7c3aed]">24/7</div>
              <div className="text-xs text-gray-400">Support Available</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all duration-300"
            >
              <Shield className="w-5 h-5" />
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-lg border border-[#00ff88] text-[#00ff88] font-semibold hover:bg-[#00ff88]/10 transition-all duration-300"
            >
              <Lock className="w-5 h-5" />
              <span>Get Free Consultation</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#00ff88]/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#00ff88] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
