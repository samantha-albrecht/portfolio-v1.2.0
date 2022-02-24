import Typography from '@components/foundation/Typography'
import styles from './ProjectDetails.module.scss'
import cn from 'classnames'

function ProjectDetails({ currentPage }) {
  const projectDetailsContent = {
    ami: {
      organization: 'CoSchedule',
      work: ['Design', 'Font-end development'],
      languages: ['WordPress', 'PHP', 'HTML', 'CSS (SCSS)', 'jQuery'],
    },
    hs: {
      organization: 'CoSchedule',
      work: ['Design', 'Font-end development'],
      languages: ['HTML', 'CSS (LESS)', 'jQuery'],
    },
  }

  const org = projectDetailsContent[currentPage].organization
  const workArray = projectDetailsContent[currentPage].work
  const languagesArray = projectDetailsContent[currentPage].languages

  return (
    <section className={styles.projectDetailsWrapper}>
      <div
        className={cn(
          styles.projectDetailsGroup,
          styles.descriptionOrganization
        )}
      >
        <div className={styles.projectDetailsTitle}>
          <Typography variant="captionSmall">Organization</Typography>
        </div>
        <ul className={styles.projectDetailsList}>
          <li className={styles.descriptionListItem}>{org}</li>
        </ul>
      </div>
      <div className={cn(styles.projectDetailsGroup, styles.descriptionWork)}>
        <div className={styles.projectDetailsTitle}>
          <Typography variant="captionSmall">Work</Typography>
        </div>
        <ul className={styles.projectDetailsList}>
          {workArray.map((work, index) => (
            <li key={index} className={styles.descriptionListItem}>
              {work}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={cn(styles.projectDetailsGroup, styles.descriptionLanguages)}
      >
        <div className={styles.projectDetailsTitle}>
          <Typography variant="captionSmall">Languages</Typography>
        </div>
        <ul className={styles.projectDetailsList}>
          {languagesArray.map((languages, index) => (
            <li key={index} className={styles.descriptionListItem}>
              {languages}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProjectDetails
