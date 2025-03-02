import Cookies from "js-cookie";

const Statement = () => {
    const lang = Cookies.get("lang") || "en"; // Get the language from cookies, default to "en"

    return (
        <div className={`bg-black lg:px-64 lg:py-24 md:py-16 md:px-12 py-12 px-6`}>
            <h6 className={`text-justify ltr:hidden text-white font-normal lg:text-2xl mb-4 text-justify text-lg`}>
                في TCA، نحن نعمل على تغيير الطريقة التي تنظر بها الشركات إلى التصميم والإبداع، ونقدم أفكارًا جديدة وحلولاً فريدة من نوعها لكل مشروع، وندفع حدود ما يمكن أن يفعله التصميم.

            </h6>
            <p className={`text-justify ltr:hidden text-white lg:text-lg text-justify text-md`}>

                يلتزم فريقنا من المصممين المحترفين والخبراء الإبداعيين بتقديم نتائج استثنائية تتجاوز توقعات عملائنا. نحن ملتزمون بتجاوز الحدود وخلق تجارب لا تُنسى من خلال عملنا.
            </p>

            <h6 className={`text-justify rtl:hidden text-white font-normal lg:text-2xl mb-4 text-justify text-lg`}>


                At TCA, we're all about changing how businesses see design and creativity, We bring fresh ideas and one of a kind solutions to every project, pushing the boundaries of what design can do.

            </h6>
            <p className={`text-justify rtl:hidden text-white lg:text-lg text-justify text-md`}>

                Our team of professional designers and creative experts are dedicated to delivering exceptional results that exceed our clients' expectations. We are committed to pushing boundaries and creating memorable experiences through our work.

            </p>
        </div>
    )
}

export default Statement