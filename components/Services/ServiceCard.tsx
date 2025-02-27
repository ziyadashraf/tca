import Link from 'next/link'


interface ServiceCardProps {
    service: string;
    description: string;
    link: string;
}

const ServiceCard = ({ service, description, link }: ServiceCardProps) => {
    return (
        <div className='flex flex-col mb-8 items-center'>
            <div className='flex flex-col justify-between items-center mb-4'>
                <h6 className='text-4xl font-medium mb-6 uppercase text-center'>
                    {service}
                </h6>
                <p className='text-md font-medium  text-gray-600 text-center'>
                    {description}
                </p>

            </div>
            <Link href={link} className='bg-black text-white font-medium px-4 py-3 '>
                Discover More
            </Link>
        </div>
    )
}

export default ServiceCard