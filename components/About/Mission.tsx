import React from 'react'
import Image from 'next/image'
import mission from '@/public/images/FormPic.png'
const Mission = () => {
    return (
        <div className='flex flex-row justify-between items-center gap-16 px-64 py-32 bg-black'>
            <div className='w-1/2 flex flex-col gap-8 items-start justify-start h-full'>
                <div>
                    <p className='text-white text-lg font-light mb-4 uppercase'>Our Mission</p>
                    <h6 className='text-white text-2xl font-medium mb-8'>Empowering Brands Through Creativity</h6>
                </div>
                <p className='text-white text-md text-justify'>
                    At The Cloud Agency, we are committed to redefining the way businesses connect with their audience. Our mission is to empower brands through creativity, offering a wide range of services including Branding, Graphic design, Motion graphic design, 3D animation, Events Design, Content creation, 3D Design, and Web development. This is a great space to learn more about our company and the innovative services we provide.
                </p>
            </div>
            <div className='w-1/2 h-full'>
                <Image src={mission} alt="Mission" />
            </div>
        </div>
    )
}

export default Mission