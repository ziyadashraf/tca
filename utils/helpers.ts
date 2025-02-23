import Cookies from "js-cookie";

export const switchLanguage = (lang: "en" | "ar") => {
  Cookies.set("lang", lang, { expires: 365, path: "/" });
};

export const getLanguage = () => Cookies.get("lang");

export const API_URL = "http://localhost:3001";

export const getApiPath = (path: string) => `${API_URL}${path}`;

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

  return { landing, partners, services, stats };
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
