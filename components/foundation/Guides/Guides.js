import styles from './Guides.module.scss'

function Guides() {
  return (
    <div className={styles.guidesWrapper}>
      <div className={styles.guidesInner}>
        <div className={styles.guide}></div>
        <div className={styles.guide}></div>
        <div className={styles.guide}></div>
        <div className={styles.guide}></div>
      </div>
    </div>
  )
}

export default Guides
