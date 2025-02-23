import { Timeline } from '../ui/timeline'

const Journey = () => {
    const data = [
        {
            title: '2020',
            content: <div>
                <div className='mb-4'>
                    Deployed 5 new components today:
                </div>

                <ul>
                    <li>✅ Card grid component</li>
                    <li>✅ Startup template Aceternity</li>
                    <li>✅ Random file upload lol</li>
                    <li>✅ Himesh Reshammiya Music CD</li>
                    <li>✅ Himesh Reshammiya Music CD</li>
                    <li>✅ Himesh Reshammiya Music CD</li>
                    <li>✅ Himesh Reshammiya Music CD</li>
                    <li>✅ Himesh Reshammiya Music CD</li>
                    <li>✅ Himesh Reshammiya Music CD</li>
                    <li>✅ Himesh Reshammiya Music CD</li>
                    <li>✅ Himesh Reshammiya Music CD</li>
                    <li>✅ Built a real-time data visualization dashboard</li>
                </ul>
            </div >

        },
        {
            title: '2021',
            content: <div>
                <div className='mb-4'>
                    I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.

                </div>

                <p>
                    Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more example of beautiful designs I built.
                </p>

            </div>

        },
        {
            title: '2022',
            content: <div>
                <div className='mb-4'>
                    Deployed 5 new components today:
                </div>

                <ul>
                    <li>✅ Card grid component</li>
                    <li>✅ Startup template Aceternity</li>
                    <li>✅ Random file upload lol</li>
                    <li>✅ Himesh Reshammiya Music CD</li>
                    <li>✅ Built a real-time data visualization dashboard</li>
                </ul>
            </div>

        },
        {
            title: '2023',
            content: <div>
                <div className='mb-4'>
                    Deployed 5 new components today:
                </div>

                <ul>
                    <li>✅ Card grid component</li>
                    <li>✅ Startup template Aceternity</li>
                    <li>✅ Random file upload lol</li>
                    <li>✅ Himesh Reshammiya Music CD</li>

                    <li>✅ Built a real-time data visualization dashboard</li>
                </ul>
            </div>

        },




    ]
    return (
        <div className='bg-black'>
            <div className='px-64 pb-24'>
                <Timeline data={data} />
            </div>
        </div>
    )
}

export default Journey