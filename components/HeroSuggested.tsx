import hero from "@/public/images/Heros.png";

import { fetchHomeData, getApiPath, getLanguage } from "@/utils/helpers";
import { translateObjectValues, translateText } from "@/utils/translate";
import { cookies } from "next/headers";
import Link from "next/link";
import Button from "./Button";
// import Image from "next/image";

export default async function HeroSuggested() {
  const { rawLanding } = await fetchHomeData();

  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as "en" | "ar";

  const landing = await translateObjectValues(rawLanding, lang);

  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className={`absolute inset-y-0 ${lang === "ar" ? "left-8 -scale-x-100" : "right-8"
                } hidden h-full w-80 ${lang === "ar" ? "-translate-x-1/2" : "translate-x-1/2"
                } transform fill-white lg:block`}
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-12 sm:py-40 lg:px-8 lg:py-40 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl fade-in">
                  {landing?.heroText || (
                    <>
                      WELCOME TO
                      <br />
                      THE CLOUD AGENCY
                    </>
                  )}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 fade-in text-justify">
                  {landing?.subText ||
                    "The first cloud agency in the Kingdom. The first cloud agency in the Kingdom. The first cloud agency in the Kingdom."}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button
                    style="bg-black px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    href="#contact-form"
                    children="Contact Us"
                  />
                  <Button
                    style="text-sm font-semibold leading-6 text-gray-900"
                    href="/about"
                    children="Learn more →"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            alt={landing?.heroImage?.alt || "Hero Image"}
            src={getApiPath(landing?.heroImage?.url) || hero.src}
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}
