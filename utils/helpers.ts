import Cookies from "js-cookie";
import { stringify } from "qs-esm";
import { Page, Service, NewsItem, Project } from "../types/payload-types";

export const t = (obj: { en: string; ar: string }, lang: string = "en") => {
  return lang === "en" ? obj?.en : obj?.ar;
};

export const switchLanguage = (lang: "en" | "ar") => {
  Cookies.set("lang", lang, { expires: 365, path: "/" });
};

export const getLanguage = (): "en" | "ar" =>
  Cookies.get("lang") as "en" | "ar";

export const API_URL = "https://admin.tca.com.sa";
// export const API_URL = "http://localhost:3001";

export const getApiPath = (path: string) => {
  if (!path) return "";
  if (path.startsWith(API_URL)) return path;
  return `${API_URL}${path}`;
};

///////////////////////////////////////////////////////////////

export const fetchNewsData = async (): Promise<{ news: NewsItem[] }> => {
  const res = await fetch(getApiPath("/api/news"), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  const news = data?.docs || [];

  return { news };
};

export const fetchPageData = async (
  slug: string
): Promise<{ page: Page | null }> => {
  const query = stringify(
    {
      where: {
        slug: {
          equals: slug,
        },
      },
    },
    {
      addQueryPrefix: true,
    }
  );

  const res = await fetch(getApiPath(`/api/pages${query}`), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  const page = data?.docs[0] || null;

  return { page };
};

export const fetchServicesData = async (): Promise<{ services: Service[] }> => {
  const res = await fetch(getApiPath("/api/services/"), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  const services = data?.docs || [];

  return { services };
};

export const fetchProjectsData = async (
  serviceSlug: string
): Promise<{ projects: Project[] }> => {
  const query = stringify(
    {
      where: {
        "service.slug": {
          equals: serviceSlug,
        },
      },
      depth: 1,
    },
    {
      addQueryPrefix: true,
    }
  );

  const res = await fetch(getApiPath(`/api/projects${query}`), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  const projects = data?.docs || [];

  return { projects };
};
