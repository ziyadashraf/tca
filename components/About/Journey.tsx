"use client";

import { useQuery } from "@tanstack/react-query";
import { Timeline } from "../ui/timeline";
import { fetchHomeData } from "@/utils/helpers";
import { useMemo } from "react";

//on arrival change to purple
const Journey = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["landing"],
    queryFn: fetchHomeData,
  });

  const about = useMemo(() => data?.about, [data]);

  if (isLoading) return null;

  return (
    <div className="bg-black pt-16">
      <div className="lg:px-64 px-6">
        <p className="text-white text-lg font-light mb-4 uppercase">
          Our Journey
        </p>
        <h6 className="text-white text-2xl font-medium mb-8">
          Charting Our Path Through Innovation and Growth
        </h6>
      </div>
      <div className="lg:px-40 px-6">
        <Timeline data={about?.journey?.steps?.map((step: { title: { en: any; }; content: { en: any; }; }) => ({
          title: step.title.en, // Ensure only the English title is used
          content: step.content.en, // Ensure only the English content is used
        }))} />
      </div>
    </div>
  );
};

export default Journey;
