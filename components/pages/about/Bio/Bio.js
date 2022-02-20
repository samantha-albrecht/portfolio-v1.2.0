import MainGrid from '@components/foundation/MainGrid'
import Typography from '@components/foundation/Typography'
import styles from './Bio.module.scss'

function Bio() {
  return (
    <div className={styles.bioWrapper}>
      <MainGrid>
        <div className={styles.innerWrapper}>
          <div className={styles.headingWrapper}>
            <Typography variant="caption">About</Typography>
            <Typography variant="title2xl">Background</Typography>
          </div>
          <div className={styles.bodyWrapper}>
            <Typography variant="byline">
              Strengths: learner, responsibility, input, deliberative,
              individualization
            </Typography>
            <Typography variant="body">
              Everyday I get to use empathy to relate to users and solve
              problems that improve the user experience. I continuously
              challenge myself to make better connections, design better
              solutions, and write better code.
            </Typography>
            <Typography variant="body">
              And I like to have fun along the way! You can count me in to
              participate in all company events, especially if it involves
              dressing&nbsp;up.
            </Typography>
          </div>
          <div className={styles.imageWrapper}></div>
        </div>
      </MainGrid>
    </div>
  )
}

export default Bio
