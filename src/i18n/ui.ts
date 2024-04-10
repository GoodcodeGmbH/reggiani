import it from "./locales/it.json";
import de from "./locales/de.json";
import en from "./locales/en.json";

export const languages = {
  it: "Italiano",
  de: "Deutsch",
  en: "English",
};

export const defaultLang = "it";
export const showDefaultLang = false;

export const ui = {
  it: it,
  de: de,

  en: en,
} as const;

export type LangKey = keyof (typeof ui)[typeof defaultLang];
