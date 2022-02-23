import Guides from '@components/foundation/Guides'
import MainWrapper from '@components/foundation/MainWrapper'
import styles from './PageWrapper.module.scss'

function PageWrapper({ children }) {
  return (
    <MainWrapper>
      <div className={styles.mainGrid}>
        <div className={styles.guideLayout}>
          <Guides />
        </div>
        <div className={styles.contentLayout}>{children}</div>
      </div>
    </MainWrapper>
  )
}

export default PageWrapper
