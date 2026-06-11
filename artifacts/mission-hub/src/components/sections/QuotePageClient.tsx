

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { services } from "@/lib/constants/services";
import { CheckCircle, AlertCircle } from "lucide-react";

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  services: string[];
  budget: string;
  timeline: string;
  message: string;
  paymentMethod: string;
}

export function QuotePageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const { register, handleSubmit, reset } = useForm<QuoteFormData>();

  const toggleService = (id: number) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    try {
      const formData = { ...data, services: selectedServices };
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        reset();
        setSelectedServices([]);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error("Error submitting quote:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting quote:", error);
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
              Request a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">
                Security Quote
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get a personalized security assessment and quote tailored to your organization's needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 px-8 rounded-xl border border-[#00ff88]/50 bg-[#00ff88]/5"
            >
              <CheckCircle className="w-16 h-16 text-[#00ff88] mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2">
                Quote Request Submitted!
              </h2>
              <p className="text-gray-400 mb-4">
                Thank you for choosing Mission Hub. Our team will review your request and contact you within 24 hours with a customized quote and security assessment plan.
              </p>
              <p className="text-sm text-gray-500">
                Check your email for confirmation. You can also reach us on WhatsApp for urgent matters.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Organization Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a]"
              >
                <h3 className="text-xl font-bold text-white mb-6">
                  Organization Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Full Name *
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
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      className="w-full px-4 py-2 bg-[#1e1e3a] border border-[#1e1e3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      {...register("phone", { required: true })}
                      className="w-full px-4 py-2 bg-[#1e1e3a] border border-[#1e1e3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors"
                      placeholder="+92 300 000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      {...register("company", { required: true })}
                      className="w-full px-4 py-2 bg-[#1e1e3a] border border-[#1e1e3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Industry *
                    </label>
                    <select
                      {...register("industry")}
                      className="w-full px-4 py-2 bg-[#1e1e3a] border border-[#1e1e3a] rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors"
                    >
                      <option value="">Select industry</option>
                      <option value="banking">Banking & Finance</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="government">Government</option>
                      <option value="tech">Technology</option>
                      <option value="retail">Retail</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Budget *
                    </label>
                    <select
                      {...register("budget")}
                      className="w-full px-4 py-2 bg-[#1e1e3a] border border-[#1e1e3a] rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="50k">PKR 50,000 - 100,000</option>
                      <option value="100k">PKR 100,000 - 250,000</option>
                      <option value="250k">PKR 250,000 - 500,000</option>
                      <option value="500k">PKR 500,000+</option>
                    </select>
                  </div>
                </div>
              </motion.div>

              {/* Services Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a]"
              >
                <h3 className="text-xl font-bold text-white mb-6">
                  Required Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className={`p-4 rounded-lg border transition-all text-left ${
                        selectedServices.includes(service.id)
                          ? "border-[#00ff88] bg-[#00ff88]/10"
                          : "border-[#1e1e3a] bg-[#0f0f1a] hover:border-[#00ff88]/50"
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                            selectedServices.includes(service.id)
                              ? "border-[#00ff88] bg-[#00ff88]"
                              : "border-[#555577]"
                          }`}
                        >
                          {selectedServices.includes(service.id) && (
                            <svg
                              className="w-3 h-3 text-black"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">
                            {service.name}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Timeline & Payment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a]"
              >
                <h3 className="text-xl font-bold text-white mb-6">
                  Project Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Timeline *
                    </label>
                    <select
                      {...register("timeline")}
                      className="w-full px-4 py-2 bg-[#1e1e3a] border border-[#1e1e3a] rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (Emergency)</option>
                      <option value="2weeks">Within 2 weeks</option>
                      <option value="month">Within a month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Payment Method *
                    </label>
                    <select
                      {...register("paymentMethod")}
                      className="w-full px-4 py-2 bg-[#1e1e3a] border border-[#1e1e3a] rounded-lg text-white focus:outline-none focus:border-[#00ff88] transition-colors"
                    >
                      <option value="">Select method</option>
                      <option value="bank">Bank Transfer</option>
                      <option value="jazzcash">JazzCash</option>
                      <option value="easypay">EasyPaisa</option>
                      <option value="credit">Credit Card</option>
                      <option value="installment">Installment Plan</option>
                    </select>
                  </div>
                </div>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a]"
              >
                <h3 className="text-xl font-bold text-white mb-6">
                  Additional Information
                </h3>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Project Description
                  </label>
                  <textarea
                    rows={5}
                    {...register("message")}
                    className="w-full px-4 py-2 bg-[#1e1e3a] border border-[#1e1e3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors resize-none"
                    placeholder="Describe your security needs, current infrastructure, and any specific concerns..."
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting || selectedServices.length === 0}
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit Quote Request"}
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Our team will contact you within 24 hours to discuss your security needs and provide a detailed quote.
                </p>
              </motion.div>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0f0f1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How long does the quote process take?",
                a: "We typically provide a detailed quote within 24 hours of receiving your request.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept bank transfers, JazzCash, EasyPaisa, credit cards, and offer flexible installment plans.",
              },
              {
                q: "Do you offer discounts for multiple services?",
                a: "Yes, we offer package discounts for combined services. Our team will discuss options during the consultation.",
              },
              {
                q: "Can I modify my quote after submitting it?",
                a: "Absolutely! Your quote is customizable. You can discuss changes with our team during the consultation call.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 rounded-lg border border-[#1e1e3a] bg-[#0a0a0f]"
              >
                <h4 className="text-white font-semibold mb-2">{faq.q}</h4>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
