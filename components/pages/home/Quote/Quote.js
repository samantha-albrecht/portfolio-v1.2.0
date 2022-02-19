import MainGrid from '@components/foundation/MainGrid'
import Typography from '@components/foundation/Typography'
import styles from './Quote.module.scss'

function Quote() {
  return (
    <MainGrid>
      {/* <div className={styles.quoteWrapper}> */}
      <div className={styles.innerWrapper}>
        <div className={styles.quote}>
          <p className={styles.openQuote}>&#8220;</p>
          <Typography variant="title3xl">
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
          </Typography>
        </div>
      </div>
      {/* </div> */}
    </MainGrid>
  )
}

export default Quote
