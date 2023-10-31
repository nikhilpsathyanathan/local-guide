import Image from "next/image";

export type GuideType = {
  id: string;
  name: string;
  title: string;
  photo: string;
  spokenLanguages: string[];
};

const GuideItem = ({ id, name, title, photo }: GuideType) => {
  return (
    <figure
      key={id}
      className="w-[400px] h-[300px] rounded-2xl shrink-0 bg-gray relative overflow-clip "
    >
      <Image
        src={photo}
        width={400}
        height={300}
        alt={`${name}-image`}
        className=" object-cover rounded-2xl h-full"
      />
      <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-black/30 h-[97px] font-bold pl-[32px] text-white">
        <div className="text-[32px] leading-normal">{name}</div>
        <div className="text-2xl leading-normal">{title}</div>
      </div>
    </figure>
  );
};

export default GuideItem;
