"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { resumeData } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "Penetration Testing & Offensive Tools": "#00ff88",
  "OSINT & Reconnaissance": "#00d4ff",
  "Platforms & Labs": "#7c3aed",
  "Programming & Scripting": "#ffdd57",
  "Security Domains": "#ff3860",
};

export function SkillsSection() {
  const [active, setActive] = useState(
    "Penetration Testing & Offensive Tools"
  );
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = Object.keys(resumeData.skills);

  return (
    <section
      id="skills"
      className="py-24 bg-[#0f0f1a]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[#00ff88] text-sm mb-2">
            <span className="text-[#555577]">02.</span> skills
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Technical <span className="text-gradient-green">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-2"
          >
            {categories.map((cat) => {
              const color = categoryColors[cat] ?? "#00ff88";
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className="text-left px-4 py-3 rounded-lg font-mono text-xs transition-all duration-200 border"
                  style={{
                    borderColor: isActive ? color : "#1e1e3a",
                    background: isActive ? `${color}15` : "transparent",
                    color: isActive ? color : "#555577",
                  }}
                >
                  <span style={{ color: isActive ? color : "#333355" }}>
                    &gt;{" "}
                  </span>
                  {cat}
                </button>
              );
            })}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0a0a0f] border border-[#1e1e3a] rounded-xl p-6"
              >
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#1e1e3a]">
                  <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                  <span className="font-mono text-xs text-[#555577]">
                    tools --category=&quot;{active}&quot;
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {(
                    resumeData.skills[
                      active as keyof typeof resumeData.skills
                    ] ?? []
                  ).map((skill, i) => {
                    const color = categoryColors[active] ?? "#00ff88";
                    return (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-3 py-2 rounded-md font-mono text-xs border transition-all duration-200 cursor-default hover:scale-105"
                        style={{
                          borderColor: `${color}30`,
                          color: color,
                          background: `${color}08`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = color;
                          e.currentTarget.style.background = `${color}18`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = `${color}30`;
                          e.currentTarget.style.background = `${color}08`;
                        }}
                      >
                        {skill}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
