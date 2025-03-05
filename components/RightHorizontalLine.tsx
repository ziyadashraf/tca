"use client";

import { motion } from "framer-motion";

interface HorizontalLineProps {
    mode: string;
}

export default function HorizontalLineClient({ mode }: HorizontalLineProps) {
    return (
        <div className="w-full h-[3px] relative">
            {/* Base horizontal line */}
            <div
                className={`absolute bottom-0 h-[1.5px] w-full ${mode === "dark" ? "bg-white" : "bg-black"}`}
            />
            <motion.div
                initial={{ left: "100%" }} // Start off-screen to the right
                whileInView={{ left: "0%" }} // Move to the starting position
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`absolute bottom-[1.5px] h-[2px] w-1/4 ${mode === "dark" ? "bg-white" : "bg-black"}`}
            />
        </div>
    );
}