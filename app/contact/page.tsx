/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Welcome from "@/components/Welcome";

import Section from "@/components/Section";

import Jobs from "@/components/Contact/Jobs";
import Form from "@/components/Form";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import { t, fetchPageData } from "@/utils/helpers";
import { Page } from "@/types/payload-types";

const ContactPage = () => {
  const { data } = useQuery({
    queryKey: ["contact"],
    queryFn: async () => await fetchPageData("/contact"),
  });

  const lang = Cookies.get("lang");

  if (!data) return null;

  return (
    <div>
      <Welcome
        heading={t(data?.page?.contactFields?.welcomeSection?.title!, lang)}
        paragraph={t(
          data?.page?.contactFields?.welcomeSection?.subtitle!,
          lang
        )}
      />
      {/* {data?.page?.contactFields?.sections.map((section: any, index: number) => (
        <Section
          key={index}
          Title={t(section.title, lang)}
          Paragraph={t(section.description, lang)}
          Subtitle={t(section.subtitle, lang)}
          image={getApiPath(section.image.url)}
          mode={section.mode || "white"}
        />
      ))} */}

      <Jobs />
      <Form />
    </div>
  );
};

export default ContactPage;
