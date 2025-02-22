import Gradient from "@/components/Gradient";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Stats from "@/components/Stats";
import Form from "@/components/Form";
const services = [
  {
    service: "Branding",
    description: "Our branding services are tailored to establish a strong and impactful brand identity for your business. We focus on creating visual elements that resonate with your target audience and convey your brand's essence.",
    image: "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
    link: "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
    type: "white"
  },
  {
    service: "Campaigns",
    description: "Our team at TCA specializes in crafting creative concepts and content creation tailored for diverse media platforms, including Out-of-Home (OOH), social media, and TV commercials. We pride ourselves on delivering innovative designs and captivating content that captivates audiences across all channels, ensuring maximum impact and engagement for our clients' brands.",
    image: "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
    link: "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
    type: "gray"
  },
  {
    service: "3D Animations",
    description: "Immerse your audience in compelling 3D animated visuals that leave a lasting impression. Our 3D animation services elevate your brand's storytelling and provide an immersive experience that resonates with your target audience.",
    image: "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
    link: "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
    type: "white"
  },
  {
    service: "Motion graphic design",
    description: "With our motion graphic design expertise, we bring your ideas to life through captivating visual storytelling. Our dynamic approach to motion graphics enhances brand narratives and engages audiences across various platforms.",
    image: "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
    link: "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
    type: "gray"
  },
  {
    service: "Events design",
    description: "All creative solutions for your event is covered. From print designs to immersive 3D booth experiences, our team is dedicated to bringing your vision to life. Whether you're planning a corporate conference, a trade show, or a special event, we elevate your brand and make a lasting impression.",
    image: "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
    link: "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
    type: "white"
  },
  {
    service: "Web development",
    description: "TCA Developers specializes in crafting custom websites that prioritize user experience and visual appeal. They leverage cutting-edge technology to create solutions that empower businesses of all sizes to thrive online.",
    image: "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
    link: "https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
    type: "gray"
  }
];

export default function Home() {
  return (
    <>
      <Hero />
      <Gradient />
      {services.map((service, index) => (
        <Services
          key={index}
          {...service}
        />
      ))}
      <Partners />
      <Stats />
      <Form />
    </>
  );
}
