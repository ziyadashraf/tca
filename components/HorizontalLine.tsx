'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HorizontalLine = ({ mode }: { mode: string }) => {
    const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setDir(document.documentElement.dir as 'ltr' | 'rtl');
        }
    }, []);

    return (
        <div className={`w-full h-[3px] relative`}>
            {/* Base horizontal line */}
            <div className={`absolute bottom-0 h-[1.5px] w-full ${mode === 'dark' ? 'bg-white' : 'bg-black'}`} />

            <motion.div
                initial={{ left: dir === 'rtl' ? "-25%" : "100%" }}
                whileInView={{ left: dir === 'rtl' ? "75%" : "0" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`absolute bottom-[1.5px] h-[2px] w-1/4 ${mode === 'dark' ? 'bg-white' : 'bg-black'}`}
            />
        </div>
    );
}

export default HorizontalLine;
