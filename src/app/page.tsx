import { API } from "@/api/index.api";
import { Guides } from "@/components/guide";
import { Header } from "@/components/nav/Header";
import { HostsAPIResponse } from "@/models/api.model";

export const revalidate = 3600;

type SearchParams = {
  country?: string;
  city?: string;
  lang?: string;
};

async function getData(searchParams: SearchParams) {
  searchParams.country = searchParams?.country ?? "italy";
  searchParams.city = searchParams?.city ?? "rome";
  searchParams.lang = searchParams?.lang ?? "en";

  const res = await fetch(
    API.getHosts(searchParams.country, searchParams.city, searchParams.lang)
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = (await res.json()) as HostsAPIResponse;

  // filter the required data from the response
  const guides = data.results.hits.hits.map((host) => {
    return {
      id: host._id,
      name: host._source.name,
      title: host._source.personal_title,
      photo: host._source.photo,
      spokenLanguages: host._source.spoken_languages,
    };
  });

  //find unique languages from the spokenLanguages array
  const spokenLanguages = guides.reduce((acc, host) => {
    host.spokenLanguages.forEach((language) => {
      if (!acc.includes(language)) {
        acc.push(language);
      }
    });
    return acc;
  }, [] as string[]);

  return { guides, spokenLanguages };
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { guides, spokenLanguages } = await getData(searchParams);

  return (
    <main className="flex min-h-screen  flex-col text-primary ">
      <Header spokenLanguages={spokenLanguages} />
      <Guides guides={guides} />
    </main>
  );
}
