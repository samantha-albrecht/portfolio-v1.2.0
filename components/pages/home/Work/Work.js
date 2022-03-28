import MainGrid from '@components/foundation/MainGrid'
import Typography from '@components/foundation/Typography'
import Link from 'next/link'
import styles from './Work.module.scss'

function Project() {
  const projects = [
    {
      imageSrc: '/images/work/ami.png',
      imageAlt: 'Actionable Marketing Institute by CoSchedule',
      descriptionCaption:
        'Actionable Marketing Institute powered by CoSchedule',
      descriptionTitle: 'Online Marketing Course Pages',
      descriptionBody:
        'The challenge: create engaging, user friendly, customizable web pages to elevate the Actionable Marketing Institute.',
      projectUrl: '/work/actionable-marketing-institute',
      url: 'https://coschedule.com/actionable-marketing-institute/ami-pro',
      urlTitle: 'Go to the Actionable Marketing Institute',
    },
    {
      imageSrc: '/images/work/hs.png',
      imageAlt: 'Headline Studio by CoSchedule',
      descriptionCaption: 'Headline Studio by CoSchedule',
      descriptionTitle: 'New Product Sign Up Page',
      descriptionBody:
        'The challenge: design & build a high converting product page with sign up for the new Headline Studio app.',
      projectUrl: '/work/headline-studio',
      url: 'https://coschedule.com/headline-studio',
      urlTitle: 'Go to Headline Studio',
    },
  ]

  return (
    <>
      {projects.map((project, index) => (
        <div className={styles.projectWrapper}>
          <MainGrid>
            <div className={styles.innerWrapper}>
              <div className={styles.imageWrapper}>
                <img
                  className={styles.image}
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  width={750}
                  height={468}
                  loading="lazy"
                />
              </div>
            </div>
          </MainGrid>
          <MainGrid>
            <div className={styles.innerWrapper}>
              <div className={styles.descriptionWrapper}>
                <div className={styles.descriptionCaption}>
                  <Typography variant="captionSmall">
                    {project.descriptionCaption}
                  </Typography>
                  <a
                    href={project.url}
                    title={project.urlTitle}
                    rel="noreferer"
                    className={styles.viewPageLink}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="16px"
                      width="16px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                      ></path>
                    </svg>
                  </a>
                </div>
                <Typography variant="h3" size="xl">
                  {project.descriptionTitle}
                </Typography>
                <Typography variant="p">{project.descriptionBody}</Typography>
                <Link href={project.projectUrl}>
                  <a className={styles.descriptionLink}>Learn more</a>
                </Link>
              </div>
            </div>
          </MainGrid>
        </div>
      ))}
    </>
  )
}

function Work() {
  return (
    <div className={styles.workWrapper} id="work">
      <MainGrid>
        <div className={styles.innerWrapper}>
          <div className={styles.headingWrapper}>
            <Typography variant="caption">Work</Typography>
            <Typography variant="h2" size="xxl" weight="h-bold">
              Recent Projects
            </Typography>
          </div>
        </div>
      </MainGrid>
      <Project />
    </div>
  )
}

export default Work
