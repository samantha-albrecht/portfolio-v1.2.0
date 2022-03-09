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
            Growing up I thought failure was not an option. Success to me was
            straight A’s and a 4.0 GPA. This quote opened my mind to see that
            failure is an option, it's inevitable as a creative. Design and
            development require the willingness to try something new knowing it
            could fail in order to learn, grow, and eventually
            find&nbsp;success.
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
