import styles from "./styles.module.css"

type GridProps = {
  children: React.ReactNode;
};

export const Grid = ({ children }: GridProps) => (
  <div className={styles.containerGrid}>
    {children}
  </div>
);
