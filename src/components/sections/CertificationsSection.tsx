"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award } from "lucide-react";
import { resumeData } from "@/lib/data";

export function CertificationsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="py-24 bg-[#0a0a0f]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[#00ff88] text-sm mb-2">
            <span className="text-[#555577]">05.</span> certifications
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            My <span className="text-gradient-green">Credentials</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {resumeData.certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[#0f0f1a] border border-[#1e1e3a] rounded-xl p-6 hover:border-[#00d4ff]/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg border border-[#00d4ff]/30 flex items-center justify-center group-hover:border-[#00d4ff] transition-colors">
                  <Award className="w-5 h-5 text-[#00d4ff]" />
                </div>
                <span className="font-mono text-xs text-[#555577]">
                  {cert.year}
                </span>
              </div>

              <h3
                className="text-base font-bold text-[#e8e8f0] mb-1 group-hover:text-[#00d4ff] transition-colors"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {cert.name}
              </h3>

              <p className="font-mono text-xs text-[#00d4ff]/60 mb-3">
                {cert.issuer}
              </p>

              <p className="text-[#8888aa] text-sm leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
