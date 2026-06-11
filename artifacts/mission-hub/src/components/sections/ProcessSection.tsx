import { motion } from "framer-motion";
import { Link } from "wouter";
import { MessageCircle, Search, FileCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Free Consultation",
    description:
      "Book a 30-minute call with our security expert. We understand your business, infrastructure, and security goals — completely free, no commitment.",
    color: "#00ff88",
  },
  {
    number: "02",
    icon: Search,
    title: "Scan & Test",
    description:
      "Our certified team performs manual penetration testing + automated vulnerability scanning on your systems, web apps, or network.",
    color: "#00d4ff",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Fix + Detailed Report",
    description:
      "You receive a professional PDF report with all findings, risk ratings (Critical/High/Medium/Low), and step-by-step remediation guidance. One free retest included.",
    color: "#7c3aed",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-[#0f0f1a] relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00ff88]/5 rounded-full blur-3xl"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5 text-[#00ff88] text-xs font-mono mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple 3-Step Process
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From first contact to a secured system — clear, fast, and professional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-[#00ff88]/40 via-[#00d4ff]/40 to-[#7c3aed]/40" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="p-8 rounded-xl border border-[#1e1e3a] bg-[#0a0a0f] hover:border-opacity-60 transition-all duration-300 h-full"
                  style={{ borderColor: `${step.color}30` }}
                >
                  {/* Step number */}
                  <div className="text-6xl font-black mb-4 opacity-10" style={{ color: step.color }}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 -mt-10"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: step.color }} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

                  {index < steps.length - 1 && (
                    <ArrowRight
                      className="hidden md:block absolute -right-5 top-16 w-5 h-5 text-gray-600 z-10"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/quote"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-bold hover:shadow-lg hover:shadow-[#00ff88]/40 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Book Free Consultation Now</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
