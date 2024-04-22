import type { ResponsiveBoxProps } from './types'
import styles from './styles.module.css'

const ResponsiveBox = ({ children }: ResponsiveBoxProps) => (
  <div className={styles.container}>{children}</div>
)

export default ResponsiveBox
