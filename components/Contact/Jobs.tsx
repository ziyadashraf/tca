import {
    AcademicCapIcon,
    BanknotesIcon,
    CheckBadgeIcon,
    ClockIcon,
    ReceiptRefundIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const actions = [
    {
        title: 'Graphic Designer',
        location: 'San Francisco, CA',
        description: 'We are seeking a creative Graphic Designer to join our team. Create stunning visuals for web and print media.',
        salary: '$70,000 - $90,000',
        type: 'Full-time',
        href: '#',
        icon: AcademicCapIcon,
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
    },
    {
        title: 'Frontend Developer',
        location: 'Remote',
        description: 'Join our engineering team to build beautiful, responsive web applications using React and TypeScript.',
        salary: '$90,000 - $120,000',
        type: 'Full-time',
        href: '#',
        icon: CheckBadgeIcon,
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-purple-50',
    },


]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Jobs() {
    return (
        <div className='px-64 pt-12 pb-64   bg-black'>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 mb-8">
                {actions.map((action) => (
                    <div
                        key={action.title}
                        className="relative border border-white bg-transparent p-6"
                    >
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-lg font-semibold text-gray-100">{action.title}</h3>
                            <p className="text-sm text-gray-400">{action.location}</p>
                            <p className="text-sm text-gray-400">{action.type} • {action.salary}</p>
                        </div>

                        <div className="mt-4 flex flex-col items-start justify-between">
                            <p className="text-sm text-gray-200 mb-14">
                                {action.description}
                            </p>
                            <Link
                                href={action.href}
                                className="inline-flex items-center bg-black px-4 py-3 text-sm font-medium text-white border border-white"
                            >
                                Apply now
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
            <div className="relative border border-white bg-white p-6 w-full" >
                <div className="flex flex-col space-y-2 mb-8">
                    <h3 className="text-3xl font-normal text-black">
                        Ready to embark on a new creative journey with us?<br /> Send us your CV and let's explore the possibilities together.</h3>
                </div>

                <div className="mt-4 flex flex-col items-start justify-between">
                    <Link
                        href=""
                        className="inline-flex items-center bg-white px-4 py-3 text-sm font-medium text-black border border-black"
                    >
                        Send your CV
                    </Link>
                </div>
            </div>
        </div >
    )
}
