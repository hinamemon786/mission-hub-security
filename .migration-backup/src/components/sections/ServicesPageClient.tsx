"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/constants/services";
import { useState } from "react";

export function ServicesPageClient({ services: allServices }: { services: typeof services }) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">
                Cybersecurity Services
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Enterprise-grade security solutions tailored to protect your business infrastructure and digital assets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {allServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <button
                  onClick={() =>
                    setExpandedId(expandedId === service.id ? null : service.id)
                  }
                  className="w-full text-left p-6 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a] hover:border-[#00ff88]/50 hover:bg-[#0f0f1a]/80 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-3xl">{service.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {service.name}
                          </h3>
                          <p className="text-[#00ff88] text-sm font-mono">
                            {service.price}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {service.description}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <ArrowRight
                        className={`w-5 h-5 text-[#00ff88] transition-transform ${
                          expandedId === service.id ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded content */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                      expandedId === service.id
                        ? { opacity: 1, height: "auto" }
                        : { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 pt-6 border-t border-[#1e1e3a] space-y-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2">
                          Overview
                        </h4>
                        <p className="text-gray-400 text-sm whitespace-pre-line">
                          {service.longDescription}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-2">
                          What's Included
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3 text-gray-400 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-[#00ff88] flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 bg-[#1e1e3a]/50 rounded-lg">
                          <p className="text-xs text-gray-500 mb-1">Timeline</p>
                          <p className="text-[#00ff88] font-semibold">
                            {service.timeline}
                          </p>
                        </div>
                        <div className="p-4 bg-[#1e1e3a]/50 rounded-lg">
                          <p className="text-xs text-gray-500 mb-1">Price</p>
                          <p className="text-[#00d4ff] font-semibold">
                            {service.price}
                          </p>
                        </div>
                      </div>

                      <Link
                        href="/quote"
                        className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all"
                      >
                        Request This Service
                      </Link>
                    </div>
                  </motion.div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0f0f1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-400 mb-8">
            Get a free consultation with our security experts to find the right solution for your organization.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
