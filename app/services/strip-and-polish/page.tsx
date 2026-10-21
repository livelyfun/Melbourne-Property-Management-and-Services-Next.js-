import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { getService } from "@/lib/data/services";

export const metadata = {
  title: "Strip & Polish Melbourne",
  description:
    "Professional strip and polish services for hard floors across Melbourne. Restore and protect vinyl, timber, tile and terrazzo.",
};

export default function StripAndPolishPage() {
  const service = getService("strip-and-polish");
  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
