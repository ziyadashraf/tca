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
  const [currentAssetIndex, setCurrentAssetIndex] = useState(0);

  const openCarousel = (index: number) => {
    setSelectedProjectIndex(index);
    setIsCarouselOpen(true);
    setCurrentAssetIndex(0);
  };

  const nextAsset = () => {
    if (
      selectedProjectIndex !== null &&
      projects[selectedProjectIndex]?.assets
    ) {
      setCurrentAssetIndex((prev) =>
        prev === (projects[selectedProjectIndex].assets?.length || 0) - 1
          ? 0
          : prev + 1
      );
    }
  };

  const previousAsset = () => {
    if (
      selectedProjectIndex !== null &&
      projects[selectedProjectIndex]?.assets
    ) {
      setCurrentAssetIndex((prev) =>
        prev === 0
          ? (projects[selectedProjectIndex].assets?.length || 0) - 1
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
                  setCurrentAssetIndex(0);
                  setSelectedProjectIndex(null);
                }}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                Close
              </button>
              <div className="w-full h-full relative">
                {projects[selectedProjectIndex].assets?.[currentAssetIndex]
                  ?.media &&
                  (projects[selectedProjectIndex].assets[
                    currentAssetIndex
                  ].media.mimeType.startsWith("video/") ? (
                    <video
                      src={getApiPath(
                        projects[selectedProjectIndex].assets[currentAssetIndex]
                          .media.url
                      )}
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                      loop
                      playsInline
                    />
                  ) : (
                    <Image
                      src={getApiPath(
                        projects[selectedProjectIndex].assets[currentAssetIndex]
                          .media.url
                      )}
                      alt={projects[selectedProjectIndex].name.en}
                      fill
                      className="object-contain"
                    />
                  ))}
                <button
                  onClick={previousAsset}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                >
                  ←
                </button>
                <button
                  onClick={nextAsset}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                >
                  →
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {projects[selectedProjectIndex].assets?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentAssetIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        currentAssetIndex === index ? "bg-white" : "bg-white/50"
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
