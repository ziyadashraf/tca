"use client";

import { useEffect, useState } from "react";
import whatsappicon from "@/public/whatsapp.svg"
import Image from "next/image";
import Link from "next/link";

const WhatsappButton = () => {
    const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');

    useEffect(() => {
        const storedLang = localStorage.getItem('lang') as 'en' | 'ar' | null;
        setDir(storedLang === 'ar' ? 'rtl' : 'ltr');
    }, []);

    const whatsappNumber = "+966 50 748 6880"; // Replace with your WhatsApp number
    const whatsappMessage = "Hello!"; // Default message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-4 ${dir === 'rtl' ? 'left-4' : 'right-4'} bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition flex items-center cursor-pointer z-50`}
        >
            {/* WhatsApp Icon */}
            <Image src={whatsappicon} alt="WhatsApp" className="h-6 w-6 invert" />
        </Link>
    );
};

export default WhatsappButton;