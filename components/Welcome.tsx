import React from 'react'




interface WelcomeProps {
    heading: string;
    paragraph: string;
}


const Welcome = ({ heading, paragraph }: WelcomeProps) => {




    return (
        <div className='flex flex-col items-center border-bottom  px-64 py-32'>
            <h3 className='text-black text-3xl font-medium mb-8 uppercase text-center'>{heading}</h3>
            <p className='text-black text-lg font-normal text-center'>
                {paragraph}
            </p>
        </div>
    )
}

export default Welcome