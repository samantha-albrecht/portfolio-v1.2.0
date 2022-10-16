import PageWrapper from '@components/foundation/PageWrapper'
import MainGrid from '@components/foundation/MainGrid'
import styles from './WorkViews.module.scss'
import cn from 'classnames'
import Typography from '@components/foundation/Typography'
import Aside from '../Aside'
import ProjectDetails from '../ProjectDetails'

function HeadlineStudioView() {
  return (
    <PageWrapper>
      <MainGrid>
        <div className={styles.innerWrapper}>
          <div className={styles.asideWrapper}>
            <Aside />
          </div>
          <div className={styles.headingWrapper}>
            <Typography variant="caption">
              Headline Studio by CoSchedule
            </Typography>
            <Typography variant="h1" size="xxl" weight="h-bold">
              Feature Education & User Adoption
            </Typography>
          </div>
          <div className={styles.bodyWrapper}>
            <img
              className={cn(styles.imageContainer, styles.imageMain)}
              src="/images/work/hs-app/project-screenshots-hs-app-main-view.png"
              alt="Headline Studio by CoSchedule"
              width={810}
              height={455}
            />
            <div id="problem" className={styles.sectionTitle}>
              <Typography variant="h2" size="xl" weight="h-bold">
                Problem
              </Typography>
            </div>
            <p className={styles.projectBodyParagraph}>
            A headline makes a first impression with a reader. A strong headline drives more clicks, while a weak one can send traffic away. It’s important to spend time getting them&nbsp;right.
            </p>
            <p className={styles.projectBodyParagraph}>
            Headline generation is similar to idea generation—you have to burn through the bad ones before you can find what works. Therefore the more versions of a headline you write the better they&nbsp;get.
            </p>
            <p className={styles.projectBodyParagraph}>
            A powerful feature of Headline Studio is headline versions. Versions allow users to modify and reanalyze headlines to weed out the bad ones. However, users are confused about the difference between analyzing and reanalyzing headlines. Users are burning though headlines and not getting the full value of the&nbsp;product.
            </p>
            <p className={styles.projectBodyParagraph}>
            How can we teach users to use&nbsp;versions?
            </p>

            <div id="challenges" className={styles.sectionTitle}>
              <Typography variant="h2" size="xl" weight="h-bold">
                Challenges
              </Typography>
            </div>
            <p className={styles.projectBodyParagraph}>
              There were various content challenges from differentiating
              Headline Studio, the new app, from Headline Analyzer, the old
              webpage, calling out features that had been upgraded and including
              new premium features, and deciding whether of not to
              include&nbsp;pricing.
            </p>
            <p className={styles.projectBodyParagraph}>
              The main challenge, however, was to eliminate all friction that
              prevents visitors from signing up. We want this page to be a
              converting&nbsp;machine!
            </p>

            <div id="process" className={styles.sectionTitle}>
              <Typography variant="h2" size="xl" weight="h-bold">
                Process
              </Typography>
            </div>
            <p className={cn(styles.projectBodyParagraph, styles.italic)}>
            Project is currently in progress. Check back to learn more about the&nbsp;process!
            </p>

            <div id="outcomes" className={styles.sectionTitle}>
              <Typography variant="h2" size="xl" weight="h-bold">
                Outcomes
              </Typography>
            </div>
            <p className={cn(styles.projectBodyParagraph, styles.italic)}>
            Project is currently in progress. Check back to see the&nbsp;outcome!
            </p>

            <div className={styles.detailsWrapper}>
              <ProjectDetails currentPage="hsApp" />
            </div>
          </div>
        </div>
      </MainGrid>
    </PageWrapper>
  )
}

export default HeadlineStudioView
