import { useEffect, useState } from "react";
import { Show, TVShowCard } from "../types/tvShows";
import { buildUrl } from "src/utils/functions/url"
import type { useShowPageProps } from "src/utils/functions/url"

type UseShowPageResult = {
  shows: TVShowCard[] | null;
  loading: boolean;
  error: string | null;
  show: Show | null;
};

export const useShowPage = ({
  search,
  idShow,
  pagination,
}: useShowPageProps): UseShowPageResult => {
  const [shows, setShows] = useState<TVShowCard[] | null>(null);
  const [show, setShow] = useState<Show | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchShow = async () => {
    try {
      setLoading(true);
      const url = buildUrl({ idShow, search, pagination });
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch show");
      }
      const data = await response.json();

      if (idShow) {
        setShow(data);
        const episodesResponse = await fetch(`${url}/episodes`);
        if (!episodesResponse.ok) {
          throw new Error("Failed to fetch episodes");
        }
        const episodesData = await episodesResponse.json();

        setShow(
          (prevShow) =>
            ({
              ...prevShow,
              episodes: episodesData,
            } as Show)
        );
      } else {
        setShows(
          data.map((page: Show) => ({
            id: page?.id,
            airdate: page?.ended,
            airtime: page?.schedule.time,
            showName: page?.name,
            language: page?.language,
            network: page?.network?.name,
            image: page?.image,
            apiUrl: {
              self: page["_links"]?.self,
              show: {
                href: page["_links"]?.self.href,
                name: page.name,
              },
            },
          }))
        );
      }
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShow();
  }, [search, idShow, pagination]);

  return { show, shows, loading, error };
};
