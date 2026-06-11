import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Why Does WordPress Get Hacked? (And How to Stay Safe)",
    excerpt: "80% of websites in Pakistan run on WordPress — and 90% of hacks happen due to outdated plugins. This guide covers the exact reasons and a step-by-step fix to lock down your site.",
    category: "Security Awareness",
    date: "2026-06-01",
    author: "Ahmed Hassan",
    readTime: "7 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Why Is an SSL Certificate Essential? (What HTTPS Really Means)",
    excerpt: "It's more than just a padlock — SSL encrypts your customers' data, improves your Google search ranking, and protects against phishing attacks. Full breakdown inside.",
    category: "Best Practices",
    date: "2026-05-20",
    author: "Fatima Khan",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 3,
    title: "How to Protect Against Phishing Attacks (Real Examples)",
    excerpt: "Phishing attacks in Pakistan have surged 300% in 2026. Using real email examples, learn how to spot them instantly and train your team to avoid becoming a victim.",
    category: "Security Awareness",
    date: "2026-05-10",
    author: "Ali Raza",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Top 10 Cybersecurity Threats in 2026",
    excerpt: "A comprehensive guide to the most critical cybersecurity threats facing organizations in 2026, including AI-powered attacks.",
    category: "Threat Intelligence",
    date: "2026-04-15",
    author: "Ahmed Hassan",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Password Security Best Practices",
    excerpt: "Learn how to create strong passwords and implement effective password management strategies.",
    category: "Security Awareness",
    date: "2024-05-28",
    author: "Fatima Khan",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Understanding Ransomware Attacks",
    excerpt: "Deep dive into how ransomware attacks work and what you can do to protect your organization.",
    category: "Threat Analysis",
    date: "2024-05-25",
    author: "Ali Raza",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 7,
    title: "Multi-Factor Authentication: A Must-Have",
    excerpt: "Why MFA is essential in today's security landscape and how to implement it effectively.",
    category: "Best Practices",
    date: "2024-05-20",
    author: "Hina Memon",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 8,
    title: "Zero Trust Security Model Explained",
    excerpt: "Understanding the Zero Trust security model and its benefits for modern enterprises.",
    category: "Security Strategy",
    date: "2024-05-15",
    author: "Ahmed Hassan",
    readTime: "12 min read",
    featured: false,
  },
  {
    id: 9,
    title: "Phishing Attack Prevention",
    excerpt: "Practical steps to identify and prevent phishing attacks targeting your organization.",
    category: "Security Awareness",
    date: "2024-05-10",
    author: "Fatima Khan",
    readTime: "7 min read",
    featured: false,
  },
];

const categories = [
  "All",
  "Threat Intelligence",
  "Security Awareness",
  "Best Practices",
  "Threat Analysis",
  "Security Strategy",
];

export function BlogPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter((post) => post.featured);

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
              Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">
                Blog
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Latest cybersecurity insights, threat intelligence, and security awareness tips from our expert team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-[#0f0f1a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 rounded-xl border border-[#00ff88]/30 bg-[#00ff88]/5 hover:border-[#00ff88]/50 hover:bg-[#00ff88]/10 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <span className="px-3 py-1 text-xs font-semibold text-[#00ff88] bg-[#00ff88]/10 rounded-full">
                      {post.category}
                    </span>
                    <span className="px-3 py-1 text-xs text-gray-500 bg-[#1e1e3a]/50 rounded-full">
                      ⭐ Featured
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff88] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#00ff88] text-black"
                    : "border border-[#1e1e3a] text-gray-400 hover:border-[#00ff88]/50 hover:text-[#00ff88]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group p-6 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a] hover:border-[#00ff88]/50 hover:bg-[#0f0f1a]/80 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#00d4ff] uppercase">
                    {post.category}
                  </span>
                  <Tag className="w-4 h-4 text-gray-500" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00ff88] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-[#1e1e3a]">
                  <div className="flex items-center space-x-3">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#00ff88]" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-[#0f0f1a]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated on Security Threats
            </h2>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest cybersecurity news and tips delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#1e1e3a] border border-[#1e1e3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
