import { Metadata } from "next";
import { BlogPageClient } from "@/components/sections/BlogPageClient";

export const metadata: Metadata = {
  title: "Blog | Mission Hub Digital Solution",
  description: "Latest cybersecurity tips, threat intelligence, and security awareness articles.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
