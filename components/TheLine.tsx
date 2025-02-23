import React from 'react'

const TheLine = ({ mode, size }: { mode: string, size: string }) => {
    return (
        <div className=''>
            <div className={`absolute left-0 w-[1.5px] h-full ${mode === 'dark' ? 'bg-white' : 'bg-black'}`}></div>
            {/* Shorter vertical line (1/4 height) */}
            <div className={`absolute left-[1.5px] top-[15%] w-[2px] h-${size} ${mode === 'dark' ? 'bg-white' : 'bg-black'}`}></div>
        </div>
    )
}

export default TheLine