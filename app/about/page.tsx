import Welcome from '@/components/Welcome'
import News from '@/components/About/News'
import Form from '@/components/Form'
import Section from '@/components/Section'
import FormPic from '@/public/images/FormPic.png'
import Journey from '@/components/About/Journey'

const About = () => {
    return (
        <div>
            <Welcome
                heading="WELCOME TO THE CLOUD AGENCY"
                paragraph="The Cloud Agency is an online ad agency that has professional designers and provides all kinds of creative services such as Branding, Graphic design, Motion graphic design, 3D animation, Events Design, Content creation, 3D Design, and Web development. We are dedicated to helping businesses elevate their brand presence and create engaging content that captivates their audience."
            />
            {/* <Mission /> */}
            <Section
                Title="Our Mission"
                Paragraph="At The Cloud Agency, we are committed to redefining the way businesses connect with their audience. Our mission is to empower brands through creativity, offering a wide range of services including Branding, Graphic design, Motion graphic design, 3D animation, Events Design, Content creation, 3D Design, and Web development. This is a great space to learn more about our company and the innovative services we provide."
                Subtitle="Empowering Brands Through Creativity"
                image={FormPic}
                mode="white"
            />
            <Section
                Title="Our Journey"
                Paragraph=''
                Subtitle="Empowering Brands Through Creativity"
                image=""
                mode="dark"
            />

            <Journey />
            {/* <ParallaxImage /> */}
            <Form />

            <News />
        </div>
    )
}

export default About 