"use client";
import { useGuideStore } from "@/store/hosts.store";
import GuideItem, { GuideType } from "./GuideItem";

type GuidesProps = {
  city: string;
  guides: GuideType[];
};

const getFilteredGuides = (
  guides: GuideType[],
  selectedLanguages: string[]
) => {
  return selectedLanguages.length == 0
    ? guides
    : guides.filter((guide) => {
        return guide.spokenLanguages.some((language) =>
          selectedLanguages.includes(language)
        );
      });
};

const Guide = ({ guides, city }: GuidesProps) => {
  const { selectedLanguages } = useGuideStore();

  const filteredGuides = getFilteredGuides(guides, selectedLanguages);

  return (
    <section className="max-w-screen-lg mx-auto w-full py-9 flex-1">
      <h1 className="text-[32px] font-bold text-primary mb-[33px]">
        {`${filteredGuides.length} locals found in `}{" "}
        <span className="capitalize">{city}</span>
      </h1>

      <div className="grid grid-cols-2 gap-8 w-fit">
        {filteredGuides.map((guide) => (
          <GuideItem key={guide.id} {...guide} />
        ))}
      </div>
    </section>
  );
};

export default Guide;
