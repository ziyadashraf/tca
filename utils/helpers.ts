import Cookies from "js-cookie";

export const t = (obj: { en: string; ar: string }, lang: string = "en") => {
  return lang === "en" ? obj?.en : obj?.ar;
};

export const switchLanguage = (lang: "en" | "ar") => {
  Cookies.set("lang", lang, { expires: 365, path: "/" });
};

export const getLanguage = (): "en" | "ar" =>
  Cookies.get("lang") as "en" | "ar";

export const API_URL = "http://localhost:3001";

export const getApiPath = (path: string) => `${API_URL}${path}`;

///////////////////////////////////////////////////////////////

export const fetchNewsData = async () => {
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

export const fetchHomeData = async () => {
  const res = await fetch(
    getApiPath(
      "/api/pages/67badded9dafb13bb542eddc?depth=1&draft=false&locale=undefined"
    ),
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  const landing = data.landing;
  const partners = data.partners;
  const services = data.services;
  const stats = data.stats;
  const about = data.about;
  const contact = data.contact;

  return { landing, partners, services, stats, about, contact };
};

export const fetchServicesData = async () => {
  const res = await fetch(
    getApiPath("/api/services/?depth=1&draft=false&locale=undefined"),
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  const services = data?.docs || [];

  return { services };
};

export const fetchHeaderData = async () => {
  const res = await fetch(
    getApiPath(
      "/api/header/67bafadfec3aa8fcc4c012ba?depth=1&draft=false&locale=undefined"
    ),
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  const products = data?.products || [];

  return { products };
};
