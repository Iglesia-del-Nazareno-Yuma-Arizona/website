import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { es as programEs, en as programEn } from "../pages/Program/translation";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        supportedLngs: ["es", "en"],
        resources: {
            es: {
                program: programEs,
            },
            en: {
                program: programEn,
            },
        },
        interpolation: { escapeValue: false },
    });

export default i18n;
