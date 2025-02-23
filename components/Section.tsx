import Image, { StaticImageData } from 'next/image'


interface SectionProps {
    Title: string;
    Paragraph: string;
    Subtitle: string;
    image: StaticImageData | string;
    mode: string;
}
const Section = ({ Title, Paragraph, Subtitle, image, mode }: SectionProps) => {
    return (
        <div className={` ${mode === 'dark' ? 'bg-black' : 'bg-white'} flex flex-row justify-between items-center gap-16 px-64 py-32`}>
            <div className='w-1/2 flex flex-col gap-8 items-start justify-start h-full'>
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
                </div>
                {Paragraph && (
                    <p className={`${mode === 'dark' ? 'text-white' : 'text-black'} text-md text-justify`}>
                        {Paragraph}
                    </p>
                )}
            </div>
            {image && (
                <div className='w-1/2'>
                    <Image src={image} alt={Title} width={1000} height={1000} />
                </div>
            )}
        </div>
    )
}

export default Section