'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import FormPic from '@/public/images/FormPic.png'
import Section from '../Section'

const News = () => {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('[data-animate="true"]').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className='px-64 py-32 bg-white'>
            <div className='mb-16'>
                <p className='text-black text-lg font-light mb-4 uppercase'>News</p>
                <h6 className='text-black text-2xl font-medium mb-8'>The Cloud Agency In The Press</h6>
            </div>

            <div className='flex flex-row justify-between items-center'>
                {[0, 1, 2, 3].map((index) => (
                    <div
                        key={index}
                        className='opacity-0 translate-y-10 transition-all duration-700 ease-out'
                        style={{ transitionDelay: `${index * 200}ms` }}
                        data-animate="true"
                    >
                        <Image src={FormPic} alt="News" width={200} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default News