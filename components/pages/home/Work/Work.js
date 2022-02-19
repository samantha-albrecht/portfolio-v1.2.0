import MainGrid from '@components/foundation/MainGrid'
import Typography from '@components/foundation/Typography'
import styles from './Work.module.scss'

function Work() {
  return (
    <div className={styles.workWrapper}>
      <MainGrid>
        <div className={styles.innerWrapper}>
          <div className={styles.headingWrapper}>
            <Typography variant="caption">Work</Typography>
            <Typography variant="title2xl">Recent Projects</Typography>
          </div>
        </div>
      </MainGrid>

      <div className={styles.projectWrapper}></div>
      <MainGrid color="whiteBackground">
        <div className={styles.innerWrapper}>
          <div className={styles.imagePlaceholder}></div>
        </div>
      </MainGrid>
      <MainGrid>
        <div className={styles.innerWrapper}>
          <div className={styles.descriptionWrapper}>
            <div className={styles.descriptionCaption}>
              <Typography variant="captionSmall">
                Headline Studio by CoSchedule
              </Typography>
            </div>
            <Typography variant="titleXl">Product Landing Page</Typography>
            <Typography variant="body">
              {' '}
              Loremipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </Typography>
          </div>
        </div>
      </MainGrid>
    </div>
  )
}

export default Work
