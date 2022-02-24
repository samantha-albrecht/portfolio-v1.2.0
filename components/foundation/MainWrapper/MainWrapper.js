import styles from './MainWrapper.module.scss'

function MainWrapper({ children }) {
  return <div className={styles.mainWrapper}>{children}</div>
}

export default MainWrapper
