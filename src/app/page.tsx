import { API } from "@/api/index.api";
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
  const host = data.results.hits.hits.map((host) => {
    return {
      name: host._source.name,
      photo: host._source.photo,
      spokenLanguages: host._source.spoken_languages,
    };
  });

  //find unique languages from the spokenLanguages array
  const spokenLanguages = host.reduce((acc, host) => {
    host.spokenLanguages.forEach((language) => {
      if (!acc.includes(language)) {
        acc.push(language);
      }
    });
    return acc;
  }, [] as string[]);

  return { host, spokenLanguages };
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { host, spokenLanguages } = await getData(searchParams);

  console.log(host);

  return (
    <main className="flex min-h-screen  flex-col text-primary ">
      <Header spokenLanguages={spokenLanguages} />
    </main>
  );
}
