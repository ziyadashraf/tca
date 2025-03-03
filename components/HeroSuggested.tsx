/* eslint-disable @next/next/no-img-element */
import hero from "@/public/images/Heros.png";
import Button from "./Button";
import Image from "next/image";
import { fetchPageData, getApiPath, t } from "@/utils/helpers";
import { cookies } from "next/headers";

export default async function HeroSuggested() {
  const { page } = await fetchPageData("/");

  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as "en" | "ar";

  return (
    <div className="bg-white ">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          {/* Mobile background image */}
          <div className="absolute inset-0 lg:hidden">
            <Image
              alt={page?.homeFields?.hero?.heroImage?.alt || "Hero Image"}
              src={
                getApiPath(page?.homeFields?.hero?.heroImage?.url || "") ||
                hero.src
              }
              className="h-full w-full object-cover brightness-90"
              width={1000}
              height={1000}
            />
          </div>

          {lang === "ar" ? (
            // Arabic layout - image on left, content on right (desktop only)
            <>
              <div className="hidden bg-gray-50 lg:absolute lg:inset-y-0 lg:left-0 lg:block lg:w-1/2">
                <Image
                  alt={page?.homeFields?.hero?.heroImage?.alt || "Hero Image"}
                  src={
                    getApiPath(page?.homeFields?.hero?.heroImage?.url || "") ||
                    hero.src
                  }
                  className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="relative z-10 pt-14 lg:ml-auto lg:w-full lg:max-w-2xl">
                <div className="relative px-6 py-64 sm:py-40 lg:px-8 lg:py-40 lg:pr-0">
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl fade-in">
                      {t(page?.homeFields?.hero?.heroText!, lang) || (
                        <>
                          WELCOME TO
                          <br />
                          THE CLOUD AGENCY
                        </>
                      )}
                    </h1>
                    <p className="mt-6 text-lg leading-8 lg:text-gray-600 fade-in text-justify text-black">
                      {t(page?.homeFields?.hero?.subText!, lang) ||
                        "The first cloud agency in the Kingdom. The first cloud agency in the Kingdom. The first cloud agency in the Kingdom."}
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <Button
                        style="bg-black px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        href="#contact-form"
                      >
                        تواصل معنا
                      </Button>
                      <Button
                        style="text-sm font-semibold leading-6 text-black"
                        href="/about"
                      >
                        تعرف على المزيد
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // English layout - content on left, image on right (desktop only)
            <>
              <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                {/* <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform  lg:block "
                >
                  <polygon points="0,0 90,0 50,100 0,100" />
                </svg> */}
                <div className="relative px-6 py-64 sm:py-40 lg:px-8 lg:py-40 lg:pr-0">
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl fade-in">
                      {t(page?.homeFields?.hero?.heroText!, lang) || (
                        <>
                          WELCOME TO
                          <br />
                          THE CLOUD AGENCY
                        </>
                      )}
                    </h1>
                    <p className="mt-6 text-lg leading-8 lg:text-gray-600 fade-in text-justify text-black">
                      {t(page?.homeFields?.hero?.subText!, lang) ||
                        "The first cloud agency in the Kingdom. The first cloud agency in the Kingdom. The first cloud agency in the Kingdom."}
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <Button
                        style="bg-black px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        href="#contact-form"
                      >
                        Contact Us
                      </Button>
                      <Button
                        style="text-sm font-semibold leading-6 text-black"
                        href="/about"
                      >
                        Learn more →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {lang === "en" && (
          <div className="hidden bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
            <Image
              alt={page?.homeFields?.hero?.heroImage?.alt || "Hero Image"}
              src={
                getApiPath(page?.homeFields?.hero?.heroImage?.url || "") ||
                hero.src
              }
              className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
              width={1000}
              height={1000}
            />
          </div>
        )}
      </div>
    </div>
  );
}
