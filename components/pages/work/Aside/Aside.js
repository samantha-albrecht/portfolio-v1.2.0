import Typography from '@components/foundation/Typography'
import styles from './Aside.module.scss'

function Aside() {
  return (
    <aside>
      <div className={styles.asideTitle}>
        <Typography variant="p" size="s" weight="p-bold">
          Jump to section:
        </Typography>
      </div>
      <ul>
        <li>
          <a href="#problem" className={styles.asideItem}>
            Problem
          </a>
        </li>
        <li>
          <a href="#challenges" className={styles.asideItem}>
            Challenges
          </a>
        </li>
        <li>
          <a href="#process" className={styles.asideItem}>
            Process
          </a>
        </li>
        <li>
          <a href="#outcomes" className={styles.asideItem}>
            Outcomes
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Aside
