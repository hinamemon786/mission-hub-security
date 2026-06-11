

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, GitBranch, Shield } from "lucide-react";
import { resumeData } from "@/lib/data";

export function ProjectsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-24 bg-[#0f0f1a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[#00ff88] text-sm mb-2">
            <span className="text-[#555577]">04.</span> projects
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            What I&apos;ve <span className="text-gradient-green">Built</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {resumeData.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative bg-[#0a0a0f] border border-[#1e1e3a] rounded-xl p-6 hover:border-[#00ff88]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.08)]"
            >
              {/* Top bar */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg border border-[#00ff88]/30 flex items-center justify-center group-hover:border-[#00ff88] transition-colors">
                  <Shield className="w-5 h-5 text-[#00ff88]" />
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-xs px-2 py-1 rounded border"
                    style={{
                      borderColor:
                        project.status === "Ongoing"
                          ? "#ffdd5740"
                          : "#00ff8840",
                      color:
                        project.status === "Ongoing" ? "#ffdd57" : "#00ff88",
                    }}
                  >
                    {project.status}
                  </span>
                  <GitBranch className="w-4 h-4 text-[#555577] group-hover:text-[#8888aa] transition-colors" />
                </div>
              </div>

              <h3
                className="text-lg font-bold text-[#e8e8f0] mb-2 group-hover:text-[#00ff88] transition-colors"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {project.title}
              </h3>

              <p className="font-mono text-xs text-[#555577] mb-3">
                {project.year}
              </p>

              <p className="text-[#8888aa] text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-0.5 bg-[#00ff88]/5 border border-[#00ff88]/15 text-[#00ff88]/70 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
