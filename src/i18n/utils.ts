import { ui, defaultLang, showDefaultLang } from "./ui";

// export function getLangFromUrl(url: URL) {
//   const [, lang] = url.pathname.split("/");
//   if (lang in ui) return lang as keyof typeof ui;
//   return defaultLang;
// }
export function getLangFromUrl(url: URL) {
  // Assuming your URLs are of the form /reggiani/en/some-path
  const parts = url.pathname.split("/");
  // Adjusting the index to account for the base URL segment
  const lang = parts[1]; // Lang is now the third part due to /reggiani being the first

  if (lang && ui[lang]) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

// export function useTranslatedPath(lang: keyof typeof ui) {
//   return function translatePath(path: string, l: string = lang) {
//     return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
//   };
// }

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    // Including the base URL in the path
    const basePath = "https://www.reggianistd.com/";
    if (!showDefaultLang && l === defaultLang) {
      return `${basePath}${path}`;
    } else {
      return `${basePath}/${l}${path}`;
    }
  };
}
