import { ImagesSlider } from "./ui/image-slider";
import { motion } from "framer-motion";
import hero1 from "@assets/reggiani/Hero1.jpg";
import hero2 from "@assets/reggiani/Hero2.jpg";
import hero3 from "@assets/reggiani/Hero3.jpg";
import hero4 from "@assets/reggiani/Hero4.jpg";
import { useTranslations } from "@i18n/utils";

const images = [hero1.src, hero2.src, hero3.src, hero4.src];
const Hero = ({ lang }: { lang: "en" | "it" | "de" | "fr" }) => {
  const t = useTranslations(lang);
  return (
    <ImagesSlider images={images} className="w-full h-[calc(100dvh-0rem)]">
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
        className="z-50 flex flex-col justify-center items-center">
        <motion.p className="font-bold text-6xl md:text-6xl text-center font-serif bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          {t("hero.title")}
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-reggianiRed/10 border-reggianiRed/20 text-white mx-auto text-center  relative mt-4">
          <span>{t("hero.cta")} →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-reggianiRed to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
};

export default Hero;
