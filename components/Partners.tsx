import { fetchPageData, getApiPath, t } from "@/utils/helpers";
import { cookies } from "next/headers";
import TheLine from "./TheLine";

const Partners = async () => {
  const { page } = await fetchPageData("/");

  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as "en" | "ar";

  return (
    <div className="lg:px-64 lg:py-24 md:py-16 md:px-12 py-12 px-6  flex flex-col gap-8 lg:gap-16 justify-between items-center bg-black lg:flex-row">
      <div className="lg:w-1/2 w-full relative flex flex-row items-start justify-start gap-8">
        <TheLine mode={"dark"} />

        {/* <h6 className='text-white text-2xl font-medium mb-8'>Our Partners</h6> */}
        <div className="">
          <h6 className="text-white text-xl font-light mb-6 lg:mb-8 uppercase  lg:text-left rtl:text-right">
            {t(page?.homeFields?.partners?.title!, lang) || "Our Partners"}
          </h6>

          <p className="text-white text-md font-normal text-justify">
            {t(page?.homeFields?.partners?.description!, lang) ||
              `Our collaborative efforts extend to industry leaders and innovative
          companies. We believe in forging strong partnerships to drive
          creativity, innovation, and excellence. Together, we shape compelling
          brand experiences and deliver impactful solutions.`}
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between w-full lg:w-2/5 ">
        {page?.homeFields?.partners?.images?.map((img: any, i: number) => (
          <div key={i} className="w-1/2">
            <img
              src={getApiPath(img.image.url)}
              alt={img.image.alt}
              className="object-cover"

            // loading="eager"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
