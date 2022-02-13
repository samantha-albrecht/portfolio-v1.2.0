import SectionContainer from '@components/blocks/SectionContainer'
import Typography from '@components/foundation/Typography'
import styles from './Hero.module.scss'

function Hero() {
  return (
    <SectionContainer className="gray">
      <div className={styles.position}>
        <div className={styles.content}>
          <Typography variant="caption" color="purple">
            Hi I'm Samantha &mdash;
          </Typography>
          <Typography variant="title3xl">
            Designer, developer & creative problem solver
          </Typography>
          <Typography variant="byline" color="orange">
            I work in the space between design and front-end development. I love
            playing with the latest CSS, HTML, and Javascript, but also have an
            eye for layout and design.
          </Typography>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Hero
