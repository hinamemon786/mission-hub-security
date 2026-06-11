import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, FileText, Download } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-[#00ff88]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Get a free security consultation from our expert team. We'll assess your current security posture and provide actionable recommendations.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {/* Get Free Quote */}
          <Link
            href="/quote"
            className="group p-8 rounded-xl border border-[#00ff88]/30 bg-[#0f0f1a] hover:bg-[#00ff88]/5 hover:border-[#00ff88] transition-all duration-300"
          >
            <FileText className="w-10 h-10 text-[#00ff88] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2">Get Free Quote</h3>
            <p className="text-gray-400 text-sm mb-4">
              Request a customized security quote for your organization.
            </p>
            <div className="inline-flex items-center space-x-2 text-[#00ff88] group-hover:text-[#00d4ff] transition-colors">
              <span className="text-sm font-medium">Start Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Chat on WhatsApp */}
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-xl border border-[#00d4ff]/30 bg-[#0f0f1a] hover:bg-[#00d4ff]/5 hover:border-[#00d4ff] transition-all duration-300"
          >
            <MessageCircle className="w-10 h-10 text-[#00d4ff] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2">Chat Now</h3>
            <p className="text-gray-400 text-sm mb-4">
              Connect with our team via WhatsApp for immediate assistance.
            </p>
            <div className="inline-flex items-center space-x-2 text-[#00d4ff] group-hover:text-[#00ff88] transition-colors">
              <span className="text-sm font-medium">Message Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Call Our Hotline */}
          <a
            href="tel:+923001234567"
            className="group p-8 rounded-xl border border-[#7c3aed]/30 bg-[#0f0f1a] hover:bg-[#7c3aed]/5 hover:border-[#7c3aed] transition-all duration-300"
          >
            <Phone className="w-10 h-10 text-[#7c3aed] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2">24/7 Hotline</h3>
            <p className="text-gray-400 text-sm mb-4">
              Call our emergency response team for urgent security matters.
            </p>
            <div className="inline-flex items-center space-x-2 text-[#7c3aed] group-hover:text-[#ff3860] transition-colors">
              <span className="text-sm font-medium">Call Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Sample Report Download */}
          <a
            href="/sample-pentest-report.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-xl border border-[#ff9900]/30 bg-[#0f0f1a] hover:bg-[#ff9900]/5 hover:border-[#ff9900] transition-all duration-300"
          >
            <Download className="w-10 h-10 text-[#ff9900] mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2">Sample Report</h3>
            <p className="text-gray-400 text-sm mb-4">
              Download a sample pentest report to see exactly what you'll receive.
            </p>
            <div className="inline-flex items-center space-x-2 text-[#ff9900] group-hover:text-[#00ff88] transition-colors">
              <span className="text-sm font-medium">View Sample</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm">
            No credit card required • Free consultation • Expert recommendations
          </p>
        </motion.div>
      </div>
    </section>
  );
}
