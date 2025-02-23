import React from 'react'
import Image from 'next/image'
const Partners = () => {
    return (
        <div className='p-64 py-32 flex flex-row justify-between items-start bg-black'>
            <div className='w-1/2'>
                {/* <h6 className='text-white text-2xl font-medium mb-8'>Our Partners</h6> */}
                <h6 className='text-white text-xl font-light mb-8 uppercase'>Our Partners</h6>

                <p className='text-white text-md font-normal text-justify'>
                    Our collaborative efforts extend to industry leaders and innovative companies. We believe in forging strong partnerships to drive creativity, innovation, and excellence. Together, we shape compelling brand experiences and deliver impactful solutions.
                </p>
            </div>
            <div className='flex flex-row gap-12 flex-wrap w-1/3'>
                <Image src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="partners" width={100} height={100} />
                <Image src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="partners" width={100} height={100} />
                <Image src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="partners" width={100} height={100} />
                <Image src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="partners" width={100} height={100} />
            </div>
        </div>
    )
}

export default Partners