import styles from './styles.module.css'

type GridProps = {
  children: React.ReactNode
}

const Grid = ({ children }: GridProps) => (
  <div className={styles.containerGrid}>{children}</div>
)

export default Grid
