import heroImage from "assets/hero.png";

import feature_1 from "assets/reggiani/Feature_1.jpg";
import feature_2 from "assets/reggiani/Feature_2.jpg";
import feature_3 from "assets/reggiani/Feature_3.jpg";
import feature_4 from "assets/reggiani/Feature_4.jpg";
import feature_5 from "assets/reggiani/Feature_5.jpg";
import research_1 from "assets/reggiani/Research_1.jpg";

import { useTranslations } from "@i18n/utils";
import { LayoutGrid, type Card } from "./ui/layout-grid";

const Research = ({ lang }: { lang: "en" | "it" | "de" | "fr" }) => {
  const t = useTranslations(lang);
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
      <LayoutGrid cards={cards} lang={lang} />
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

const cards = [
  {
    id: 1,
    content: SkeletonOne,
    title: "research.one.title",

    className: "md:col-span-2 min-h-32 sm:min-h-64",
    thumbnail: feature_2.src,
  },
  {
    id: 2,
    content: SkeletonTwo,
    title: "research.two.title",

    className: "col-span-1 row-span-2 md:row-span-1",
    thumbnail: feature_1.src,
  },
  {
    id: 3,
    content: SkeletonThree,
    title: "research.three.title",

    className: "col-span-1 row-span-2 md:row-span-1",
    thumbnail: research_1.src,
  },
  {
    id: 4,
    content: SkeletonFour,
    title: "research.four.title",

    className: "md:col-span-2 min-h-32",
    thumbnail: feature_4.src,
  },
] as Card[];