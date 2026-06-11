"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/lib/constants/caseStudies";
import { BadgeAlert, TrendingUp } from "lucide-react";

export function CaseStudiesPageClient({ caseStudies: cases }: { caseStudies: typeof caseStudies }) {
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
              Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">
                Studies
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real-world security assessments and successful vulnerability remediations from organizations across Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {cases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a] hover:border-[#00ff88]/50 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Left: Basic Info */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {caseStudy.title}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">CLIENT</p>
                        <p className="text-[#00ff88] font-semibold">
                          {caseStudy.client}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">INDUSTRY</p>
                        <p className="text-white">{caseStudy.industry}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">DATE</p>
                        <p className="text-white">
                          {new Date(caseStudy.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                          })}
                        </p>
                      </div>
                      {caseStudy.nda && (
                        <div className="p-2 bg-[#1e1e3a]/50 rounded border border-[#ff3860]/30">
                          <p className="text-xs text-[#ff3860]">* NDA Protected Details</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Middle: Challenge & Results */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Challenge</h4>
                    <p className="text-gray-400 text-sm mb-6">
                      {caseStudy.challengeOverview}
                    </p>

                    <h4 className="text-white font-semibold mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.slice(0, 3).map((result, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-gray-400 text-sm"
                        >
                          <span className="text-[#00ff88] mt-1">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Metrics */}
                  <div>
                    <div className="space-y-4">
                      <div className="p-4 bg-[#1e1e3a]/50 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <BadgeAlert className="w-4 h-4 text-[#ff3860]" />
                          <p className="text-xs text-gray-500">VULNERABILITIES</p>
                        </div>
                        <p className="text-2xl font-bold text-white">
                          {caseStudy.vulnerabilitiesFound}
                        </p>
                        <p className="text-xs text-[#ff3860] mt-1">
                          {caseStudy.criticalVulnerabilities} Critical
                        </p>
                      </div>

                      <div className="p-4 bg-[#1e1e3a]/50 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <TrendingUp className="w-4 h-4 text-[#00ff88]" />
                          <p className="text-xs text-gray-500">IMPACT</p>
                        </div>
                        <p className="text-[#00ff88] font-semibold text-sm">
                          {caseStudy.result}
                        </p>
                      </div>

                      <div className="p-4 bg-[#1e1e3a]/50 rounded-lg">
                        <p className="text-xs text-gray-500 mb-2">SERVICES</p>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.services.slice(0, 2).map((service, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2 py-1 bg-[#00ff88]/10 text-[#00ff88] rounded"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="mt-4 p-4 bg-[#00ff88]/5 rounded-lg border border-[#00ff88]/20">
                      <p className="text-sm text-gray-400 italic mb-2">
                        "{caseStudy.testimonial}"
                      </p>
                      <p className="text-xs text-[#00ff88] font-semibold">
                        — {caseStudy.testimonialAuthor}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
