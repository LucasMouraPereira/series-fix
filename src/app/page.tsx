import { HomeScreens } from "src/screens/Home";
import { homeData } from "./data";
import type { TVShowsList } from "src/utils/types/tvShows";

async function getInfos() {
  const info = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/infos`);
  const newInfo = await info.json();
  return newInfo;
}

async function getShows() {
  const { date } = await getInfos();
  const res = await fetch(
    `https://api.tvmaze.com/schedule?country=US&date=${date}`
  );
  const data = await res.json();
  return data;
}

const Home = async () => {
  const res: TVShowsList = await getShows();
  const { title, description, link } = homeData;
  const pageData = {
    title,
    description,
    link,
    cards: res.map((ep) => ({
      showId: ep.show.id,
      id: ep.id,
      airdate: ep.airdate,
      airtime: ep.airtime,
      showName: ep.show.name,
      language: !ep.show.language ? "N/A" : ep.show.language,
      network: !ep.show.network?.name ? "N/A" : ep.show.network.name,
      image: ep.show.image,
      apiUrl: ep["_links"],
    })),
  };
  return <HomeScreens pageData={pageData} />;
};

export default Home;
