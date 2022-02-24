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
            This quote changed the direction of my career. Growing up I thought
            failure was not an options. This quote opened my mind to see that
            failure is an option. It's inevitable. Failure allows us to learn,
            grow, and make better decisions in the future. We must be willing to
            fail again and again in order to&nbsp;succeed.
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
