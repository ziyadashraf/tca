"use client";

import Link from "next/link";
import Cookies from "js-cookie";

import { fetchHomeData, t } from "@/utils/helpers";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

// const actions = [
//   {
//     title: "Graphic Designer",
//     location: "San Francisco, CA",
//     description:
//       "We are seeking a creative Graphic Designer to join our team. Create stunning visuals for web and print media.",
//     salary: "$70,000 - $90,000",
//     type: "Full-time",
//     href: "#",
//     icon: AcademicCapIcon,
//     iconForeground: "text-teal-700",
//     iconBackground: "bg-teal-50",
//   },
//   {
//     title: "Frontend Developer",
//     location: "Remote",
//     description:
//       "Join our engineering team to build beautiful, responsive web applications using React and TypeScript.",
//     salary: "$90,000 - $120,000",
//     type: "Full-time",
//     href: "#",
//     icon: CheckBadgeIcon,
//     iconForeground: "text-purple-700",
//     iconBackground: "bg-purple-50",
//   },
// ];

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

// Add this interface at the top of the file
interface Job {
  title: { en: string; ar: string };
  location: { en: string; ar: string };
  offerings: { en: string; ar: string };
  description: { en: string; ar: string };
}

export default function Jobs() {
  const { data, isLoading } = useQuery({
    queryKey: ["landing"],
    queryFn: fetchHomeData,
  });

  const contact = useMemo(() => data?.contact, [data]);

  const lang = Cookies.get("lang");

  if (isLoading) return null;

  return (
    <div className=" lg:px-64 py-24 md:py-16 px-6 bg-black">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 mb-8">
        {contact?.jobs?.map((action: Job, index: number) => (
          <div
            key={index}
            className="relative border border-white bg-transparent p-6"
          >
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold text-gray-100">
                {t(action.title, lang)}
              </h3>
              <p className="text-sm text-gray-400">
                {t(action.location, lang)}
              </p>
              <p className="text-sm text-gray-400">
                {t(action.offerings, lang)}
              </p>
            </div>

            <div className="mt-4 flex flex-col items-start justify-between">
              <p className="text-sm text-gray-200 mb-14 text-justify">
                {t(action.description, lang)}
              </p>
              <Link
                href={"#"}
                className="inline-flex items-center bg-black px-4 py-3 text-sm font-medium text-white border border-white"
              >
                Apply now
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="relative border border-white bg-white p-6 w-full">
        <div className="flex flex-col space-y-2 mb-8">
          <h3 className="text-3xl font-normal text-black text-justify">
            Ready to embark on a new creative journey with us?
            <br /> Send us your CV and let&apos;s explore the possibilities together.
          </h3>
        </div>

        <div className="mt-4 flex flex-col items-start justify-between">
          <Link
            href=""
            className="inline-flex items-center bg-white px-4 py-3 text-sm font-medium text-black border border-black"
          >
            Send your CV
          </Link>
        </div>
      </div>
    </div>
  );
}
