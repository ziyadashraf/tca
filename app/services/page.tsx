import Welcome from "@/components/Welcome"
import Services from "@/components/Services/Services"
import Form from "@/components/Form"
import Gradient from "@/components/Gradient"
const ServicesPage = () => {


    return (
        <div>
            <Welcome
                heading="UNLEASHING CREATIVITY WITH THE CLOUD AGENCY"
                paragraph="At The Cloud Agency, we are dedicated to providing top-notch creative services that enable businesses to thrive in the digital realm. This is a great place to expand on our mission and the array of services we offer."
            />
            <Gradient />
            <Services />
            <Form />
        </div>
    )
}

export default ServicesPage