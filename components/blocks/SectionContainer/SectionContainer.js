import styles from './SectionContainer.module.scss'
import Guides from '@components/foundation/Guides'
import MainWrapper from '@components/foundation/MainWrapper'
import MainGrid from '@components/foundation/MainGrid'
import cn from 'classnames'

function SectionContainer({ children, className }) {
  return (
    <MainWrapper>
      <MainGrid>
        <div className={cn(styles.background, styles[`${className}`])}></div>
        <div className={styles.guides}>
          <Guides />
        </div>
        <div className={styles.children}>{children}</div>
      </MainGrid>
    </MainWrapper>
  )
}

export default SectionContainer
