"use client";

import { useState, FormEvent, useEffect } from "react";
import Cookies from "js-cookie";
import img from "@/public/images/FormPic.png";
import TheLine from "./TheLine";
import { fetchPageData, t } from "@/utils/helpers";

interface FormData {
  name: string;
  email: string;
  phone: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  description?: string;
}

const Form = () => {
  const lang = Cookies.get("lang") || "en";
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [contactEmail, setContactEmail] = useState<string>("");

  useEffect(() => {
    const getContactData = async () => {
      try {
        const { page } = await fetchPageData("/contact");
        const email = page?.contactFields?.contactInfo?.email;
        if (email) {
          setContactEmail(email);
        }
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    getContactData();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t(
        {
          en: "Name is required",
          ar: "الاسم مطلوب",
        },
        lang
      );
    }

    if (!formData.email.trim()) {
      newErrors.email = t(
        {
          en: "Email is required",
          ar: "البريد الإلكتروني مطلوب",
        },
        lang
      );
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t(
        {
          en: "Invalid email format",
          ar: "صيغة البريد الإلكتروني غير صحيحة",
        },
        lang
      );
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t(
        {
          en: "Phone is required",
          ar: "رقم الهاتف مطلوب",
        },
        lang
      );
    }

    if (!formData.description.trim()) {
      newErrors.description = t(
        {
          en: "Description is required",
          ar: "الوصف مطلوب",
        },
        lang
      );
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        description: "",
      });

      setSubmitStatus({
        type: "success",
        message: t(
          {
            en: "Form submitted successfully!",
            ar: "تم إرسال النموذج بنجاح!",
          },
          lang
        ),
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: t(
          {
            en: "Failed to submit form. Please try again.",
            ar: "فشل في إرسال النموذج. يرجى المحاولة مرة أخرى.",
          },
          lang
        ),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div
      id="contact"
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-row justify-around items-center px-4 lg:px-64 lg:py-24 md:py-16 md:px-12 py-12"
    >
      <div className="flex flex-col md:flex-row justify-around items-start bg-black gap-8 sm:gap-16 md:gap-16 py-8 md:py-12 px-4 w-full">
        <div className="w-full md:w-1/3 flex flex-col items-start justify-start h-full relative">
          <div className="hidden md:block">
            <TheLine mode={"dark"} />
          </div>

          <div className="md:ps-6">
            <p className="text-white text-lg font-light mb-4 uppercase">
              {t(
                {
                  en: "Why Choose Us?",
                  ar: "لماذا تختارنا؟",
                },
                lang
              )}
            </p>
            <h6 className="text-white text-2xl font-medium mb-8">
              {t(
                {
                  en: "Elevate Your Brand with Innovative Design Solutions",
                  ar: "ارفع علامتك التجارية مع حلول تصميم مبتكرة",
                },
                lang
              )}
            </h6>
            <p className="text-white text-md text-justify">
              {t(
                {
                  en: "At TCA, we take a unique approach to design, leveraging cutting-edge techniques and a forward-thinking mindset to redefine creative possibilities. Our commitment to innovation and quality sets us apart in the industry.",
                  ar: "في TCA، نتبنى نهجًا فريدًا في التصميم، مستفيدين من تقنيات متطورة وعقلية متقدمة لإعادة تعريف الإمكانيات الإبداعية. التزامنا بالابتكار والجودة يميزنا في الصناعة.",
                },
                lang
              )}
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col gap-8 items-between justify-between h-full"
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <label className="text-white text-sm">
                {t(
                  {
                    en: "Name",
                    ar: "الاسم",
                  },
                  lang
                )}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`bg-transparent text-white border-b ${errors.name ? "border-red-500" : "border-white"
                  } p-2 outline-none placeholder:text-gray-400 focus:border-b-2`}
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">{errors.name}</span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-white text-sm">
                {t(
                  {
                    en: "Email",
                    ar: "البريد الإلكتروني",
                  },
                  lang
                )}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-transparent text-white border-b ${errors.email ? "border-red-500" : "border-white"
                  } p-2 outline-none placeholder:text-gray-400 focus:border-b-2`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-white text-sm">
                {t(
                  {
                    en: "Phone",
                    ar: "الهاتف",
                  },
                  lang
                )}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`bg-transparent text-white border-b ${errors.phone ? "border-red-500" : "border-white"
                  } p-2 outline-none placeholder:text-gray-400 focus:border-b-2`}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-20">
              <label className="text-white text-sm">
                {t(
                  {
                    en: "Description",
                    ar: "الوصف",
                  },
                  lang
                )}
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={`bg-transparent text-white border-b ${errors.description ? "border-red-500" : "border-white"
                  } p-2 outline-none placeholder:text-gray-400 focus:border-b-2 resize-none`}
              />
              {errors.description && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.description}
                </span>
              )}
            </div>

            {submitStatus.type && (
              <div
                className={`p-4 rounded ${submitStatus.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
                  }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-white text-black px-3 py-3 text-sm font-semibold shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full md:w-1/5 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              {isSubmitting
                ? t(
                  {
                    en: "Submitting...",
                    ar: "جاري الإرسال...",
                  },
                  lang
                )
                : t(
                  {
                    en: "Submit",
                    ar: "إرسال",
                  },
                  lang
                )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
