import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Bilal Ahmed",
    role: "CTO, TechStore Pakistan",
    company: "E-Commerce",
    text: "Mission Hub found 45 critical vulnerabilities in our platform that had been there for years. Their report was detailed, professional, and the retest was completed within a week. Highly recommended.",
    rating: 5,
    initials: "BA",
    color: "#00ff88",
  },
  {
    name: "Sana Malik",
    role: "Head of IT, National Bank Branch",
    company: "Banking & Finance",
    text: "We needed ISO 27001 aligned pentest reports for our compliance audit. Mission Hub delivered exactly that — professional, thorough, and on time. Our auditors were impressed.",
    rating: 5,
    initials: "SM",
    color: "#00d4ff",
  },
  {
    name: "Usman Tariq",
    role: "Founder, HealthTech Startup",
    company: "Healthcare",
    text: "As a startup, we couldn't afford to ignore security. The Startup Scan package was perfect — affordable, fast, and gave us everything we needed to fix our vulnerabilities before launch.",
    rating: 5,
    initials: "UT",
    color: "#7c3aed",
  },
];

const clientLogos = [
  { name: "E-Commerce Platform", industry: "Retail" },
  { name: "Fortune 500 Fintech", industry: "Finance" },
  { name: "Healthcare Network", industry: "Healthcare" },
  { name: "Govt. Organization", industry: "Public Sector" },
  { name: "SaaS Startup", industry: "Technology" },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#0f0f1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted By logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 text-sm font-mono uppercase tracking-widest mb-8">
            Trusted By Organizations Across Pakistan
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="px-5 py-3 rounded-lg border border-[#1e1e3a] bg-[#0a0a0f] text-center"
              >
                <p className="text-white text-sm font-semibold">{client.name}</p>
                <p className="text-gray-500 text-xs">{client.industry}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-xs">
            *Client names withheld under NDA. References available upon request.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400">Real feedback from real security assessments</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-xl border border-[#1e1e3a] bg-[#0a0a0f] relative group hover:border-opacity-50 transition-all duration-300"
              style={{ borderColor: `${t.color}20` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 opacity-10" style={{ color: t.color }} />

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#ff9900] text-[#ff9900]" />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-black flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                  <p className="text-xs font-mono mt-0.5" style={{ color: t.color }}>
                    {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
