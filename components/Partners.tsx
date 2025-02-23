import React from "react";
import { fetchHomeData, getApiPath } from "@/utils/helpers";
import { cookies } from "next/headers";
import { translateObjectValues } from "@/utils/translate";

const Partners = async () => {
  const { rawPartners } = await fetchHomeData();

  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as "en" | "ar";

  const partners = await translateObjectValues(rawPartners, lang);

  console.log(partners);

  return (
    <div className="p-64 py-32 flex flex-row justify-between items-start bg-black">
      <div className="w-1/2">
        {/* <h6 className='text-white text-2xl font-medium mb-8'>Our Partners</h6> */}
        <h6 className="text-white text-xl font-light mb-8 uppercase">
          {partners?.title || "Our Partners"}
        </h6>

        <p className="text-white text-md font-normal text-justify">
          {partners?.description ||
            `Our collaborative efforts extend to industry leaders and innovative
          companies. We believe in forging strong partnerships to drive
          creativity, innovation, and excellence. Together, we shape compelling
          brand experiences and deliver impactful solutions.`}
        </p>
      </div>
      <div className="flex flex-row gap-12 flex-wrap w-1/3">
        {partners?.images?.map((img: any, i: number) => (
          <img
            key={i}
            src={getApiPath(img.image.url)}
            alt={img.image.alt}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
