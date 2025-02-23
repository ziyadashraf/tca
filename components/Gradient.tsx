import { fetchHomeData } from "@/utils/helpers";
import { translateObjectValues } from "@/utils/translate";
import { cookies } from "next/headers";
import React from "react";
import TheLine from "./TheLine";
const Gradient = async () => {
  const { rawServices } = await fetchHomeData();

  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as "en" | "ar";

  const services = await translateObjectValues(rawServices, lang);

  return (
    <div
      className=" lg:px-64 lg:py-24 md:py-30 py-20 px-6 flex flex-col justify-center items-start"
      style={{
        background: `radial-gradient(circle at 62.916666666666664% 69.16666666666667%, #098BE1 0%, 20%, rgba(9, 139, 225, 0) 40%),
                        radial-gradient(circle at 6.503906249999999% 88.037109375%, rgba(253, 253, 24, 0.99) 0%, 25%, rgba(253, 253, 24, 0) 50%),
                        radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #076DB1 0%, 42%, rgba(7, 109, 177, 0) 70%),
                        radial-gradient(circle at 93.6865234375% 11.42578125%, #E10943 0%, 42%, rgba(225, 9, 67, 0) 70%),
                        radial-gradient(circle at 48.9013671875% 49.521484375%, #FFFFFF 0%, 100%, rgba(255, 255, 255, 0) 100%)`,
      }}
    >
      <div className='relative'>
        <TheLine mode={'white'} size='1/4' />
        <div className='ps-6'>
          <h6 className="text-black text-lg sm:text-xl font-light mb-4 sm:mb-8 uppercase">
            {services?.title || "Our Services"}
          </h6>

          <p className="text-black text-xl sm:text-2xl md:text-3xl font-medium w-full sm:w-2/3 md:w-2/3">
            {services?.description || "We Offer a Wide Range of Creative Solutions"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gradient;
