import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/constants/services";

export function ServicesOverview() {
  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,136,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,136,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Cybersecurity Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive security solutions designed to protect your business from evolving cyber threats.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a]/50 hover:border-[#00ff88]/50 hover:bg-[#0f0f1a] transition-all duration-300 hover:shadow-lg hover:shadow-[#00ff88]/10"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 2).map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-gray-500 flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#00ff88]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Link */}
              <Link
                href="/services"
                className="inline-flex items-center space-x-2 text-[#00ff88] hover:text-[#00d4ff] transition-colors group/link"
              >
                <span className="text-sm font-medium">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all services link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg border border-[#00ff88]/50 text-[#00ff88] font-semibold hover:bg-[#00ff88]/10 transition-all duration-300"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
