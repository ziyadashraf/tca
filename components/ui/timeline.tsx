"use client";

import Cookies from "js-cookie";

import { t } from "@/utils/helpers";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: { en: string; ar: string };
  content: { en: string; ar: string };
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const lang = Cookies.get("lang");

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-black text-white md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full rtl:flex-row-reverse">
              <div className="h-10 absolute start-3 md:start-3 w-10 rounded-full bg-black flex items-center justify-center">
                <motion.div
                  className="h-4 w-4 rounded-full border p-2"
                  style={{
                    backgroundColor: useTransform(
                      scrollYProgress,
                      [index / data.length, (index + 0.5) / data.length],
                      ["rgb(38, 38, 38)", "rgb(147, 51, 234)"]
                    ),
                    borderColor: useTransform(
                      scrollYProgress,
                      [index / data.length, (index + 0.5) / data.length],
                      ["rgb(64, 64, 64)", "rgb(147, 51, 234)"]
                    ),
                  }}
                />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-medium text-neutral-500 dark:text-neutral-500">
                <motion.span
                  style={{
                    color: useTransform(
                      scrollYProgress,
                      [index / data.length, (index + 0.5) / data.length],
                      ["rgb(115, 115, 115)", "rgb(255, 255, 255)"]
                    ),
                  }}
                >
                  {t(item.title, lang)}
                </motion.span>
              </h3>
            </div>

            <div className="relative ps-20 pe-4 md:ps-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left rtl:text-right font-medium text-neutral-500 dark:text-neutral-500">
                <motion.span
                  style={{
                    color: useTransform(
                      scrollYProgress,
                      [index / data.length, (index + 0.5) / data.length],
                      ["rgb(115, 115, 115)", "rgb(255, 255, 255)"]
                    ),
                  }}
                >
                  {t(item.title, lang)}
                </motion.span>
              </h3>
              <div
                className="prose prose-invert"
                dangerouslySetInnerHTML={{ __html: t(item.content, lang) }}
              ></div>{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 rtl:right-8 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
