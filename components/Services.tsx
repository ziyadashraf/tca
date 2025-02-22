import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


interface ServicesProps {
    service: string;
    description: string;
    image: string;
    link: string;
    type: string;
}

const Services = (ServiceProps: ServicesProps) => {
    return (
        <div className={`p-64 py-32 flex ${ServiceProps.type === 'white' ?
            'flex-row bg-white' :
            'flex-row-reverse bg-gray-100'
            } justify-between items-center`}>
            <div className='w-2/3'>
                <div className='flex flex-col justify-between items-start mb-12'>
                    <h6 className='text-4xl font-medium mb-4 uppercase'>
                        {ServiceProps.service}
                    </h6>
                    <p className='text-xl'>
                        {ServiceProps.description}
                    </p>

                </div>
                <Link href={ServiceProps.link} className='bg-black text-white px-4 py-2 '>
                    Discover More
                </Link>
            </div>
            <Image src={ServiceProps.image} alt={ServiceProps.service} width={100} height={100} />

        </div>
    )
}

export default Services