"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types/payload-types";
import { getApiPath } from "@/utils/helpers";

interface ProjectCarouselProps {
  projects: Project[];
  onProjectClick?: (index: number) => void;
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openCarousel = (index: number) => {
    setSelectedProjectIndex(index);
    setIsCarouselOpen(true);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (
      selectedProjectIndex !== null &&
      projects[selectedProjectIndex]?.images
    ) {
      setCurrentImageIndex((prev) =>
        prev === (projects[selectedProjectIndex].images?.length || 0) - 1
          ? 0
          : prev + 1
      );
    }
  };

  const previousImage = () => {
    if (
      selectedProjectIndex !== null &&
      projects[selectedProjectIndex]?.images
    ) {
      setCurrentImageIndex((prev) =>
        prev === 0
          ? (projects[selectedProjectIndex].images?.length || 0) - 1
          : prev - 1
      );
    }
  };

  return (
    <>
      {isCarouselOpen &&
        selectedProjectIndex !== null &&
        projects[selectedProjectIndex] && (
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="w-full h-full relative">
              <button
                onClick={() => {
                  setIsCarouselOpen(false);
                  setCurrentImageIndex(0);
                  setSelectedProjectIndex(null);
                }}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                Close
              </button>
              <div className="w-full h-full relative">
                {projects[selectedProjectIndex].images?.[currentImageIndex]
                  ?.image && (
                  <Image
                    src={getApiPath(
                      projects[selectedProjectIndex].images[currentImageIndex]
                        .image.url
                    )}
                    alt={projects[selectedProjectIndex].name}
                    fill
                    className="object-contain"
                  />
                )}
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
                  {projects[selectedProjectIndex].images?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        currentImageIndex === index ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      <div id="carousel-trigger" className="hidden">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => openCarousel(index)}
            data-project-index={index}
          />
        ))}
      </div>
    </>
  );
}
