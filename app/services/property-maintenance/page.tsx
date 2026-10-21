import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { getService } from "@/lib/data/services";

export const metadata = {
  title: "Property Maintenance Melbourne",
  description:
    "Professional property maintenance for residential and commercial properties in Melbourne. Landlord, agent and owner support.",
};

export default function PropertyMaintenancePage() {
  const service = getService("property-maintenance");
  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
