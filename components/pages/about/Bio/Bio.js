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
            <Typography variant="h2" size="xxl" weight="h-bold">
              Why design & development
            </Typography>
          </div>
          <div className={styles.bodyWrapper}>
            <Typography variant="p">
              In 2016 I needed an easy class to fill my final semester at NDSU,
              so I enrolled in Intro to Web Design. Mind blown! I couldn’t
              believe I could turn code into a (terribly designed) website. But,
              I had my sights set on a different career path
              after&nbsp;graduation.
            </Typography>
            <Typography variant="p">
              Two years later, at MSUM I was required to take three design &
              development related classes. I still had no interest in pursuing
              it as a career. However, as I was completing my degree, a web
              design & development position opened up at CoSchedule where I was
              interning. I didn't feel qualified for the position, but the team
              at CoSchedule believed in me. I got the job and haven’t
              looked&nbsp;back!
            </Typography>
            <Typography variant="p">
              Everyday I get to use empathy to relate to users and solve
              problems that improve the user experience. I continuously
              challenge myself to make better connections, design better
              solutions, and write better&nbsp;code.
            </Typography>
            <Typography variant="p">
              And I like to have fun along the way! Count me in to all company
              events, especially if it involves friendly&nbsp;competition.
            </Typography>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/images/about/headshot.png"
              alt="Image of Samantha"
              className={styles.image}
            />
            <Typography variant="byline">
              Strengths: learner, responsibility, input, deliberative,
              individualization
            </Typography>
          </div>
        </div>
      </MainGrid>
    </div>
  )
}

export default Bio
