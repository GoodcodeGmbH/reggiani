import campionario from "@assets/reggiani/home/Campionario.jpg";
import modellistica from "@assets/reggiani/home/Modellistica.jpg";
import prototipia from "@assets/reggiani/home/Prototipia.jpg";
import ricerca from "@assets/reggiani/home/Ricerca.jpg";

import { useTranslations } from "@i18n/utils";
import { LayoutGrid, type Card } from "./ui/layout-grid";
import { cn } from "@utils/cn";

const Research = (props: {
  lang: "en" | "it" | "de" | "fr";
  [key: string]: any;
}) => {
  const cards = [
    {
      id: 1,
      content: SkeletonOne,
      title: "research.one.title",

      className: "md:col-span-2 min-h-32 sm:min-h-64",
      thumbnail: props.campionario,
    },
    {
      id: 2,
      content: SkeletonTwo,
      title: "research.two.title",

      className: "col-span-1 row-span-2 md:row-span-1",
      thumbnail: props.prototipia,
    },
    {
      id: 3,
      content: SkeletonThree,
      title: "research.three.title",

      className: "col-span-1 row-span-2 md:row-span-1",
      thumbnail: props.modellistica,
    },
    {
      id: 4,
      content: SkeletonFour,
      title: "research.four.title",

      className: "md:col-span-2 min-h-32",
      thumbnail: props.ricerca,
    },
  ] as Card[];
  const t = useTranslations(props.lang);
  return (
    <div className="pt-20 w-full">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-reggianiRed">
          {t("research.subtitle")}
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-serif">
          {t("research.title")}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {t("research.description")}
        </p>
      </div>
      <LayoutGrid cards={cards} lang={props.lang} />
    </div>
  );
};

export default Research;

const SkeletonOne = ({ lang }: { lang: "en" | "it" | "de" | "fr" }) => {
  const t = useTranslations(lang);
  console.log(t("research.one.title"));
  return (
    <div>
      <p className="font-bold text-4xl text-white">{t("research.one.title")}</p>

      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {t("research.one.content")}
      </p>
    </div>
  );
};

const SkeletonTwo = ({ lang }: { lang: "en" | "it" | "de" | "fr" }) => {
  const t = useTranslations(lang);
  return (
    <div>
      <p className="font-bold text-4xl text-white">{t("research.two.title")}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {t("research.two.content")}
      </p>
    </div>
  );
};
const SkeletonThree = ({ lang }: { lang: "en" | "it" | "de" | "fr" }) => {
  const t = useTranslations(lang);
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        {t("research.three.title")}
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {t("research.three.content")}
      </p>
    </div>
  );
};
const SkeletonFour = ({ lang }: { lang: "en" | "it" | "de" | "fr" }) => {
  const t = useTranslations(lang);
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        {t("research.four.title")}
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {t("research.four.content")}
      </p>
    </div>
  );
};
