import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { getService } from "@/lib/data/services";

export const metadata = {
  title: "Steam Cleaning Melbourne",
  description:
    "Professional steam cleaning for carpets, upholstery and surfaces across Melbourne. Residential, rental and commercial properties.",
};

export default function SteamCleaningPage() {
  const service = getService("steam-cleaning");
  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
