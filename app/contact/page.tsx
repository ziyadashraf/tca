"use client";

import Welcome from "@/components/Welcome";
import Section from "@/components/Section";
import Jobs from "@/components/Contact/Jobs";
import Form from "@/components/Form";
import FormPic from "@/public/images/FormPic.png";
import Cookies from "js-cookie";

import { useQuery } from "@tanstack/react-query";
import { fetchHomeData, getApiPath, t } from "@/utils/helpers";
import { useMemo } from "react";

const ContactPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["landing"],
    queryFn: fetchHomeData,
  });

  const contact = useMemo(() => data?.contact, [data]);

  const lang = Cookies.get("lang");

  if (isLoading) return null;

  return (
    <div>
      <Welcome
        heading={t(contact.title, lang)}
        paragraph={t(contact.subtitle, lang)}
      />
      {contact?.sections.map((section: any, index: number) => (
        <Section
          key={index}
          Title={t(section.title, lang)}
          Paragraph={t(section.description, lang)}
          Subtitle={t(section.subtitle, lang)}
          image={getApiPath(section.image.url)}
          mode={section.mode || "white"}
        />
      ))}

      <Jobs />
      <Form />
    </div>
  );
};

export default ContactPage;
