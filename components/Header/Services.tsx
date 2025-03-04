"use server";

import Image from "next/image";
import Link from "next/link";

import { fetchServicesData, getApiPath, t } from "@/utils/helpers";
import { Service } from "@/types/payload-types";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { cookies } from "next/headers";

export async function DesktopServices() {
  const { services } = await fetchServicesData();
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";

  return (
    <div className="group relative hover:cursor-pointer">
      <div className="flex items-center gap-x-1 text-sm font-medium leading-6 text-gray-100">
        {lang === "ar" ? "الخدمات" : "Services"}
        <ChevronDownIcon
          aria-hidden="true"
          className="h-5 w-5 flex-none text-gray-500 transition-transform duration-200 group-hover:rotate-180"
        />
      </div>

      <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden bg-black shadow-lg ring-1 ring-gray-700 transition-all duration-200 ease-out">
        <div className="p-4">
          {services?.map((item: Service) => (
            <div
              key={item.id}
              className="group relative flex gap-x-6 p-4 text-sm leading-6 hover:bg-gray-900"
            >
              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center">
                <Image
                  src={getApiPath(item.image.url)}
                  alt={item.name.en}
                  width={64}
                  height={64}
                  className="h-16 w-16 text-gray-400 group-hover:text-white"
                />
              </div>
              <div className="flex-auto">
                <Link
                  href={`/services/${item.id}`}
                  className="block font-medium text-gray-100"
                >
                  {t(item.name, lang)}
                  <span className="absolute inset-0" />
                </Link>
                <p className="mt-1 text-gray-400 line-clamp-2">
                  {t(item.shortDescription, lang)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function MobileServices() {
  const { services } = await fetchServicesData();

  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";

  return (
    <div className="space-y-2 py-6">
      {services?.map((item: Service) => (
        <Link
          key={item.id}
          href={`/services/${item.id}`}
          className="group -mx-3 flex items-center gap-x-6 p-3 text-base font-medium leading-7 text-gray-100 hover:bg-gray-900"
        >
          <div className="flex h-11 w-11 flex-none items-center justify-center">
            <Image
              src={getApiPath(item.image.url)}
              alt={item.name.en}
              width={64}
              height={64}
              className="h-16 w-16 text-gray-400 group-hover:text-white"
            />
          </div>
          {t(item.name, lang)}
        </Link>
      ))}
    </div>
  );
}
