"use server";

import { fetchServicesData } from "@/utils/helpers";
import Header from "./Header";

export default async function HeaderWrapper() {
  const { services } = await fetchServicesData();
  return <Header services={services} />;
}
