import { motion } from "framer-motion";

import { useTranslations, useTranslatedPath } from "@i18n/utils";
const url = import.meta.env.BASE_URL;

function wrapCaps(text) {
  const elements: React.ReactNode[] = [];
  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
      elements.push(
        <span key={i} className="text-reggianiRed text-8xl md:text-8xl">
          {text[i]}
        </span>,
      );
    } else {
      elements.push(text[i]);
    }
  }

  return elements;
}

const Hero = ({ lang }: { lang: "en" | "it" | "de" }) => {
  const translatePath = useTranslatedPath(lang);
  const t = useTranslations(lang);
  return (
    <div className="w-full h-[calc(100dvh-0rem)]  overflow-hidden relative flex items-center justify-center">
      {/* Absolute video player */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0">
        <source
          src={"https://www.reggianistd.com" + "/video/home.mp4"}
          type="video/mp4"
        />
      </video>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center bg-black p-8 bg-opacity-50">
        <motion.p className="font-bold text-6xl md:text-6xl text-center font-serif  text-white py-4">
          {wrapCaps(t("hero.title"))}
        </motion.p>

        <motion.p className="text-center text-xl font-normal text-neutral-200">
          {t("hero.subtitle")}
        </motion.p>
        <button
          className="px-4 py-2 backdrop-blur-sm border bg-reggianiRed/10 border-reggianiRed/20 text-white mx-auto text-center  relative mt-8"
          onClick={() => window.open(translatePath("/contact"))}>
          <span>{t("hero.cta")} →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-reggianiRed to-transparent" />
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
