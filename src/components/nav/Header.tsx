"use client";
import { useGuideStore } from "@/store/hosts.store";
import { Checkbox } from "../ui";

type HeaderProps = {
  spokenLanguages: string[];
};

export const Header = ({ spokenLanguages }: HeaderProps) => {
  const { selectedLanguages, addLanguages, removeLanguage } = useGuideStore();
  return (
    <section className=" pt-4 pb-[21px] shadow-small ">
      <nav className="space-y-3 max-w-screen-lg mx-auto">
        <h1 className="text-xl font-semibold">Local guide language</h1>
        <ul className="flex gap-10 items-center flex-wrap">
          {spokenLanguages.map((language) => (
            <li key={language}>
              <Checkbox
                id={language}
                label={language}
                checked={selectedLanguages.includes(language)}
                onChange={(event) => {
                  event.target.checked
                    ? addLanguages(language)
                    : removeLanguage(language);
                }}
              />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
