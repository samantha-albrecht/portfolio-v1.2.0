import MainGrid from '@components/foundation/MainGrid'
import Typography from '@components/foundation/Typography'
import styles from './Quote.module.scss'

function Quote() {
  return (
    <MainGrid>
      <div className={styles.innerWrapper}>
        <div className={styles.quote}>
          <p className={styles.openQuote}>&#8220;</p>
          <Typography variant="h2" size="xxl" weight="h-bold">
            I always look forward to seeing the creative & functional designs Samantha comes up with. She's great at taking in feedback and iterating as&nbsp;needed.
          </Typography>
        </div>
        <div className={styles.byline}>
          <Typography variant="byline">
            Anonymous peer review
          </Typography>
        </div>
      </div>
    </MainGrid>
  )
}

export default Quote
