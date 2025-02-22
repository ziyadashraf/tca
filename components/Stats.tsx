import React from 'react'

const Stats = () => {
    const statsData = [
        { number: '50+', description: 'Projects Completed' },
        { number: '50+', description: 'Projects Completed' },
        { number: '50+', description: 'Projects Completed' },
        { number: '50+', description: 'Projects Completed' },
    ]

    return (
        <div className='p-64 py-32 flex flex-row justify-between items-start bg-white '>
            <div className='w-full'>
                <h6 className='text-black text-2xl font-medium mb-12'>TCA in Numbers</h6>

                <div className='flex flex-row justify-between items-start flex-wrap'>
                    {statsData.map((stat, index) => (
                        <div key={index} className='text-black w-1/2 text-lg mb-24'>
                            <div className='text-5xl font-medium mb-4'>
                                {stat.number}
                            </div>
                            <p className='text-black text-lg'>
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Stats