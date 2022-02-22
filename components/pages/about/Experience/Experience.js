import MainGrid from '@components/foundation/MainGrid'
import Typography from '@components/foundation/Typography'
import styles from './Experience.module.scss'

function Experience() {
  return (
    <MainGrid color="ltBackground">
      <div className={styles.innerWrapper}>
        <div className={styles.headingWrapper}>
          <Typography variant="caption">Experience</Typography>
          <Typography variant="title2xl">Where I've worked</Typography>
        </div>
        <div className={styles.bodyWrapper}>
          <div className={styles.companyGroup}>
            <div className={styles.companyInfo}>
              <svg
                className={styles.companyLogo}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
              >
                <path
                  d="M155.6 96.2c-7.2-1.3-14.2 3.5-15.5 10.7-3.6 19.7-20.8 34-40.9 33.9-22.7-.2-41.2-18.8-41.1-41.6.1-22.7 18.7-41.2 41.5-41.1 1.7 0 3.3.1 5 .3 7.2.9 13.9-4.3 14.9-11.6.9-7.3-4.3-13.9-11.6-14.9-2.7-.3-5.5-.5-8.2-.5-37.4-.1-68.1 30.3-68.2 67.8s30.3 68.1 67.8 68.3c33 .1 61.2-23.3 67.2-55.8 1.2-7.3-3.6-14.3-10.9-15.5zm-61.5-13c-5.2-5.2-13.6-5.2-18.8 0-5.2 5.2-5.2 13.6 0 18.8l24.2 24.2L163.8 62c5.2-5.2 5.2-13.6 0-18.8s-13.6-5.2-18.8 0L99.5 88.6l-5.4-5.4z"
                  style={{ fill: '#d4765d' }}
                />
                <path
                  style={{ fill: '#c15c48' }}
                  d="m99.5 88.6 18.8 18.8-12.6-24.9z"
                />
              </svg>
              <div className={styles.companyName}>
                <Typography variant="titleM">CoSchedule</Typography>
                <Typography variant="body" size="small">
                  2 years, 11 months
                </Typography>
              </div>
            </div>
            <div className={styles.roleGroup}>
              <div className={styles.role}>
                <Typography variant="body" size="medium" weight="body-bold">
                  Web designer
                </Typography>
                <Typography variant="body" size="small">
                  April 2021 - Present
                </Typography>
              </div>
              <div className={styles.role}>
                <Typography variant="body" size="medium" weight="body-bold">
                  Junior web designer
                </Typography>
                <Typography variant="body" size="small">
                  April 2020 - April 2021
                </Typography>
              </div>
              <div className={styles.role}>
                <Typography variant="body" size="medium" weight="body-bold">
                  Graphic design intern
                </Typography>
                <Typography variant="body" size="small">
                  March 2019 - April 2020
                </Typography>
              </div>
            </div>
          </div>
          <div className={styles.companyGroup}>
            <div className={styles.companyInfo}>
              <svg
                className={styles.companyLogo}
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                viewBox="0 0 200 200"
              >
                <circle
                  cx="97.7"
                  cy="54.2"
                  r="15.8"
                  style={{ fill: '#53a8dd' }}
                />
                <path
                  d="M148.7 132.3c-20.7 0-38.3-12.5-38.3-27.3s17.5-27.3 38.3-27.3c5.8 0 10.5-4.7 10.5-10.5s-4.7-10.5-10.5-10.5c-20.6 0-38.8 8.6-49.4 21.6 5.8 7.8 9.2 16.9 9.2 26.6 0 9.8-3.4 18.9-9.2 26.6 10.6 13 28.8 21.6 49.4 21.6 5.8 0 10.5-4.7 10.5-10.5s-4.7-10.3-10.5-10.3z"
                  style={{ fill: '#3a6eb5' }}
                />
                <path
                  d="M46.7 153.3c-5.8 0-10.5-4.7-10.5-10.5s4.7-10.5 10.5-10.5c20.7 0 38.3-12.5 38.3-27.3S67.5 77.7 46.7 77.7c-5.8 0-10.5-4.7-10.5-10.5s4.7-10.5 10.5-10.5c32.7 0 59.3 21.7 59.3 48.3 0 26.6-26.6 48.3-59.3 48.3z"
                  style={{ fill: '#53a8dd' }}
                />
              </svg>
              <div className={styles.companyName}>
                <Typography variant="titleM">Dynamic Communities</Typography>
                <Typography variant="body" size="small">
                  1 years, 2 months
                </Typography>
              </div>
            </div>
            <div className={styles.roleGroup}>
              <div className={styles.role}>
                <Typography variant="body" size="medium" weight="body-bold">
                  Marketing intern
                </Typography>
                <Typography variant="body" size="small">
                  January 2018 - March 2019
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainGrid>
  )
}

export default Experience
