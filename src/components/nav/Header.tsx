type HeaderProps = {
  spokenLanguages: string[];
};

export const Header = ({ spokenLanguages }: HeaderProps) => {
  return (
    <section className=" pt-4 pb-[21px] shadow-small ">
      <nav className="space-y-3 max-w-screen-lg mx-auto">
        <h1 className="text-xl font-semibold">Local guide language</h1>
        <ul className="flex gap-10 items-center flex-wrap">
          {spokenLanguages.map((language) => (
            <li key={language}>
              <div className="w-fit shrink-0 flex gap-4 relative items-center">
                <input
                  id={language}
                  className="peer shrink-0 appearance-none w-6 h-6 border border-1  border-gray bg-white focus:outline-none checked:border-pink rounded"
                  type="checkbox"
                />
                <div className="absolute inset-y-[5px] left-[5px] w-[14px] h-[14px] rounded peer-checked:bg-pink  pointer-events-none"></div>
                <label htmlFor={language} className="font-semibold text-[14px]">
                  {language}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
