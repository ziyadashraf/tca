import { useEffect, useRef, useState } from 'react';

export const useInView = <T extends HTMLElement>(options = {}) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, isInView] as const;
}; 