"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "../ui";

type HeaderProps = {
  spokenLanguages: string[];
  selectedLanguages: string[];
};

export const Header = ({ spokenLanguages, selectedLanguages }: HeaderProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleRouteChange = (language: string) => {
    const updatedLanguages = selectedLanguages.includes(language)
      ? selectedLanguages.filter((lang) => lang != language)
      : [...selectedLanguages, language.trim()];

    const params = new URLSearchParams(searchParams);

    if (updatedLanguages.length === 0) {
      params.delete("sLang");
      router.push(`?${params.toString()}`);
      return;
    }
    params.set("sLang", updatedLanguages.join("|"));
    router.push(`?${params.toString()}`);
  };
  return (
    <section className=" pt-4 pb-[21px] shadow-small w-full sticky top-0 z-10 bg-white">
      <nav className="space-y-3 max-w-screen-lg mx-auto">
        <h1 className="text-xl font-semibold">Local guide language</h1>
        <ul className="flex gap-10 items-center flex-wrap">
          {spokenLanguages.map((language) => (
            <li key={language}>
              <Checkbox
                id={language}
                label={language}
                checked={selectedLanguages.includes(language)}
                onChange={() => {
                  handleRouteChange(language);
                }}
              />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
