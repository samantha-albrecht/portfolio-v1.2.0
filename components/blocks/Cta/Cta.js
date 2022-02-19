import MainGrid from '@components/foundation/MainGrid'
import Typography from '@components/foundation/Typography'
import Link from 'next/link'
import styles from './Cta.module.scss'

function Cta() {
  return (
    <MainGrid color="dkBackground">
      <div className={styles.innerWrapper}>
        <Typography variant="title3xl" color="text3">
          Find out more
          <Link href="/about">
            <a className={styles.link}>about&nbsp;me</a>
          </Link>
        </Typography>
      </div>
    </MainGrid>
  )
}

export default Cta
