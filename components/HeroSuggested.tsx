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
    <div className="relative w-full h-screen bg-cover bg-center" style={{
      backgroundImage: `url(${getApiPath(page?.homeFields?.hero?.heroImage?.url || "") || hero.src})`
    }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay for better text visibility */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-4xl font-medium tracking-tight sm:text-6xl fade-in">
          {t(page?.homeFields?.hero?.heroText!, lang) || (
            <>
              WELCOME TO
              <br />
              THE CLOUD AGENCY
            </>
          )}
        </h1>
        <p className="mt-6 mb-6 text-lg leading-8 lg:text-gray-200 fade-in font-medium">
          {t(page?.homeFields?.hero?.subText!, lang) ||
            "The first cloud agency in the Kingdom. The first cloud agency in the Kingdom. The first cloud agency in the Kingdom."}
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <Button
            style="bg-black px-8 py-3 border-2 border-black text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            href="#contact-form"
          >
            {lang === "ar" ? "تواصل معنا" : "Contact Us"}
          </Button>
          <Button
            style="text-sm font-semibold leading-6 text-white px-4 py-3 border border-white hover:bg-gray-100/10 "
            href="/about"
          >
            {lang === "ar" ? " تعرف على المزيد" : "Learn more →"}
          </Button>
        </div>
      </div>
    </div>
  );
}
