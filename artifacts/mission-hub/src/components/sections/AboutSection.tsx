

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, MapPin, Trophy, Code2 } from "lucide-react";
import { resumeData } from "@/lib/data";

const stats = [
  { label: "CTF Competitions", value: "3+", icon: Trophy },
  { label: "Certifications", value: "3", icon: GraduationCap },
  { label: "Tools Mastered", value: "20+", icon: Code2 },
  { label: "Class Rank", value: "2nd", icon: Trophy },
];

export function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-[#0a0a0f]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[#00ff88] text-sm mb-2">
            <span className="text-[#555577]">01.</span> about
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Who Am <span className="text-gradient-green">I?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#0f0f1a] border border-[#1e1e3a] rounded-xl p-6 mb-6">
              {/* Terminal top bar */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1e1e3a]">
                <div className="w-3 h-3 rounded-full bg-[#ff3860]" />
                <div className="w-3 h-3 rounded-full bg-[#ffdd57]" />
                <div className="w-3 h-3 rounded-full bg-[#00ff88]" />
                <span className="ml-2 font-mono text-xs text-[#555577]">
                  hina@quest ~ cat about.txt
                </span>
              </div>

              <p className="text-[#8888aa] leading-relaxed mb-4 font-mono text-sm">
                <span className="text-[#00ff88]">$</span>{" "}
                {resumeData.summary}
              </p>

              <div className="flex flex-col gap-2 font-mono text-xs">
                <div className="flex gap-3">
                  <span className="text-[#00ff88]">university:</span>
                  <span className="text-[#e8e8f0]">{resumeData.universityShort}</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#00ff88]">degree:</span>
                  <span className="text-[#e8e8f0]">B.E. Cybersecurity</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#00ff88]">cgpa:</span>
                  <span className="text-[#e8e8f0]">
                    {resumeData.cgpa} (Class Rank: {resumeData.classRank})
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#00ff88]">year:</span>
                  <span className="text-[#e8e8f0]">
                    {resumeData.semester} ({resumeData.graduationYear})
                  </span>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-3 h-3 text-[#00ff88] mt-0.5 flex-shrink-0" />
                  <span className="text-[#e8e8f0]">{resumeData.location}</span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="flex flex-wrap gap-2">
              {resumeData.interests.map((interest) => (
                <span
                  key={interest}
                  className="font-mono text-xs px-3 py-1 border border-[#7c3aed]/40 text-[#7c3aed] rounded-full hover:border-[#7c3aed] hover:bg-[#7c3aed]/10 transition-all cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-[#0f0f1a] border border-[#1e1e3a] rounded-xl p-6 flex flex-col gap-2 hover:border-[#00ff88]/30 transition-all group"
              >
                <stat.icon className="w-6 h-6 text-[#00ff88]/50 group-hover:text-[#00ff88] transition-colors" />
                <span className="text-3xl font-bold text-gradient-green font-mono">
                  {stat.value}
                </span>
                <span className="text-xs text-[#8888aa] font-mono">
                  {stat.label}
                </span>
              </motion.div>
            ))}

            {/* Languages card */}
            <div className="col-span-2 bg-[#0f0f1a] border border-[#1e1e3a] rounded-xl p-6">
              <p className="font-mono text-xs text-[#555577] mb-3">
                // languages
              </p>
              <div className="flex flex-wrap gap-4">
                {resumeData.languages.map((lang) => (
                  <div key={lang.name} className="flex flex-col">
                    <span className="font-mono text-sm text-[#e8e8f0]">
                      {lang.name}
                    </span>
                    <span className="font-mono text-xs text-[#00ff88]">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
