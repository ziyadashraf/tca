"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types/payload-types";
import { getApiPath } from "@/utils/helpers";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

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
                className="absolute top-4 right-4 bg-black p-2 rounded-full text-white hover:bg-gray-800 z-10"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              <div className="w-full h-full relative">
                {projects[selectedProjectIndex].assets?.[currentAssetIndex]
                  ?.url &&
                  (projects[selectedProjectIndex].assets[
                    currentAssetIndex
                  ].mimeType.startsWith("video/") ? (
                    <video
                      src={getApiPath(
                        projects[selectedProjectIndex].assets[currentAssetIndex]
                          .url
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
                          .url
                      )}
                      alt={projects[selectedProjectIndex].name.en}
                      fill
                      className="object-contain"
                    />
                  ))}
                <button
                  onClick={previousAsset}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full text-black hover:bg-gray-200 z-10"
                >
                  <ChevronLeftIcon className="h-8 w-8" />
                </button>
                <button
                  onClick={nextAsset}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full text-black hover:bg-gray-200 z-10"
                >
                  <ChevronRightIcon className="h-8 w-8" />
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
