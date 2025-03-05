"use client";

import Cookies from "js-cookie";

import { useQuery } from "@tanstack/react-query";
import { Timeline } from "../ui/timeline";
import { fetchPageData, t } from "@/utils/helpers";
//on arrival change to purple
const Journey = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: async () => await fetchPageData("/about"),
  });

  const lang = Cookies.get("lang");

  if (isLoading) return null;

  return (
    <div className="bg-black pt-16">
      <div className="lg:px-64 px-6">
        <p className="text-white text-lg font-light mb-4 uppercase">
          {t(data?.page?.aboutFields?.journey?.title!, lang) || "Our Journey"}
        </p>
        <h6 className="text-white text-2xl font-medium mb-8">
          {t(data?.page?.aboutFields?.journey?.subtitle!, lang) ||
            "Charting Our Path Through Innovation and Growth"}
        </h6>
      </div>
      <div className="lg:px-40 px-6">
        <Timeline
          data={
            data?.page?.aboutFields?.journey?.items?.map((step) => ({
              title: t(step.title, lang),
              content: t(step.content, lang),
            })) || []
          }
        />
      </div>
    </div>
  );
};

export default Journey;
