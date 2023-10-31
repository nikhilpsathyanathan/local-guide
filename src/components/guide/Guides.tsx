import GuideItem, { GuideType } from "./GuideItem";

type GuidesProps = {
  city: string;
  guides: GuideType[];
};

const Guide = ({ guides, city }: GuidesProps) => {
  return (
    <section className="max-w-screen-lg mx-auto w-full py-9 flex-1">
      <h1 className="text-[32px] font-bold text-primary mb-[33px]">
        {`${guides.length} locals found in `}{" "}
        <span className="capitalize">{city}</span>
      </h1>

      <div className="grid grid-cols-2 gap-8 w-fit">
        {guides.map((guide) => (
          <GuideItem key={guide.id} {...guide} />
        ))}
      </div>
    </section>
  );
};

export default Guide;
