"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

const posts = [
  {
    "id": 1,
    "title": {
      "en": "Branding",
      "ar": "الهوية التجارية"
    },
    "slug": "branding",
    "description": {
      "en": "Explore the latest trends and best practices in branding.",
      "ar": "استكشف أحدث الاتجاهات وأفضل الممارسات في الهوية التجارية."
    },
    "projects": [
      {
        "id": 1,
        "title": {
          "en": "Project A",
          "ar": "المشروع أ"
        },
        "coverImage": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
        "images": [
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
        ]
      },
      {
        "id": 2,
        "title": {
          "en": "Project B",
          "ar": "المشروع ب"
        },
        "coverImage": "https://images.unsplash.com/photo-3",
        "images": [
          "https://images.unsplash.com/photo-3",
          "https://images.unsplash.com/photo-4"
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": {
      "en": "Web Development",
      "ar": "تطوير الويب"
    },
    "slug": "web-development",
    "description": {
      "en": "TCA Developers specializes in crafting custom websites that prioritize user experience and visual appeal.",
      "ar": "متخصصو TCA في تطوير مواقع ويب مخصصة تركز على تجربة المستخدم والجاذبية البصرية."
    },
    "projects": [
      {
        "id": 201,
        "title": {
          "en": "E-Commerce Website",
          "ar": "موقع تجارة إلكترونية"
        },
        "coverImage": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        "images": [
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
          "https://images.unsplash.com/photo-1517428847318-05aa460d83de"
        ]
      },
      {
        "id": 202,
        "title": {
          "en": "Corporate Website",
          "ar": "موقع شركة"
        },
        "coverImage": "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        "images": [
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
          "https://images.unsplash.com/photo-1559136653-cdfd5ec5a82d"
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": {
      "en": "Campaigns",
      "ar": "الحملات الإعلانية"
    },
    "slug": "campaigns",
    "description": {
      "en": "Our team specializes in crafting creative concepts and content creation tailored for diverse media platforms.",
      "ar": "فريقنا متخصص في تطوير الأفكار الإبداعية وإنشاء المحتوى لمختلف منصات الإعلام."
    },
    "projects": [
      {
        "id": 301,
        "title": {
          "en": "Social Media Campaign",
          "ar": "حملة على وسائل التواصل الاجتماعي"
        },
        "coverImage": "https://images.unsplash.com/photo-1451187580459-43490279c0fa",

        "images": [
          "https://images.unsplash.com/photo-1517428847318-05aa460d83de",
          "https://images.unsplash.com/photo-1573164574397-15a69f530c64"
        ]
      },
      {
        "id": 302,
        "title": {
          "en": "Outdoor Advertising",
          "ar": "إعلانات خارجية"
        },
        "coverImage": "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        "images": [
          "https://images.unsplash.com/photo-1559136653-cdfd5ec5a82d",
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": {
      "en": "Event Designs",
      "ar": "تصميم الفعاليات"
    },
    "slug": "event-designs",
    "description": {
      "en": "All creative solutions for your event are covered, from print designs to immersive experiences.",
      "ar": "جميع الحلول الإبداعية لفعاليتك مشمولة، من تصاميم الطباعة إلى تجارب غامرة."
    },
    "projects": [
      {
        "id": 401,
        "title": {
          "en": "Corporate Event",
          "ar": "حدث شركة"
        },
        "coverImage": "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        "images": [
          "https://images.unsplash.com/photo-1559136653-cdfd5ec5a82d",
          "https://images.unsplash.com/photo-1517428847318-05aa460d83de"
        ]
      },
      {
        "id": 402,
        "title": {
          "en": "Wedding Design",
          "ar": "تصميم حفلات الزفاف"
        },
        "coverImage": "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        "images": [
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
          "https://images.unsplash.com/photo-1573164574397-15a69f530c64"
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": {
      "en": "Motion Graphic Design",
      "ar": "تصميم الجرافيك المتحرك"
    },
    "slug": "motion-graphics",
    "description": {
      "en": "With our motion graphic design expertise, we bring your ideas to life through captivating visual storytelling.",
      "ar": "بفضل خبرتنا في تصميم الجرافيك المتحرك، نقوم بتحويل أفكارك إلى قصص مرئية جذابة."
    },
    "projects": [
      {
        "id": 501,
        "title": {
          "en": "Explainer Video",
          "ar": "فيديو توضيحي"
        },
        "coverImage": "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        "images": [
          "https://images.unsplash.com/photo-1559136653-cdfd5ec5a82d",
          "https://images.unsplash.com/photo-1517428847318-05aa460d83de"
        ]
      },
      {
        "id": 502,
        "title": {
          "en": "Social Media Motion Graphics",
          "ar": "رسوم متحركة لمنصات التواصل"
        },
        "coverImage": "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        "images": [
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
          "https://images.unsplash.com/photo-1573164574397-15a69f530c64"
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": {
      "en": "3D Animation",
      "ar": "الرسوم المتحركة ثلاثية الأبعاد"
    },
    "slug": "3d-animation",
    "description": {
      "en": "Immerse your audience in compelling 3D animated visuals that leave a lasting impression.",
      "ar": "أبهر جمهورك بمشاهد ثلاثية الأبعاد مميزة تترك انطباعًا دائمًا."
    },
    "projects": [
      {
        "id": 601,
        "title": {
          "en": "Product 3D Showcase",
          "ar": "عرض ثلاثي الأبعاد للمنتج"
        },
        "coverImage": "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        "images": [
          "https://images.unsplash.com/photo-1532009877282-3340270e0529",
          "https://images.unsplash.com/photo-1573164574397-15a69f530c64"
        ]
      },
      {
        "id": 602,
        "title": {
          "en": "3D Animated Commercial",
          "ar": "إعلان متحرك ثلاثي الأبعاد"
        },
        "coverImage": "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        "images": [
          "https://images.unsplash.com/photo-1559136653-cdfd5ec5a82d",
          "https://images.unsplash.com/photo-1573164574397-15a69f530c64"
        ]
      }
    ]
  }
];

export default function ServicesPage() {
  const pathname = usePathname(); // Get the current pathname
  const serviceSlug = pathname.split("/").pop(); // Extract the service slug from the pathname
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Determine the current language (you can replace this with your actual language detection logic)
  const lang = "ar"; // Change this to "en" for English

  // Find the selected post based on the service slug
  const selectedPost = posts.find((post) => post.slug === serviceSlug);

  const nextImage = () => {
    if (selectedPost && selectedProjectIndex !== null) {
      setCurrentImageIndex((prev) =>
        prev === selectedPost.projects[selectedProjectIndex].images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const previousImage = () => {
    if (selectedPost && selectedProjectIndex !== null) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedPost.projects[selectedProjectIndex].images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {selectedPost ? selectedPost.title[lang] : "Service Not Found"}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {selectedPost ? selectedPost.description[lang] : "No description available."}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {selectedPost?.projects.map((project, index) => (
            <article
              key={project.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              onClick={() => {
                setSelectedProjectIndex(index); // Set the index of the selected project
                setIsCarouselOpen(true);
                setCurrentImageIndex(0); // Reset image index when opening a new project
              }}
            >
              <img
                src={project.coverImage}
                alt={project.title[lang]}
                className="absolute inset-0 -z-10 h-full w-full object-cover rounded-2xl"
              />
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                {project.title[lang]}
              </h3>
            </article>
          ))}
        </div>
      </div>

      {/* Updated Carousel Modal */}
      {isCarouselOpen && selectedPost && selectedProjectIndex !== null && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="w-full h-full relative">
            <button
              onClick={() => {
                setIsCarouselOpen(false);
                setCurrentImageIndex(0);
                setSelectedProjectIndex(null); // Reset selected project
              }}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              Close
            </button>
            <div className="w-full h-full relative">
              <img
                src={selectedPost.projects[selectedProjectIndex].images[currentImageIndex]}
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
                {selectedPost.projects[selectedProjectIndex].images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full ${currentImageIndex === index ? "bg-white" : "bg-white/50"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
