import { services } from "@/lib/constants/services";
import { ServicesPageClient } from "@/components/sections/ServicesPageClient";

export default function ServicesPage() {
  return <ServicesPageClient services={services} />;
}
