import { Grid } from "../Grid";
import { BaseCard } from "./BaseCard";
import { CardListItem, CardListProps } from "./types";

export const ListCards = <T extends CardListItem>({
  list,
  children,
  ...cardProps
}: CardListProps<T>) => {
  return (
    <Grid>
      {list?.map((item) => (
        <BaseCard key={item.id} width="100%" {...cardProps}>
          {children(item)}
        </BaseCard>
      ))}
    </Grid>
  );
};
