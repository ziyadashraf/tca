import Image, { StaticImageData } from 'next/image'
import TheLine from './TheLine'

interface SectionProps {
    Title: string;
    Paragraph: string;
    Subtitle: string;
    image: StaticImageData | string;
    mode: string;
}
const Section = ({ Title, Paragraph, Subtitle, image, mode }: SectionProps) => {
    return (
        <div className={`${mode === 'dark' ? 'bg-black' : 'bg-white'} flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 lg:px-64 py-12 md:py-16 px-6`}>
            <div className='w-full md:w-1/2 flex flex-col items-start justify-start h-full '>
                <div className='relative flex flex-row w-full h-full'>

                    <TheLine mode={mode} size='1/4' />


                    <div className='ps-6'>
                        <div>
                            {Title && (
                                <p className={`${mode === 'dark' ? 'text-white' : 'text-black'} text-lg font-light mb-4 uppercase`}>
                                    {Title}
                                </p>
                            )}
                            {Subtitle && (
                                <h6 className={`${mode === 'dark' ? 'text-white' : 'text-black'} text-2xl font-medium mb-8`}>
                                    {Subtitle}
                                </h6>
                            )}
                            {Paragraph && (
                                <p className={`${mode === 'dark' ? 'text-white' : 'text-black'} text-md text-justify `}>
                                    {Paragraph}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {image && (
                <div className='w-full md:w-1/2 mt-8 md:mt-0'>
                    <Image src={image} alt={Title} width={1000} height={1000} className="w-full" />
                </div>
            )}
        </div>
    )
}

export default Section