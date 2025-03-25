import { fetchPageData, t } from "@/utils/helpers";
import { cookies } from "next/headers";

const Statement = async () => {
  const { page } = await fetchPageData("/");

  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as "en" | "ar";

  return (
    <div className={`bg-black lg:px-64 lg:py-24 md:py-16 md:px-12 py-12 px-6`}>
      <h6
        className={`text-justify rtl:hidden text-white font-normal lg:text-2xl mb-4 text-lg`}
      >
        {t(page?.homeFields?.hero?.description!, lang)}
      </h6>
      {/* <p className={`text-justify rtl:hidden text-white lg:text-lg text-md`}>
        Our team of professional designers and creative experts are dedicated to
        delivering exceptional results that exceed our clients' expectations. We
        are committed to pushing boundaries and creating memorable experiences
        through our work.
      </p> */}
    </div>
  );
};

export default Statement;
