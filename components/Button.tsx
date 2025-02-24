'use client'
import Link from 'next/link'
const Button = ({ style, href, children }: { style: string, href: string, children: React.ReactNode }) => {
    return (
        <div>
            <Link
                href={href}
                className={style}
                onClick={(e) => {
                    // Check if href starts with '#' (indicating an ID)
                    if (href.startsWith('#')) {
                        e.preventDefault();
                        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                    }
                    // Otherwise, let the Link component handle normal navigation
                }}
            >
                {children}
            </Link>
        </div>
    )
}

export default Button