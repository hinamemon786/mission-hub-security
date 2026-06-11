

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Expert Team",
    description:
      "Certified security professionals with 15+ years of combined experience.",
  },
  {
    icon: Lock,
    title: "Advanced Tools",
    description:
      "Latest penetration testing tools and vulnerability scanning technologies.",
  },
  {
    icon: Eye,
    title: "Comprehensive Reports",
    description:
      "Detailed findings with actionable recommendations and remediation strategies.",
  },
  {
    icon: AlertTriangle,
    title: "Real-World Scenarios",
    description:
      "Simulated attacks that mimic real-world threats to your systems.",
  },
  {
    icon: CheckCircle,
    title: "Compliance Certified",
    description:
      "OWASP, ISO 27001, PCI-DSS, and other compliance frameworks support.",
  },
  {
    icon: Zap,
    title: "24/7 Support",
    description:
      "Round-the-clock monitoring and emergency incident response team.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-[#0f0f1a] relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Mission Hub?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We deliver enterprise-grade security solutions trusted by businesses across Pakistan.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#00ff88]/10 group-hover:bg-[#00ff88]/20 transition-colors">
                      <Icon className="h-6 w-6 text-[#00ff88]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 p-8 rounded-xl border border-[#00ff88]/20 bg-[#00ff88]/5"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Trusted by Leading Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#00ff88] mb-2">50+</div>
              <p className="text-gray-400 text-sm">Organizations Secured</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#00d4ff] mb-2">400+</div>
              <p className="text-gray-400 text-sm">Vulnerabilities Fixed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#7c3aed] mb-2">99.8%</div>
              <p className="text-gray-400 text-sm">Uptime</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#ff3860] mb-2">15+</div>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
