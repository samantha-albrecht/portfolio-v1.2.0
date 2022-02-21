import Cta from '@components/blocks/Cta'
import Guides from '@components/foundation/Guides'
import MainWrapper from '@components/foundation/MainWrapper'
import Bio from '../Bio'
import Books from '../Books'
import Experience from '../Experience'
import styles from './AboutView.module.scss'

function AboutView() {
  return (
    <MainWrapper>
      <div className={styles.mainGrid}>
        <div className={styles.guideLayout}>
          <Guides />
        </div>
        <div className={styles.contentLayout}>
          <Bio />
          <Experience />
          <Books />
          <Cta currentPage="about" />
        </div>
      </div>
    </MainWrapper>
  )
}

export default AboutView
