import type { ResponsiveBoxProps } from "./types";
import styles from "./styles.module.css";

export const ResponsiveBox = ({ children }: ResponsiveBoxProps) => (
  <div className={styles.container}>{children}</div>
);
