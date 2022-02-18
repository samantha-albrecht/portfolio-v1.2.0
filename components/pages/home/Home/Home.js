import Guides from '@components/foundation/Guides'
import MainWrapper from '@components/foundation/MainWrapper'
import Hero from '../Hero'
import styles from './Home.module.scss'

function Home() {
  return (
    <MainWrapper>
      <div className={styles.mainGrid}>
        <div className={styles.guideLayout}>
          <Guides />
        </div>
        <div className={styles.contentLayout}>
          <Hero />
        </div>
      </div>
    </MainWrapper>
  )
}

export default Home
