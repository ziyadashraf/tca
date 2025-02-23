import { Translate } from "@google-cloud/translate/build/src/v2";

const translate = new Translate({
  key: "AIzaSyA7jPPMuN5IOZQ7BcrV3_LIeLVOA0UtAIU",
});

export async function translateText(text: string, targetLang: "ar" | "en") {
  if (targetLang === "en") return text;

  try {
    const [translation] = await translate.translate(text, targetLang);
    return translation;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
}

export const translateObjectValues = async (
  obj: any,
  lang: "en" | "ar"
): Promise<any> => {
  if (!obj || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return Promise.all(
      obj.map(async (item) => translateObjectValues(item, lang))
    );
  }

  const translatedObj: Record<string, any> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];

      if (typeof value === "string") {
        translatedObj[key] = await translateText(value, lang);
      } else {
        translatedObj[key] = await translateObjectValues(value, lang);
      }
    }
  }

  return translatedObj;
};
