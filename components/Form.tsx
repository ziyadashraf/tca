import React from 'react'
import img from "@/public/images/FormPic.png"
const Form = () => {
    return (
        <div
            style={{
                height: '100vh',
                backgroundImage: `url(${img.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}

        >
            <div className='flex flex-row justify-around items-center bg-black h-full'>
                <div className='w-1/3'>
                    <h6 className='text-white text-2xl font-medium mb-8'>Elevate Your Brand with Innovative Design Solutions</h6>

                    <p className='text-white text-lg'>
                        At TCA, we take a unique approach to design, leveraging cutting-edge techniques and a forward-thinking mindset to redefine creative possibilities. Our commitment to innovation and quality sets us apart in the industry.
                    </p>
                </div>
                <form className='w-2/3'>
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="p-2 rounded-md"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 rounded-md"
                        />
                        <textarea
                            placeholder="Description"
                            className="p-2 rounded-md h-32"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form