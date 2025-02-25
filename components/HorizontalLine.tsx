'use client'
import { motion } from 'framer-motion';

const HorizontalLine = ({ mode, size }: { mode: string; size: string }) => {
    return (
        <div className={`w-full h-[3px]`}>
            {/* Base horizontal line */}
            <div className={`absolute bottom-0 h-[1.5px] w-full  ${mode === 'dark' ? 'bg-white' : 'bg-black'}`}></div>

            <motion.div
                initial={{ left: document.dir === 'rtl' ? "-25%" : "100%" }}
                whileInView={{ left: document.dir === 'rtl' ? "75%" : "0" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`absolute bottom-[1.5px] h-[2px] w-1/4 ${mode === 'dark' ? 'bg-white' : 'bg-black'}`}
            ></motion.div>
        </div>
    )
}

export default HorizontalLine;
