"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Lock, Shield } from "lucide-react";
import { useRouter } from "next/navigation";

interface LoginFormData {
  username: string;
  password: string;
}

export function AdminLoginClient() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError("");

    try {
      // In production, call your authentication API
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push("/admin/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] flex items-center justify-center pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="p-8 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a]">
          {/* Header */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Shield className="w-8 h-8 text-[#00ff88]" />
            <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
          </div>

          {/* Subheading */}
          <p className="text-center text-gray-400 text-sm mb-8">
            Secure access for Mission Hub administrators
          </p>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-lg bg-[#ff3860]/10 border border-[#ff3860]/30 text-[#ff3860] text-sm"
            >
              {error}
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Username
              </label>
              <input
                type="text"
                {...register("username", { required: true })}
                className="w-full px-4 py-2 bg-[#1e1e3a] border border-[#1e1e3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="w-full px-4 py-2 bg-[#1e1e3a] border border-[#1e1e3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-8 p-4 rounded-lg bg-[#00ff88]/5 border border-[#00ff88]/20">
            <div className="flex items-start space-x-3">
              <Lock className="w-4 h-4 text-[#00ff88] flex-shrink-0 mt-1" />
              <div className="text-xs text-gray-400">
                <p className="font-semibold text-white mb-1">Secure Access</p>
                <p>This area is restricted to authorized personnel only. All access is logged.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-600 mt-6">
          Forgot your password? Contact the system administrator.
        </p>
      </motion.div>
    </main>
  );
}
