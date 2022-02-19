import Cta from '@components/blocks/Cta'
import Guides from '@components/foundation/Guides'
import MainWrapper from '@components/foundation/MainWrapper'
import Hero from '../Hero'
import Process from '../Process'
import Quote from '../Quote'
import Work from '../Work'
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
          <Quote />
          <Work />
          <Process />
          <Cta />
        </div>
      </div>
    </MainWrapper>
  )
}

export default Home
