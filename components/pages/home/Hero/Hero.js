import Typography from '@components/foundation/Typography'
import styles from './Hero.module.scss'

function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.caption}>
          <Typography variant="caption">Hi, I'm Samantha &mdash;</Typography>
        </div>
        <div className={styles.title}>
          <Typography variant="title3xl">
            Designer, developer & creative problem solver
          </Typography>
        </div>
        <div className={styles.byline}>
          <Typography variant="byline">
            I work in the space between design and front-end development. I love
            playing with the latest CSS, HTML, and Javascript, but also have an
            eye for layout and design.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Hero
