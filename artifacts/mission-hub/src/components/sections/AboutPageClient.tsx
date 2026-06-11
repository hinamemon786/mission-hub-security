

import { motion } from "framer-motion";

import { team, certifications } from "@/lib/constants/team";

export function AboutPageClient() {
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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">
                Mission Hub
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Founded on principles of trust, expertise, and dedication to cybersecurity excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#0f0f1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To provide world-class cybersecurity solutions that protect Pakistani
                organizations from cyber threats. We empower businesses to operate
                securely in the digital world through expert guidance, advanced tools,
                and dedicated support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To be the most trusted cybersecurity partner for businesses across
                Pakistan, recognized for our expertise, integrity, and commitment to
                excellence. We envision a safer digital ecosystem where organizations
                can thrive without fear of cyber attacks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Expert Team</h2>
            <p className="text-gray-400">Meet the cybersecurity professionals behind Mission Hub</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a] hover:border-[#00ff88]/50 transition-all duration-300"
              >
                <div className="mb-4 w-full h-48 bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 rounded-lg overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#00ff88] text-sm font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-gray-500 mb-3">{member.expertise}</p>
                <p className="text-sm text-gray-400 mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="text-xs px-2 py-1 bg-[#00ff88]/10 text-[#00ff88] rounded"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-[#0f0f1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
            <p className="text-gray-400">Industry-recognized credentials from leading organizations</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-[#1e1e3a] bg-[#0a0a0f] hover:border-[#00ff88]/50 transition-all duration-300 text-center group"
              >
                {/* Org logo with color-tinted fallback */}
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                >
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      const img = e.currentTarget;
                      img.style.display = "none";
                      const fallback = img.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-10 h-10 rounded-lg items-center justify-center text-xs font-black hidden"
                    style={{ color: cert.color, display: "none" }}
                  >
                    {cert.name.slice(0, 3)}
                  </div>
                </div>
                <h4
                  className="text-base font-bold text-white mb-1 group-hover:transition-colors"
                  style={{ color: "white" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = cert.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  {cert.name}
                </h4>
                <p className="text-xs text-gray-400 mb-1">{cert.fullName}</p>
                <p className="text-xs font-mono" style={{ color: `${cert.color}99` }}>{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
