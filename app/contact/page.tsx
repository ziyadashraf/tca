import Welcome from "@/components/Welcome";
import Section from "@/components/Section";
import Jobs from "@/components/Contact/Jobs";
import Form from "@/components/Form";
import FormPic from "@/public/images/FormPic.png";

const ContactPage = () => {
  return (
    <div>
      <Welcome
        heading="UNLEASHING CREATIVE POTENTIAL"
        paragraph="Let's work together to transform your ideas into reality. Whether you're looking to revamp your brand, create stunning digital experiences, or launch innovative campaigns, our team is ready to bring your vision to life. Reach out today and let's start creating something extraordinary."
      />
      <Section
        Title="OUR LOCATION"
        Paragraph="Our team of professional designers and creative experts is dedicated to delivering impactful and innovative solutions for your business. With a focus on quality and attention to detail, we bring your vision to life, every time."
        Subtitle="Located in the heart of San Francisco, The Cloud Agency is surrounded by innovation and creativity, inspiring our work each day."
        image={FormPic.src}
        mode="white"
      />
      <Section
        Title="JOIN OUR TEAM"
        Paragraph="Are you passionate about creativity and innovation? Join our team of dedicated professionals who are committed to pushing boundaries and creating groundbreaking solutions."
        Subtitle="Be Part of Something Extraordinary"
        image={FormPic.src}
        mode="dark"
      />
      <Jobs />
      <Form />
    </div>
  );
};

export default ContactPage;
