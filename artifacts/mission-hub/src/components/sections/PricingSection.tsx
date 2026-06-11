import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Star, Zap, Shield } from "lucide-react";

const plans = [
  {
    icon: Zap,
    name: "Startup Scan",
    price: "PKR 15,000",
    priceEng: "~$55 USD",
    tagline: "Best for small businesses & startups",
    color: "#00d4ff",
    popular: false,
    features: [
      "Automated vulnerability scan",
      "Web application assessment",
      "Professional PDF report",
      "Critical findings summary",
      "Email support (48h response)",
      "Basic remediation guidance",
    ],
    cta: "Get Startup Scan",
  },
  {
    icon: Shield,
    name: "Business Pentest",
    price: "PKR 50,000",
    priceEng: "~$180 USD",
    tagline: "Most popular — full manual testing",
    color: "#00ff88",
    popular: true,
    features: [
      "Manual penetration testing",
      "Web + API + Network assessment",
      "OWASP Top 10 coverage",
      "Detailed 20+ page report",
      "Risk rating (CVSS scores)",
      "1 free retest included",
      "Priority support (24h response)",
      "Executive summary for management",
    ],
    cta: "Get Business Pentest",
  },
  {
    icon: Star,
    name: "Enterprise SOC",
    price: "Custom",
    priceEng: "Based on scope",
    tagline: "24/7 monitoring for large enterprises",
    color: "#7c3aed",
    popular: false,
    features: [
      "24/7 SOC monitoring",
      "Incident response team",
      "Threat intelligence feeds",
      "Monthly security reports",
      "Dedicated account manager",
      "Quarterly pentest included",
      "Compliance support (ISO/PCI)",
      "NDA + SLA guaranteed",
    ],
    cta: "Request Custom Quote",
  },
];

export function PricingSection() {
  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5 text-[#00ff88] text-xs font-mono mb-4">
            TRANSPARENT PRICING
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Security Plan
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. Cancel anytime. All plans include NDA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col rounded-xl border transition-all duration-300 ${
                  plan.popular
                    ? "border-[#00ff88] shadow-xl shadow-[#00ff88]/20 scale-105"
                    : "border-[#1e1e3a] hover:border-opacity-60"
                }`}
                style={!plan.popular ? { borderColor: `${plan.color}25` } : {}}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00ff88] text-black text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div
                  className={`p-8 rounded-t-xl ${plan.popular ? "bg-[#00ff88]/5" : "bg-[#0f0f1a]"}`}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${plan.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: plan.color }} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-xs text-gray-500 mb-6">{plan.tagline}</p>

                  <div className="mb-2">
                    <span className="text-3xl font-black" style={{ color: plan.color }}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-0">{plan.priceEng}</p>
                </div>

                <div className={`flex-1 p-8 pt-6 ${plan.popular ? "bg-[#00ff88]/5" : "bg-[#0f0f1a]"}`}>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/quote"
                    className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black hover:shadow-lg hover:shadow-[#00ff88]/40"
                        : "border font-medium text-sm"
                    }`}
                    style={
                      !plan.popular
                        ? { borderColor: `${plan.color}50`, color: plan.color }
                        : {}
                    }
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          All plans include NDA agreement • ISO 27001 aligned process • Results in 5–10 business days
        </motion.p>
      </div>
    </section>
  );
}
