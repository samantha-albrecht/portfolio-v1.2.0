import Typography from '@components/foundation/Typography'
import styles from './ProjectDetails.module.scss'
import cn from 'classnames'

function ProjectDetails({ currentPage }) {
  const projectDetailsContent = {
    ami: {
      organization: 'CoSchedule',
      work: ['Design', 'Font-end development'],
      languages: ['WordPress', 'PHP', 'HTML', 'SCSS', 'jQuery'],
    },
    hs: {
      organization: 'CoSchedule',
      work: ['Design', 'Font-end development'],
      languages: ['WordPress', 'PHP', 'HTML', 'SCSS', 'jQuery'],
    },
  }

  const getProjectDetailsContent = () => {
    if (currentPage === 'ami') {
      return projectDetailsContent.ami
    }
    return projectDetailsContent.home
  }

  const { organization, work, languages } = getProjectDetailsContent()

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
          <li className={styles.descriptionListItem}>{organization}</li>
        </ul>
      </div>
      <div className={cn(styles.projectDetailsGroup, styles.descriptionWork)}>
        <div className={styles.projectDetailsTitle}>
          <Typography variant="captionSmall">Work</Typography>
        </div>
        <ul className={styles.projectDetailsList}>
          {/* {projectDetailsContent.work.map((work) => (
            <li className={styles.descriptionListItem}>{work}</li>
          ))} */}
          <li className={styles.descriptionListItem}>Design</li>
          <li className={styles.descriptionListItem}>Front-end development</li>
        </ul>
      </div>
      <div
        className={cn(styles.projectDetailsGroup, styles.descriptionLanguages)}
      >
        <div className={styles.projectDetailsTitle}>
          <Typography variant="captionSmall">Languages</Typography>
        </div>
        <ul className={styles.projectDetailsList}>
          {/* {projectDetailsContent.languages.map((languages) => (
            <li className={styles.descriptionListItem}>{languages}</li>
          ))} */}
          <li className={styles.descriptionListItem}>HTML</li>
          <li className={styles.descriptionListItem}>PHP</li>
          <li className={styles.descriptionListItem}>CSS (LESS)</li>
          <li className={styles.descriptionListItem}>jQuery</li>
        </ul>
      </div>
    </section>
  )
}

export default ProjectDetails
