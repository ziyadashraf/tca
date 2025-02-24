import { fetchHomeData, t } from "@/utils/helpers";
import { cookies } from "next/headers";
import React from "react";

const Stats = async () => {
  const statsData = [
    { number: "50", description: "Projects Completed" },
    { number: "50", description: "Projects Completed" },
    { number: "50", description: "Projects Completed" },
    { number: "50", description: "Projects Completed" },
  ];

  const { stats } = await fetchHomeData();

  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as "en" | "ar";

  return (
    <div className="lg:px-64 lg:py-24 md:py-16 md:px-12 py-12 px-6 flex flex-row justify-between items-start bg-white ">
      <div className="w-full">
        <h6 className="text-black text-2xl font-medium mb-12">
          {t(stats.title, lang) || "TCA in Numbers"}
        </h6>

        <div className="flex flex-row justify-between items-start flex-wrap">
          {/* @ts-ignore */}
          {(stats.statistics || statsData).map((stat, index) => (
            <div key={index} className="text-black w-1/2 text-lg mb-24">
              <div className="text-5xl font-medium mb-4">{stat.number}+</div>
              <p className="text-black text-lg">{t(stat.description, lang)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
