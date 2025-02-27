import { fetchHomeData, t } from "@/utils/helpers";
import { cookies } from "next/headers";
import React from "react";
import HorizontalLine from "./HorizontalLine";

// Add interface for stats data
interface Statistic {
  number: string;
  description: { en: string; ar: string };
}

interface StatsData {
  title: { en: string; ar: string };
  statistics: Statistic[];
}

const Stats = async () => {
  const statsData = [
    { number: "50", description: "Projects Completed" },
    { number: "50", description: "Projects Completed" },
    { number: "50", description: "Projects Completed" },
    { number: "50", description: "Projects Completed" },
  ];

  const { stats } = await fetchHomeData() as { stats: StatsData };

  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as "en" | "ar";

  return (
    <div className="lg:px-64 lg:py-24 md:py-16 md:px-12 py-12 px-6 flex flex-row justify-between items-start bg-white overflow-x-hidden">
      <div className="w-full">
        <h6 className="text-black text-2xl font-medium mb-12">
          {t(stats.title, lang) || "TCA in Numbers"}
        </h6>

        <div className="flex flex-row flex-wrap justify-between items-start gap-8">
          {(stats?.statistics || statsData).map((stat, index) => (
            <div key={index} className="text-black w-full md:w-[45%] text-lg mb-24 relative">
              <div className="text-5xl font-medium mb-4">{stat.number}+</div>
              <p className="text-black text-lg mb-8">{t(stat.description, lang)}</p>
              <HorizontalLine mode="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
