import React from "react";
import Link from "next/link";
import { getApiPath } from "@/utils/helpers";

interface ServicesProps {
  service: string;
  description: string;
  image: { url: string };
  link: string;
  type: string;
}

const Services = (ServiceProps: ServicesProps) => {
  return (
    <div
      className={`p-64 py-16 flex ${
        ServiceProps.type === "white"
          ? "flex-row bg-white"
          : "flex-row-reverse bg-gray-100"
      } justify-between items-center gap-8`}
    >
      <div className="w-2/3">
        <div className="flex flex-col justify-between items-start mb-14">
          <h6 className="text-4xl font-medium mb-6 uppercase ">
            {ServiceProps.service}
          </h6>
          <p className="text-md font-medium text-justify text-gray-600">
            {ServiceProps.description}
          </p>
        </div>
        <Link
          href={ServiceProps.link}
          className="bg-black text-white font-medium px-4 py-3 "
        >
          Discover More
        </Link>
      </div>
      <div className="flex flex-row items-end">
        <img
          src={getApiPath(ServiceProps?.image?.url) || ServiceProps.image.url}
          alt={ServiceProps.service}
        />
      </div>
    </div>
  );
};

export default Services;
