import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Mail, Globe, CheckCircle, Loader2, Zap } from "lucide-react";

export function FreeScanSection() {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !url) {
      setError("Please fill in both fields.");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      setError("Please enter a valid email address.");
      return;
    }
    let urlOk = url;
    if (!/^https?:\/\//i.test(urlOk)) urlOk = "https://" + urlOk;
    try { new URL(urlOk); } catch {
      setError("Please enter a valid website URL.");
      return;
    }

    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
  };

  const reset = () => {
    setStatus("idle");
    setEmail("");
    setUrl("");
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#0a0a0f]">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff88]/5 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#00d4ff]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-[#00ff88]/20 bg-gradient-to-br from-[#0f0f1a] to-[#0a0a0f] p-8 md:p-12 shadow-2xl shadow-black/50"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/30">
              <Zap className="w-5 h-5 text-[#00ff88]" />
            </div>
            <span className="text-xs font-mono text-[#00ff88] uppercase tracking-widest">Limited Free Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Claim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">Free Vulnerability Scan</span>
          </h2>
          <p className="text-gray-400 text-base mb-8 max-w-xl">
            Enter your email and website URL — we'll run a preliminary automated scan and send a report to your inbox within <span className="text-white font-medium">10 minutes</span>. No credit card, no commitment.
          </p>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-[#00ff88]/10 border-2 border-[#00ff88]/40 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-[#00ff88]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Scan Initiated!</h3>
                <p className="text-gray-400 mb-1">
                  Check your email inbox in <span className="text-[#00ff88] font-semibold">10 minutes</span> for your preliminary report.
                </p>
                <p className="text-gray-500 text-sm mb-6">A Mission Hub expert will follow up with a full assessment offer.</p>
                <button
                  onClick={reset}
                  className="text-sm text-[#00d4ff] underline hover:text-[#00ff88] transition-colors"
                >
                  Submit another scan
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#1a1a2e] border border-[#1e1e3a] text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88]/60 focus:ring-1 focus:ring-[#00ff88]/30 transition-all text-sm disabled:opacity-50"
                    />
                  </div>
                  {/* URL */}
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      placeholder="yourwebsite.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      disabled={status === "loading"}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#1a1a2e] border border-[#1e1e3a] text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88]/60 focus:ring-1 focus:ring-[#00ff88]/30 transition-all text-sm disabled:opacity-50"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-bold text-sm hover:shadow-lg hover:shadow-[#00ff88]/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Initiating Scan…
                      </>
                    ) : (
                      <>
                        <Shield className="w-4 h-4" />
                        Start Free Scan
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00ff88]" /> No credit card
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00ff88]" /> Results in 10 min
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00ff88]" /> 100% Confidential
                    </span>
                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
