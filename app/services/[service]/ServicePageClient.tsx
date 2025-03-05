"use client";

import { Project, Service } from "@/types/payload-types";
import { t, getApiPath } from "@/utils/helpers";
import ProjectCarousel from "./ProjectCarousel";
import Image from "next/image";

interface ServicePageClientProps {
  selectedService: Service | undefined;
  projects: Project[];
  lang: "en" | "ar";
}

export default function ServicePageClient({
  selectedService,
  projects,
  lang,
}: ServicePageClientProps) {
  const handleProjectClick = (index: number) => {
    const carouselTrigger = document.getElementById("carousel-trigger");
    const button = carouselTrigger?.querySelector(
      `[data-project-index="${index}"]`
    ) as HTMLButtonElement;
    button?.click();
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {selectedService
              ? t(selectedService.name, lang)
              : "Service Not Found"}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {selectedService
              ? t(selectedService.longDescription, lang)
              : "No description available."}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="relative isolate flex flex-col justify-end overflow-hidden  bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => handleProjectClick(index)}
            >
              {project.images?.[0]?.image && (
                <Image
                  src={getApiPath(project.images[0].image.url)}
                  alt={project.name}
                  fill
                  className="absolute inset-0 -z-10 h-full w-full object-cover "
                />
              )}
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                {project.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
      <ProjectCarousel projects={projects} />
    </div>
  );
}
