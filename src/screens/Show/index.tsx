"use client";
import { useShowPage } from "src/utils/hooks/useShowPage";
import { ShowContainer } from "./Containers";

type ShowScreenProps = {
  slug: number;
};
export const ShowScreen = ({ slug }: ShowScreenProps) => {
  const { show } = useShowPage({ idShow: slug });
  return <ShowContainer show={show} />;
};
