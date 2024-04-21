import { CSSProperties, ReactElement } from "react";

export interface CardListItem {
    id: number
}

export interface CardListProps<T> extends CSSProperties {
    list?: Array<T> | null | undefined;
    children: (item: T) => ReactElement
}