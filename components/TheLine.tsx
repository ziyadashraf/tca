'use client'
import { motion } from 'framer-motion';

const TheLine = ({ mode }: { mode: string}) => {
    return (
        <div className='w-[3px] h-full'>
            <div className={`absolute left-0 w-[1.5px] rtl:left-auto rtl:right-0 h-full ${mode === 'dark' ? 'bg-white' : 'bg-black'}`}></div>
            {/* Shorter vertical line (1/4 height) */}
            <motion.div
                initial={{ top: "100%" }}
                whileInView={{ top: "15%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`absolute left-[1.5px] w-[2px] rtl:left-auto rtl:right-[1.5px] h-1/4 ${mode === 'dark' ? 'bg-white' : 'bg-black'}`}
            ></motion.div>
        </div>
    )
}

export default TheLine;