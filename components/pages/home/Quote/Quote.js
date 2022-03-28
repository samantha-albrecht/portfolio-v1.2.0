import MainGrid from '@components/foundation/MainGrid'
import Typography from '@components/foundation/Typography'
import styles from './Quote.module.scss'

function Quote() {
  return (
    <MainGrid>
      <div className={styles.innerWrapper}>
        <div className={styles.quote}>
          <p className={styles.openQuote}>&#8220;</p>
          <Typography variant="h2" size="xxxl" weight="h-bold">
            All Creativity requires the willingness to fail.
          </Typography>
        </div>
        <div className={styles.byline}>
          <Typography variant="byline">
            Growing up I thought failure was not an option. This quote made me
            realize that failure is an option. Moreover, it's inevitable.
            Failure allows us to learn, grow, and make better decisions in the
            future. We must be willing to fail in order to&nbsp;succeed.
            <br></br>
            <span className={styles.marginTop}>
              My portfolio highlights the successes that wouldn't have come
              without&nbsp;failure.
            </span>
          </Typography>
        </div>
      </div>
    </MainGrid>
  )
}

export default Quote
