"use client";
import { PropsWithChildren } from "react";
import styles from "./styles.module.css";
import { BaseCardProps } from "./types";

export const BaseCard = ({
  children,
  bgColor = "#c2a2ff",
  width,
  ...rest
}: PropsWithChildren<BaseCardProps>) => {
  return (
    <div
      className={styles.wrapperCard}
      style={{ backgroundColor: bgColor, width: width, ...rest }}
    >
      {children}
    </div>
  );
};
const Header = ({ children, ...rest }: PropsWithChildren) => {
  return (
    <div className={styles.headerComponent} style={{ ...rest }}>
      {children}
    </div>
  );
};
const Body = ({ children, ...rest }: PropsWithChildren) => {
  return (
    <div className={styles.bodyComponent} style={{ ...rest }}>
      {children}
    </div>
  );
};

BaseCard.Header = Header;
BaseCard.Body = Body;
