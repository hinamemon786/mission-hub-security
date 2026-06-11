"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // In production, send this to your API endpoint
      console.log("Form data:", data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">
                Touch
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have questions? Our team is ready to help you secure your organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a]"
            >
              <Phone className="w-8 h-8 text-[#00ff88] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-400 mb-2">+92 300 123 4567</p>
              <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM PKT</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a]"
            >
              <Mail className="w-8 h-8 text-[#00d4ff] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <p className="text-gray-400 mb-2">support@missionhub.com</p>
              <p className="text-sm text-gray-500">We respond within 24 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a]"
            >
              <MessageCircle className="w-8 h-8 text-[#7c3aed] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-gray-400 mb-2">+92 300 123 4567</p>
              <p className="text-sm text-gray-500">Quick responses 24/7</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto p-8 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a]"
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-[#00ff88]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-[#00ff88]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Thank you for reaching out!
                </h3>
                <p className="text-gray-400">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      className="w-full px-4 py-2 bg-[#1e1e3a] border border-[#1e1e3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      className="w-full px-4 py-2 bg-[#1e1e3a] border border-[#1e1e3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      className="w-full px-4 py-2 bg-[#1e1e3a] border border-[#1e1e3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors"
                      placeholder="+92 300 000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      {...register("company")}
                      className="w-full px-4 py-2 bg-[#1e1e3a] border border-[#1e1e3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    {...register("message", { required: true })}
                    className="w-full px-4 py-2 bg-[#1e1e3a] border border-[#1e1e3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors resize-none"
                    placeholder="Tell us about your security needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-[#0f0f1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Clock className="w-8 h-8 text-[#00ff88] mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Business Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
                <li className="text-[#00ff88] font-semibold mt-4">
                  24/7 Emergency Hotline Available
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <MapPin className="w-8 h-8 text-[#00d4ff] mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Location</h3>
              <p className="text-gray-400">
                Mission Hub Digital Solution
                <br />
                Karachi, Pakistan
                <br />
                <br />
                <span className="text-[#00ff88]">Available for remote consultations</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
