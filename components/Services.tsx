"use client";

import Link from "next/link";
import { getApiPath, t } from "@/utils/helpers";
import { useInView } from "@/hooks/useInView";
import Cookies from "js-cookie";
import { Service } from "@/types/payload-types";

const Services = ({ index, service }: { index: number; service: Service }) => {
  const [titleRef, isTitleInView] = useInView<HTMLHeadingElement>({
    threshold: 0.2,
  });
  const [descRef, isDescInView] = useInView<HTMLParagraphElement>({
    threshold: 0.2,
  });

  const lang = Cookies.get("lang");

  return (
    <div
      className={`lg:px-64 lg:py-24 md:py-16 md:px-12 py-12 px-6 
        flex flex-col-reverse md:flex-row lg:items-center items-start justify-between gap-4
        lg:gap-16
        ${
          index % 2 === 0
            ? "bg-white md:flex-row"
            : "bg-gray-100 md:flex-row-reverse"
        }`}
    >
      <div className="w-full md:w-2/3 mt-8 md:mt-0">
        <div className="flex flex-col justify-between items-start lg:items-start mb-8 md:mb-14">
          <h6
            ref={titleRef}
            className={`text-2xl md:text-4xl font-medium mb-4 md:mb-6 uppercase text-left lg:text-center transition-opacity duration-1000 ${
              isTitleInView ? "fade-in" : "opacity-0"
            }`}
          >
            {t(service.name, lang)}
          </h6>
          <p
            ref={descRef}
            className={`text-md font-medium text-justify md:text-justify text-gray-600 transition-opacity duration-1000 delay-200 ${
              isDescInView ? "fade-in" : "opacity-0"
            }`}
          >
            {t(service.longDescription, lang)}
          </p>
        </div>
        <div className="flex justify-start md:justify-start w-full">
          <Link
            href={`/services/${service.slug}`}
            className="bg-black px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {lang === "ar" ? "اكتشف المزيد" : "Discover More"}
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-end lg:w-auto w-1/2">
        <img
          src={getApiPath(service.image.url)}
          alt={t(service.name, lang)}
          className="w-full h-auto"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

export default Services;
