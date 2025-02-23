import React from 'react'
import img from "@/public/images/FormPic.png"
const Form = () => {
    return (
        <div
            style={{

                backgroundImage: `url(${img.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
            }}
            className='flex flex-row justify-around items-center px-64 py-32 '

        >
            <div className='flex flex-row justify-around items-start bg-black  gap-8 py-12 px-4'>
                <div className='w-1/3 flex flex-col gap-8 items-start justify-start h-full'>
                    <div>
                        <p className='text-white text-lg font-light mb-4 uppercase'>Why Choose Us?</p>
                        <h6 className='text-white text-2xl font-medium mb-8'>Elevate Your Brand with Innovative Design Solutions</h6>
                    </div>
                    <p className='text-white text-md text-justify'>
                        At TCA, we take a unique approach to design, leveraging cutting-edge techniques and a forward-thinking mindset to redefine creative possibilities. Our commitment to innovation and quality sets us apart in the industry.
                    </p>
                </div>
                <form className='w-1/2 flex flex-col gap-8 items-between justify-between h-full'>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col ">
                            <label className="text-white text-sm">Name</label>
                            <input
                                type="text"

                                className="bg-transparent text-white border-b border-white p-2 outline-none placeholder:text-gray-400 focus:border-b-2"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label className="text-white text-sm">Email</label>
                            <input
                                type="email"

                                className="bg-transparent text-white border-b border-white p-2 outline-none placeholder:text-gray-400 focus:border-b-2"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label className="text-white text-sm">Phone</label>
                            <input
                                type="tel"

                                className="bg-transparent text-white border-b border-white p-2 outline-none placeholder:text-gray-400 focus:border-b-2"
                            />
                        </div>
                        <div className="flex flex-col gap-20">
                            <label className="text-white text-sm">Description</label>
                            <textarea

                                className="bg-transparent text-white border-b border-white p-2 outline-none placeholder:text-gray-400 focus:border-b-2 resize-none"
                            />
                        </div>
                        <button className='bg-white text-black p-2 hover:bg-gray-100 transition-colors w-1/3'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form