/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Logo from "@/public/Logo.svg";

// import BrandingIcon from "@/public/Branding.svg";
// import CampaignsIcon from "@/public/Campaigns.svg";
// import AnimationsIcon from "@/public/3danimation.svg";
// import MotionIcon from "@/public/motiongraphics.svg";
// import EventsIcon from "@/public/events.svg";
// import WebDevIcon from "@/public/webdevelopment.svg";
import Cookies from "js-cookie";

import {
  fetchHeaderData,
  getApiPath,
  getLanguage,
  switchLanguage,
  t,
} from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Link from 'next/link';

// interface IconProps {
//   className?: string;
//   'aria-hidden'?: boolean;
//   width?: number;
//   height?: number;
// }


// const products = [
//   {
//     name: "Branding",
//     description: "Establish a strong and impactful brand identity",
//     href: "/services/branding",
//     icon: (props: IconProps) => (
//       <Image src={BrandingIcon} alt="Branding" {...props} />
//     ),
//   },
//   {
//     name: "Campaigns",
//     description:
//       "Crafting creative concepts and content creation for diverse media platforms",
//     href: "/services/campaigns",
//     icon: (props: IconProps) => (
//       <Image src={CampaignsIcon} alt="Campaigns" {...props} />
//     ),
//   },
//   {
//     name: "3D Animations",
//     description: "Immerse your audience in compelling 3D animated visuals",
//     href: "/services/3d-animations",
//     icon: (props: IconProps) => (
//       <Image src={AnimationsIcon} alt="3D Animations" {...props} />
//     ),
//   },
//   {
//     name: "Motion Graphics",
//     description:
//       "Bringing ideas to life through captivating visual storytelling",
//     href: "/services/motion-graphics",
//     icon: (props: IconProps) => (
//       <Image src={MotionIcon} alt="Motion Graphics" {...props} />
//     ),
//   },
//   {
//     name: "Events Design",
//     description: "Creative solutions for your events.",
//     href: "/services/events-design",
//     icon: (props: IconProps) => (
//       <Image src={EventsIcon} alt="Events Design" {...props} />
//     ),
//   },
//   {
//     name: "Web Development",
//     description: "Custom websites that prioritize UX and visual appeal",
//     href: "/services/web-development",
//     icon: (props: IconProps) => (
//       <Image src={WebDevIcon} alt="Web Development" {...props} />
//     ),
//   },
// ];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const router = useRouter();

  const lang = Cookies.get("lang");

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchHeaderData,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleSwitchLanguage = (lang: "en" | "ar") => {
    switchLanguage(lang);

    router.refresh();
  };

  return (
    <header
      className={`bg-black sticky w-full top-0 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">TCA</span>
            <Image src={Logo} alt="TCA logo" width={100} height={100} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-100"
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            {mobileMenuOpen ? (
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm font-medium leading-6 text-gray-100">
            {lang === "ar" ? "الرئيسية" : "Home"}
          </Link>

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
                {data?.products.map((item: any, i: number) => (
                  <div
                    key={i}
                    className="group relative flex gap-x-6 p-4 text-sm leading-6 hover:bg-gray-900"
                  >
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center">
                      <Image
                        src={getApiPath(item.image.url)}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="invert h-16 w-16 text-gray-400 group-hover:text-white"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block font-medium text-gray-100"
                      >
                        {t(item.name, lang)}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-400 line-clamp-2">
                        {t(item.description, lang)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className="text-sm font-medium leading-6 text-gray-100"
          >
            {lang === "ar" ? "حول" : "About"}
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium leading-6 text-gray-100"
          >
            {lang === "ar" ? "اتصل" : "Contact"}
          </Link>

          {/* <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-medium leading-6 text-gray-100">
              Company
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-500" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-96 bg-black p-4 shadow-lg ring-1 ring-gray-700 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              {company.map((item) => (
                <div key={item.name} className="relative  p-4 hover:bg-gray-700">
                              <Link href={item.href} className="block text-sm font-medium leading-6 text-gray-100">
                    {item.name}
                    <span className="absolute inset-0" />
                  </Link>
                  <p className="mt-1 text-sm leading-6 text-gray-400">{item.description}</p>
                </div>
              ))}
            </PopoverPanel>
          </Popover> */}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-medium leading-6 text-gray-100">
              <GlobeAltIcon className="h-5 w-5" />
              {getLanguage() === "en" ? "English" : "عربي"}
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-500"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute right-0 top-full z-10 mt-3 w-40 overflow-hidden bg-black shadow-lg ring-1 ring-gray-700 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-2">
                <button
                  onClick={() => handleSwitchLanguage("en")}
                  className={`block w-full px-3 py-2 text-left text-sm leading-6 ${getLanguage() === "en"
                    ? "bg-gray-900 text-white"
                    : "text-gray-100 hover:bg-gray-900"
                    }`}
                >
                  English
                </button>
                <button
                  onClick={() => handleSwitchLanguage("ar")}
                  className={`block w-full px-3 py-2 text-left text-sm leading-6 ${getLanguage() === "ar"
                    ? "bg-gray-900 text-white"
                    : "text-gray-100 hover:bg-gray-900"
                    }`}
                >
                  عربي
                </button>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-black sm:max-w-sm sm:ring-1 sm:ring-gray-700">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">TCA</span>
                <Image src={Logo} alt="TCA logo" width={100} height={100} />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 p-2.5 text-gray-100"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-700">
                <div className="space-y-2 py-6">
                  {data?.products.map((item: any, i: number) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="group -mx-3 flex items-center gap-x-6 p-3 text-base font-medium leading-7 text-gray-100 hover:bg-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center">
                        {item.icon}
                      </div>
                      {t(item.name, lang)}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="-mx-3 block px-3 py-2 text-base font-medium leading-7 text-gray-100 hover:bg-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {lang === "ar" ? "الرئيسية" : "Home"}
                  </Link>
                  <Link
                    href="/about"
                    className="-mx-3 block px-3 py-2 text-base font-medium leading-7 text-gray-100 hover:bg-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {lang === "ar" ? "المزيد عننا" : "About"}
                  </Link>
                  <Link
                    href="/contact"
                    className="-mx-3 block px-3 py-2 text-base font-medium leading-7 text-gray-100 hover:bg-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {lang === "ar" ? "تواصل معنا" : "Contact"}
                  </Link>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => handleSwitchLanguage("en")}
                    className={`-mx-3 flex w-full items-center gap-x-2 px-3 py-2 text-base font-medium leading-7 ${getLanguage() === "en"
                      ? "bg-gray-900 text-white"
                      : "text-gray-100 hover:bg-gray-900"
                      }`}
                  >
                    <GlobeAltIcon className="h-5 w-5" />
                    English
                  </button>
                  <button
                    onClick={() => handleSwitchLanguage("ar")}
                    className={`-mx-3 flex w-full items-center gap-x-2 px-3 py-2 text-base font-medium leading-7 ${getLanguage() === "ar"
                      ? "bg-gray-900 text-white"
                      : "text-gray-100 hover:bg-gray-900"
                      }`}
                  >
                    <GlobeAltIcon className="h-5 w-5" />
                    عربي
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
