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
              I'm a designer-who-knows-how-to-code
            </Typography>
          </div>
          <div className={styles.bodyWrapper}>
            <Typography variant="p">
              In 2016 I graduated from North Dakota State University with a
              degree in Microbiology. After many rough interviews it was clear I
              was in the wrong field. In order to make a career shift I went
              back to school at Minnesota State University Moorhead. Going back
              to school felt like a second chance—a chance to change the
              direction of my life, to get involved, meet people in the
              industry, and do something I actually loved,&nbsp;design.
            </Typography>
            <Typography variant="p">
              I stumbled into web development when a web design & development
              role opened up at CoSchedule where I was interning as a graphic
              designer. I dove in head first and development, and haven’t looked
              back&nbsp;since.
            </Typography>
            <Typography variant="p">
              Working in the space between design and front-end development I
              get to use my eye for layout and design, and solve technical
              challenges that come with writing HTML, CSS, and occasionally
              Javascript. There’s nothing more satisfying than finding the right
              design solution or getting the code to work just when you’re ready
              to give&nbsp;up.
            </Typography>
            <Typography variant="p">
              When I’m away from the computer you’ll find me training at the
              gym; reading something related to psychology, theology, or
              leadership; catching up on a never ending stream of podcasts;
              scrambling to make par on the golf course; wondering why I live in
              the frozen tundra while cross country skiing; or enjoying time
              with family and&nbsp;friends.
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
