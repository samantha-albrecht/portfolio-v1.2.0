import styles from './MainGrid.module.scss'

function MainGrid({ children }) {
  return <div className={styles.mainGrid}>{children}</div>
}

export default MainGrid
