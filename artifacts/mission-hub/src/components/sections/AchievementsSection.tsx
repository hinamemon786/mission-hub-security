

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { resumeData } from "@/lib/data";

const colorMap: Record<string, { border: string; glow: string; text: string }> = {
  gold: { border: "#ffdd57", glow: "#ffdd5730", text: "#ffdd57" },
  silver: { border: "#00d4ff", glow: "#00d4ff30", text: "#00d4ff" },
  bronze: { border: "#ff8c42", glow: "#ff8c4230", text: "#ff8c42" },
};

export function AchievementsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="achievements" className="py-24 bg-[#0a0a0f]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[#00ff88] text-sm mb-2">
            <span className="text-[#555577]">03.</span> achievements
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            CTF <span className="text-gradient-green">Victories</span>
          </h2>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {resumeData.achievements.map((achievement, i) => {
            const colors = colorMap[achievement.color] ?? colorMap.silver;
            return (
              <motion.div
                key={achievement.event}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative bg-[#0f0f1a] border rounded-xl p-6 overflow-hidden group transition-all duration-300"
                style={{
                  borderColor: `${colors.border}40`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.border;
                  e.currentTarget.style.boxShadow = `0 0 30px ${colors.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${colors.border}40`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Rank badge */}
                <div
                  className="text-3xl mb-4 font-bold font-mono"
                  style={{ color: colors.text }}
                >
                  {achievement.rank}
                </div>

                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: colors.text }}
                >
                  {achievement.event}
                </h3>

                <p className="text-[#555577] font-mono text-xs mb-3">
                  {achievement.year}
                </p>

                <p className="text-[#8888aa] text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {/* Corner decoration */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 opacity-5"
                  style={{
                    background: `radial-gradient(circle at top right, ${colors.border}, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bootcamps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[#0f0f1a] border border-[#1e1e3a] rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#1e1e3a]">
            <div className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
            <span className="font-mono text-xs text-[#555577]">
              ls ~/bootcamps-and-workshops/
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            {resumeData.bootcamps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.04 }}
                className="flex items-start gap-2 py-1"
              >
                <span className="text-[#00ff88] font-mono text-xs mt-0.5 flex-shrink-0">
                  ▸
                </span>
                <span className="text-[#8888aa] font-mono text-xs">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
