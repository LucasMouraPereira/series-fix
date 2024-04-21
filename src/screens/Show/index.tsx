"use client";
import { useShowPage } from "src/utils/hooks/useShowPage";
import { ShowContainer } from "./Containers";

type ShowScreenProps = {
  slug: number;
};
export const ShowScreen = ({ slug }: ShowScreenProps) => {
  const { show, loading, error } = useShowPage({ idShow: slug });
  return <ShowContainer show={show} />;
};
