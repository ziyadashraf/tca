"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);


    const stepColors = data.map((_, index) =>
        useTransform(scrollYProgress, [index / data.length, (index + 1) / data.length], ["#D1D5DB", "#7C3AED"])
    );

    return (
        <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10 pb-40" ref={containerRef}>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                        <div className="sticky flex flex-col md:flex-row rtl:flex-row-reverse z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            {/* 🎯 Animated Outer Circle */}
                            <div className="h-10 absolute left-3 md:left-3 rtl:right-3 rtl:left-auto w-10 rounded-full flex items-center justify-center bg-black">
                                {/* 🎯 Animated Inner Circle (Changes per step) */}
                                <motion.div
                                    className="h-4 w-4 rounded-full border border-neutral-300 dark:border-neutral-700"
                                    style={{ backgroundColor: stepColors[index] }}
                                />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-400 ">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full text-white">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-200 ">
                                {item.title}
                            </h3>
                            {item.content}
                        </div>
                    </div>
                ))}
                <div
                    style={{ height: height + "px" }}
                    className="absolute md:left-8 left-8 rtl:right-8 rtl:left-auto top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] 
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{ height: heightTransform, opacity: opacityTransform }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};