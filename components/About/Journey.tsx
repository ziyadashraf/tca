import { Timeline } from '../ui/timeline'
//on arrival change to purple
const Journey = () => {
    const data = [
        {
            title: '2020',
            content: (
                <div>
                    <div className="mb-4 text-lg font-medium">
                        A Year of Growth & Experimentation
                    </div>
                    <p className="mb-4">
                        This year marked the beginning of an exciting journey. I focused on exploring different design systems, improving my development workflow, and experimenting with various frameworks.
                    </p>
                    <div className='grid grid-cols-2 gap-4'>
                        <img
                            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Next.js Development"
                            className=" mb-4"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Next.js Development"
                            className=" mb-4"
                        />

                    </div>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Deployed the first version of my portfolio website.</li>
                        <li>Built a card grid component for flexible layouts.</li>
                        <li>Created an interactive startup template (Aceternity).</li>
                        <li>Developed a real-time data visualization dashboard.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: '2021',
            content: (
                <div>
                    <div className="mb-4 text-lg font-medium">
                        Leveling Up in UI/UX Design
                    </div>
                    <p className="mb-4">
                        This year, I refined my design skills, took on new challenges, and worked on making interfaces more user-friendly. I started using Figma extensively for prototyping and experimented with animations.
                    </p>
                    <img
                        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Design Work"
                        className="w-full rounded-lg mb-4"
                    />
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Designed my first SaaS dashboard.</li>
                        <li>Conducted multiple A/B tests to improve user engagement.</li>
                        <li>Implemented dark mode across multiple projects.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: '2022',
            content: (
                <div>
                    <div className="mb-4 text-lg font-medium">
                        Exploring Motion & Interactivity 🏃‍♂️
                    </div>
                    <p className="mb-4">
                        Animation and interactivity took center stage this year. I started integrating Framer Motion into projects, creating delightful micro-interactions and enhancing user experiences.
                    </p>
                    <div className='grid grid-cols-2 gap-4'>
                        <img
                            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Next.js Development"
                            className=" mb-4"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Next.js Development"
                            className=" mb-4"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Next.js Development"
                            className=" mb-4"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Next.js Development"
                            className=" mb-4"
                        />
                    </div>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>Built interactive scroll animations using Framer Motion.</li>
                        <li>Developed a dynamic, multi-step form with smooth transitions.</li>
                        <li>Improved performance by optimizing animations.</li>
                    </ul>
                </div>
            ),
        },
        {
            title: '2023',
            content: (
                <div>
                    <div className="mb-4 text-lg font-medium">
                        Mastering Next.js & Full-Stack Development
                    </div>
                    <p className="mb-4">
                        This year, I went deeper into full-stack development, using Next.js for server-side rendering, API routes, and performance optimizations. I also worked on integrating databases and authentication.
                    </p>
                    <div className='grid grid-cols-2 gap-4'>
                        <img
                            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Next.js Development"
                            className=" mb-4"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Next.js Development"
                            className=" mb-4"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Next.js Development"
                            className=" mb-4"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Next.js Development"
                            className=" mb-4"
                        />
                    </div>


                </div>
            ),
        },
        {
            title: 'Changelog',
            content: (
                <div>
                    <div className="mb-4 text-lg font-medium">
                        Mastering Next.js & Full-Stack Development
                    </div>
                    <p className="mb-4">
                        I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.

                        Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more example of beautiful designs I built.
                    </p>

                    <div className='grid grid-cols-2 gap-4'>
                        <img
                            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Next.js Development"
                            className=" mb-4"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Next.js Development"
                            className=" mb-4"
                        />


                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Next.js Development"
                        className="w-full mb-4"
                    />


                </div>
            ),
        },
    ];

    return (
        <div className='bg-black  pt-16 '>
            <div className='lg:px-64 px-6'>
                <p className='text-white text-lg font-light mb-4 uppercase'>Our Journey</p>
                <h6 className='text-white text-2xl font-medium mb-8'>Charting Our Path Through Innovation and Growth</h6>
            </div>
            <div className='lg:px-40  px-6'>
                <Timeline data={data} />
            </div>
        </div>
    )
}

export default Journey