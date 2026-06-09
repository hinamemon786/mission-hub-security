import { Metadata } from "next";
import { AdminLoginClient } from "@/components/sections/AdminLoginClient";

export const metadata: Metadata = {
  title: "Admin Login | Mission Hub",
  description: "Mission Hub admin panel for managing content.",
};

export default function AdminLoginPage() {
  return <AdminLoginClient />;
}
