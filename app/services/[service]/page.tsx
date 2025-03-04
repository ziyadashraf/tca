import { fetchProjectsData, fetchServicesData } from "@/utils/helpers";
import { cookies } from "next/headers";
import ServicePageClient from "./ServicePageClient";

export default async function ServicesPage({
  params,
}: {
  params: { service: string };
}) {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as "en" | "ar";
  const serviceSlug = params.service;

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
