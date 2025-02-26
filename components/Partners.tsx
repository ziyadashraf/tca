import { fetchHomeData, getApiPath, t } from "@/utils/helpers";
import { cookies } from "next/headers";
import TheLine from "./TheLine";
const Partners = async () => {
  const { partners } = await fetchHomeData();

  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as "en" | "ar";

  return (
    <div className="lg:px-64 py-24 md:py-16  px-6 flex flex-col gap-8 lg:gap-16 justify-between items-center bg-black lg:flex-row">
      <div className="lg:w-1/2 w-full relative flex flex-row items-start justify-start gap-8">
        <TheLine mode={"dark"} />

        {/* <h6 className='text-white text-2xl font-medium mb-8'>Our Partners</h6> */}
        <div className="">
          <h6 className="text-white text-xl font-light mb-6 lg:mb-8 uppercase  lg:text-left">
            {t(partners?.title, lang) || "Our Partners"}
          </h6>

          <p className="text-white text-md font-normal text-justify">
            {t(partners?.description, lang) ||
              `Our collaborative efforts extend to industry leaders and innovative
          companies. We believe in forging strong partnerships to drive
          creativity, innovation, and excellence. Together, we shape compelling
          brand experiences and deliver impactful solutions.`}
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-8 lg:gap-12 flex-wrap justify-center w-full lg:w-1/3">
        {partners?.images?.map((img: any, i: number) => (
          <img
            key={i}
            src={getApiPath(img.image.url)}
            alt={img.image.alt}
            className="w-20 h-20 lg:w-24 lg:h-24 object-contain"
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
