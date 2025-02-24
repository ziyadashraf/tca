"use client";

import Welcome from "@/components/Welcome";
import News from "@/components/About/News";
import Form from "@/components/Form";
import Section from "@/components/Section";
import FormPic from "@/public/images/FormPic.png";
import Journey from "@/components/About/Journey";
import Cookies from "js-cookie";

import { useQuery } from "@tanstack/react-query";
import { fetchHomeData, getApiPath, t } from "@/utils/helpers";
import { useMemo } from "react";

const About = () => {
  const { data } = useQuery({
    queryKey: ["landing"],
    queryFn: fetchHomeData,
  });

  const about = useMemo(() => data?.about, [data]);

  const lang = Cookies.get("lang");

  return (
    <div>
      <Welcome
        heading={t(about?.title, lang) || "WELCOME TO THE CLOUD AGENCY"}
        paragraph={
          t(about?.subtitle, lang) ||
          "The Cloud Agency is an online ad agency that has professional designers and provides all kinds of creative services such as Branding, Graphic design, Motion graphic design, 3D animation, Events Design, Content creation, 3D Design, and Web development. We are dedicated to helping businesses elevate their brand presence and create engaging content that captivates their audience."
        }
      />
      {/* <Mission /> */}
      <Section
        Title={t(about?.mission.title, lang) || "Our Mission"}
        Subtitle={
          t(about?.mission.subtitle, lang) ||
          "Empowering Brands Through Creativity"
        }
        Paragraph={
          t(about?.mission.description, lang) ||
          "At The Cloud Agency, we are committed to redefining the way businesses connect with their audience. Our mission is to empower brands through creativity, offering a wide range of services including Branding, Graphic design, Motion graphic design, 3D animation, Events Design, Content creation, 3D Design, and Web development. This is a great space to learn more about our company and the innovative services we provide."
        }
        image={getApiPath(about?.mission.image.url) || FormPic.src}
        mode="white"
      />

      <Journey />
      {/* <ParallaxImage /> */}
      <Form />

      <News />
    </div>
  );
};

export default About;
