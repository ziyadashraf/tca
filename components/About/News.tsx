"use client";

import Cookies from "js-cookie";
import React, { useEffect, useMemo, useRef } from "react";
import TheLine from "../TheLine";
import { useQuery } from "@tanstack/react-query";
import { fetchNewsData, getApiPath, t } from "@/utils/helpers";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // Add more posts as needed
];

const News = () => {
  const ref = useRef(null);

  const { data } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNewsData,
  });

  const news = useMemo(() => data?.news, [data]);

  const lang = Cookies.get("lang");

  useEffect(() => {
    // Add opacity-0 class after mount
    document.querySelectorAll('[data-animate="true"]').forEach((el) => {
      el.classList.add("opacity-0", "translate-y-10");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate="true"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="lg:px-64 pt-12 pb-24 px-6 bg-white">
      <div className="relative">
        <TheLine mode={"white"} size="1/4" />
        <div className="mb-8 ps-6">
          <p className="text-black text-lg font-light mb-4 uppercase">News</p>
          <h6 className="text-black text-2xl font-medium mb-8">
            The Cloud Agency In The Press
          </h6>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-16 divide-y divide-gray-200">
        {news?.map((post: any, index: number) => (
          <article
            key={index}
            className="transition-all pt-12 duration-700 ease-out flex flex-col items-start justify-between"
            style={{ transitionDelay: `${index * 200}ms` }}
            data-animate="true"
          >
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.date} className="text-gray-500">
                {new Date(post.date).toDateString()}
              </time>
              <a
                href={"#"}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                {t(post.title, lang)}
              </a>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href={"#"}>
                  <span className="absolute inset-0" />
                  {t(post.title, lang)}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {t(post.content, lang)}
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <img
                alt=""
                src={getApiPath(post.author.profileImage.url)}
                className="h-10 w-10 rounded-full bg-gray-50"
              />
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href={post.author.href}>
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </a>
                </p>
                <p className="text-gray-600">{t(post.author.jobTitle, lang)}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default News;
