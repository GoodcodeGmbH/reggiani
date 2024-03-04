import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@utils/cn";
import { useTranslations } from "@i18n/utils";
import { ui, defaultLang } from "@i18n/ui";

export type Card = {
  id: number;
  content: React.FC<{ lang: "en" | "it" | "de" | "fr" }>;
  title: keyof (typeof ui)[typeof defaultLang];
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({
  cards,
  lang,
}: {
  cards: Card[];
  lang: "en" | "it" | "de" | "fr";
}) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);
  const t = useTranslations(lang);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full md:h-screen p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative grid-rows-6 md:grid-rows-none ">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden cursor-pointer ",
              selected?.id === card.id
                ? " absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                  ? "z-40 bg-white  h-full w-full"
                  : "bg-white  h-full w-full",
            )}
            layout>
            {selected?.id === card.id && (
              <SelectedCard selected={selected} lang={lang} />
            )}

            {selected?.id !== card.id && (
              <div className="h-full w-full flex justify-center items-center relative z-20 font-serif  font-bold text-4xl ">
                <h5 className="text-white bg-black p-1">{t(card.title)}</h5>
              </div>
            )}

            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10 ",
          selected?.id ? "pointer-events-auto" : "pointer-events-none",
        )}
        // animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  //   const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={card.thumbnail}
      height="500"
      width="500"
      //   onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover absolute inset-0 h-full w-full transition duration-200",
        // loaded ? "blur-none" : "blur-md",
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({
  selected,
  lang,
}: {
  selected: Card | null;
  lang: "en" | "it" | "de" | "fr";
}) => {
  const t = useTranslations(lang);
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end  shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]">
        {selected && <selected.content lang={lang} />}
      </motion.div>
    </div>
  );
};
