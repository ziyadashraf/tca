import { fetchProjectsData, fetchServicesData } from "@/utils/helpers";
import { cookies } from "next/headers";
import ServicePageClient from "./ServicePageClient";

interface PageProps {
  params: Promise<{ service: string }>;
}

export default async function ServicesPage({ params }: PageProps) {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as "en" | "ar";

  const serviceSlug = (await params).service;

  const [{ services }, { projects }] = await Promise.all([
    fetchServicesData(),
    fetchProjectsData(serviceSlug),
  ]);

  if (!services || !projects) return null;

  const selectedService = services.find(
    (service) => service.slug === serviceSlug
  );

  return (
    <ServicePageClient
      selectedService={selectedService}
      projects={projects}
      lang={lang}
    />
  );
}
