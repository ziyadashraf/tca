
import img from "@/public/images/FormPic.png"
import TheLine from './TheLine'
import Cookies from "js-cookie"

const Form = () => {
    const lang = Cookies.get("lang") || "en"

    return (
        <div
            id="contact-form"
            style={{
                backgroundImage: `url(${img.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
            }}
            className='flex flex-row justify-around items-center px-4 lg:px-64 lg:py-24 md:py-16 md:px-12 py-12 px-6 '
        >
            <div className='flex flex-col md:flex-row justify-around items-start bg-black gap-8 sm:gap-16 md:gap-16 py-8 md:py-12 px-4 w-full'>
                <div className='w-full md:w-1/3 flex flex-col items-start justify-start h-full relative'>
                    <div className='hidden md:block'>
                        <TheLine mode={'dark'} />
                    </div>

                    <div className='md:ps-6'>
                        <p className='text-white text-lg font-light mb-4 uppercase'>
                            {lang === "ar" ? "لماذا تختارنا؟" : "Why Choose Us?"}
                        </p>
                        <h6 className='text-white text-2xl font-medium mb-8'>
                            {lang === "ar" ? "ارفع علامتك التجارية مع حلول تصميم مبتكرة" : "Elevate Your Brand with Innovative Design Solutions"}
                        </h6>
                        <p className='text-white text-md text-justify'>
                            {lang === "ar" ?
                                "في TCA، نتبنى نهجًا فريدًا في التصميم، مستفيدين من تقنيات متطورة وعقلية متقدمة لإعادة تعريف الإمكانيات الإبداعية. التزامنا بالابتكار والجودة يميزنا في الصناعة."
                                :
                                "At TCA, we take a unique approach to design, leveraging cutting-edge techniques and a forward-thinking mindset to redefine creative possibilities. Our commitment to innovation and quality sets us apart in the industry."
                            }
                        </p>
                    </div>


                </div>
                <form className='w-full md:w-1/2 flex flex-col gap-8 items-between justify-between h-full'>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col ">
                            <label className="text-white text-sm">{lang === "ar" ? "الاسم" : "Name"}</label>
                            <input
                                type="text"
                                className="bg-transparent text-white border-b border-white p-2 outline-none placeholder:text-gray-400 focus:border-b-2"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label className="text-white text-sm">{lang === "ar" ? "البريد الإلكتروني" : "Email"}</label>
                            <input
                                type="email"
                                className="bg-transparent text-white border-b border-white p-2 outline-none placeholder:text-gray-400 focus:border-b-2"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label className="text-white text-sm">{lang === "ar" ? "الهاتف" : "Phone"}</label>
                            <input
                                type="tel"
                                className="bg-transparent text-white border-b border-white p-2 outline-none placeholder:text-gray-400 focus:border-b-2"
                            />
                        </div>
                        <div className="flex flex-col gap-20">
                            <label className="text-white text-sm">{lang === "ar" ? "الوصف" : "Description"}</label>
                            <textarea
                                className="bg-transparent text-white border-b border-white p-2 outline-none placeholder:text-gray-400 focus:border-b-2 resize-none"
                            />
                        </div>
                        <button className='bg-white text-black px-3 py-3 text-sm font-semibold shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full md:w-1/5'>
                            {lang === "ar" ? "إرسال" : "Submit"}
                        </button>
                        {/* <Link
                            href="#"
                            className="bg-black px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </Link> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form