'use client'
import { useState } from 'react';

const posts = [
    {
        id: 1,
        title: 'TCA Branding',
        description: 'Explore the latest trends and best practices in web development, from responsive design to performance optimization.',
        images: [
            'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
            'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
        ],
        thumbnailImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    },
    {
        id: 2,
        title: 'Mastering Identity',
        description: 'Learn how to design scalable and resilient cloud solutions for modern applications.',
        images: [
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
            'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        ],
        thumbnailImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    },
    {
        id: 3,
        title: 'Whatever project name',
        description: 'Discover how to leverage AI capabilities to enhance your software solutions.',
        images: [
            'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        ],
        thumbnailImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: 4,
        title: 'Whatever project name',
        description: 'Discover how to leverage AI capabilities to enhance your software solutions.',
        images: [
            'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        ],
        thumbnailImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
        id: 5,
        title: 'Whatever project name',
        description: 'Discover how to leverage AI capabilities to enhance your software solutions.',
        images: [
            'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        ],
        thumbnailImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
]

export default function ServicesPage() {
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const selectedPost = selectedProject ? posts.find(post => post.id === selectedProject) : null;

    const nextImage = () => {
        if (selectedPost) {
            setCurrentImageIndex((prev) =>
                prev === selectedPost.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const previousImage = () => {
        if (selectedPost) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedPost.images.length - 1 : prev - 1
            );
        }
    };

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Branding</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Stay updated with the latest technological advances and expert insights.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                            onClick={() => {
                                setSelectedProject(post.id);
                                setIsCarouselOpen(true);
                            }}
                        >
                            <img alt="" src={post.thumbnailImage} className="absolute inset-0 -z-10 h-full w-full object-cover" />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                {post.title}
                            </h3>
                        </article>
                    ))}
                </div>
            </div>

            {/* Updated Carousel Modal */}
            {isCarouselOpen && selectedPost && (
                <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
                    <div className="w-full h-full relative">
                        <button
                            onClick={() => {
                                setIsCarouselOpen(false);
                                setCurrentImageIndex(0);
                            }}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                        >
                            Close
                        </button>
                        <div className="w-full h-full relative">
                            <img
                                src={selectedPost.images[currentImageIndex]}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                            <button
                                onClick={previousImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                            >
                                ←
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                            >
                                →
                            </button>
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {selectedPost.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
