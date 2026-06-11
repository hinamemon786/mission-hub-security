"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { resumeData } from "@/lib/data";

export function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: connect to Resend, EmailJS, or Formspree
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0f0f1a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-[#00ff88] text-sm mb-2">
            <span className="text-[#555577]">06.</span> contact
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Get In <span className="text-gradient-green">Touch</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#8888aa] text-lg leading-relaxed mb-8">
              Open for internship opportunities, bug bounty collaborations, CTF
              teams, and cybersecurity research. Let&apos;s connect!
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: resumeData.email,
                  href: `mailto:${resumeData.email}`,
                  color: "#00ff88",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "hina-memon-157896376",
                  href: resumeData.linkedin,
                  color: "#00d4ff",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: resumeData.location,
                  href: undefined,
                  color: "#7c3aed",
                },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 bg-[#0a0a0f] border border-[#1e1e3a] rounded-lg hover:border-[#00ff88]/30 transition-all group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[#555577]">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-[#e8e8f0] hover:text-[#00ff88] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-mono text-sm text-[#e8e8f0]">
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {sent ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-mono text-[#00ff88] text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#8888aa] text-sm">
                    I&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <div>
                  <label className="font-mono text-xs text-[#555577] mb-1 block">
                    // name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#0a0a0f] border border-[#1e1e3a] rounded-lg px-4 py-3 font-mono text-sm text-[#e8e8f0] focus:border-[#00ff88]/50 focus:outline-none transition-colors placeholder:text-[#333355]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-[#555577] mb-1 block">
                    // email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full bg-[#0a0a0f] border border-[#1e1e3a] rounded-lg px-4 py-3 font-mono text-sm text-[#e8e8f0] focus:border-[#00ff88]/50 focus:outline-none transition-colors placeholder:text-[#333355]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-[#555577] mb-1 block">
                    // message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full bg-[#0a0a0f] border border-[#1e1e3a] rounded-lg px-4 py-3 font-mono text-sm text-[#e8e8f0] focus:border-[#00ff88]/50 focus:outline-none transition-colors placeholder:text-[#333355] resize-none"
                    placeholder="Say something..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#00ff88] text-black font-mono font-bold text-sm rounded-lg hover:bg-[#00cc6a] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
