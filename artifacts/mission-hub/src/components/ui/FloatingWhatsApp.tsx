import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "923001234567";
const PRE_FILLED_MSG = encodeURIComponent(
  "Hi MH, I need pentest for my website http://example.com"
);

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  const handleOpenChat = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${PRE_FILLED_MSG}`,
      "_blank",
      "noopener,noreferrer"
    );
    setOpen(false);
  };

  return (
    <>
      {/* Mobile sticky call bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex">
        <a
          href="tel:+923001234567"
          className="flex-1 flex items-center justify-center space-x-2 py-4 bg-[#7c3aed] text-white font-semibold text-sm"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span>Call Now</span>
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${PRE_FILLED_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-2 py-4 bg-[#00ff88] text-black font-semibold text-sm"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Desktop floating WhatsApp bubble */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="mb-4 p-5 rounded-xl border border-[#00ff88]/30 bg-[#0f0f1a] shadow-2xl shadow-black/50 w-72"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#00ff88] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Mission Hub Support</p>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                    <p className="text-gray-400 text-xs">Online — Typically replies in minutes</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                👋 Hi! Need a security assessment or have a question? Chat with us directly on WhatsApp.
              </p>
              <button
                onClick={handleOpenChat}
                className="w-full py-3 rounded-lg bg-[#00ff88] text-black font-bold text-sm hover:bg-[#00d4ff] transition-colors"
              >
                Start WhatsApp Chat →
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-[#00ff88] text-black flex items-center justify-center shadow-lg shadow-[#00ff88]/40 hover:shadow-[#00ff88]/60 transition-all"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Pulse ring animation when closed */}
        {!open && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#00ff88]/50"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>
    </>
  );
}
