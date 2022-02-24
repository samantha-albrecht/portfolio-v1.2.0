import MainGrid from '@components/foundation/MainGrid'
import Typography from '@components/foundation/Typography'
import styles from './Process.module.scss'

function Process() {
  return (
    <MainGrid color="ltBackground">
      <div className={styles.innerWrapper}>
        <div className={styles.headingWrapper}>
          <Typography variant="caption">Process</Typography>
          <Typography variant="h2" size="xxl" weight="h-bold">
            End-to-end design
          </Typography>
          <Typography variant="p">
            As a designer I’m involved in all parts of the project lifecycle:
          </Typography>
        </div>
        <div className={styles.processGroup}>
          <svg
            className={styles.processIcon}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="28px"
            width="28px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 7H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z"></path>
          </svg>

          <Typography variant="h3" size="l">
            Observe &amp; Define
          </Typography>
          <div className={styles.processDescription}>
            <Typography variant="p">
              Understanding how customers are using the product. And identifying
              improvement opportunities.
            </Typography>
          </div>
          <Typography variant="h4" size="s" weight="h-bold">
            Documentation tools I've used:
          </Typography>
          <ul className={styles.toolsList}>
            <li className={styles.toolsListItem}>Google Docs</li>
            <li className={styles.toolsListItem}>InVision Freehand</li>
            <li className={styles.toolsListItem}>And more</li>
          </ul>
        </div>
        <div className={styles.processGroup}>
          <svg
            className={styles.processIcon}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="28px"
            width="28px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0112 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 00-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 012.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"></path>
            <circle cx="6.5" cy="11.5" r="1.5"></circle>
            <circle cx="9.5" cy="7.5" r="1.5"></circle>
            <circle cx="14.5" cy="7.5" r="1.5"></circle>
            <circle cx="17.5" cy="11.5" r="1.5"></circle>
          </svg>

          <Typography variant="h3" size="l">
            Ideate &amp; Prototype
          </Typography>
          <div className={styles.processDescription}>
            <Typography variant="p">
              Exploring possible solutions to challenge assumptions with
              wireframes and design&nbsp;mockups.
            </Typography>
          </div>
          <Typography variant="h4" size="s" weight="h-bold">
            Design programs I've used:
          </Typography>
          <ul className={styles.toolsList}>
            <li className={styles.toolsListItem}>Balsamiq</li>
            <li className={styles.toolsListItem}>Sketch</li>
            <li className={styles.toolsListItem}>Adobe Illustrator</li>
            <li className={styles.toolsListItem}>And more</li>
          </ul>
        </div>
        <div className={styles.processGroup}>
          <svg
            className={styles.processIcon}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="28px"
            width="28px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM17.657 12l-3.536 3.536-1.414-1.415L14.828 12l-2.12-2.121 1.413-1.415L17.657 12zM6.343 12L9.88 8.464l1.414 1.415L9.172 12l2.12 2.121-1.413 1.415L6.343 12z"></path>
            </g>
          </svg>

          <Typography variant="h3" size="l">
            Build &amp; Launch
          </Typography>
          <div className={styles.processDescription}>
            <Typography variant="p">
              Developing a minimum viable product to get in the hands of
              prospects, leads, and&nbsp;customers.
            </Typography>
          </div>
          <Typography variant="h4" size="s" weight="h-bold">
            Coding languages I've used:
          </Typography>
          <ul className={styles.toolsList}>
            <li className={styles.toolsListItem}>HTML</li>
            <li className={styles.toolsListItem}>CSS (SASS)</li>
            <li className={styles.toolsListItem}>jQuery</li>
            <li className={styles.toolsListItem}>React (currently learning)</li>
            <li className={styles.toolsListItem}>And more</li>
          </ul>
        </div>
        <div className={styles.processGroup}>
          <svg
            className={styles.processIcon}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="28px"
            width="28px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path>
            <path d="M7 12h2v5H7zM15 7h2v10h-2zM11 14h2v3h-2zM11 10h2v2h-2z"></path>
          </svg>

          <Typography variant="h3" size="l">
            Test &amp; Refine
          </Typography>
          <div className={styles.processDescription}>
            <Typography variant="p">
              Gaining insight and making improvements based on analytics and
              real user&nbsp;interactions.
            </Typography>
          </div>
          <Typography variant="h4" size="s" weight="h-bold">
            Tracking software I've used:
          </Typography>
          <ul className={styles.toolsList}>
            <li className={styles.toolsListItem}>Google Analytics</li>
            <li className={styles.toolsListItem}>Google Search Console</li>
            <li className={styles.toolsListItem}>VWO</li>
            <li className={styles.toolsListItem}>Hotjar</li>
            <li className={styles.toolsListItem}>And more</li>
          </ul>
        </div>
      </div>
    </MainGrid>
  )
}

export default Process
