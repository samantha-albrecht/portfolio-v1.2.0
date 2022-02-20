import Guides from '@components/foundation/Guides'
import MainGrid from '@components/foundation/MainGrid'
import MainWrapper from '@components/foundation/MainWrapper'
import Typography from '@components/foundation/Typography'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <MainWrapper>
        <div className={styles.mainGrid}>
          <div className={styles.guideLayout}>
            <Guides />
          </div>
          <div className={styles.contentLayout}>
            <MainGrid>
              <div className={styles.innerWrapper}>
                <Typography variant="footer">
                  &#169; {new Date().getUTCFullYear()} Designed &amp; built by
                  Samantha&nbsp;Albrecht
                </Typography>
                <div className={styles.socialContainer}>
                  <a
                    href="https://www.linkedin.com/in/samantha-albrecht-%F0%9F%91%A9%E2%80%8D%F0%9F%92%BB-998053156/"
                    title="Go to LinkedIn"
                    className={styles.socialLink}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      version="1.1"
                      viewBox="0 0 16 16"
                      height="24px"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM6 13h-2v-7h2v7zM5 5c-0.553 0-1-0.447-1-1s0.447-1 1-1c0.553 0 1 0.447 1 1s-0.447 1-1 1zM13 13h-2v-4c0-0.553-0.447-1-1-1s-1 0.447-1 1v4h-2v-7h2v1.241c0.412-0.566 1.044-1.241 1.75-1.241 1.244 0 2.25 1.119 2.25 2.5v4.5z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/samantha-albrecht/my-portfolio/tree/master"
                    title="View source on Github"
                    className={styles.socialLink}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="24px"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </MainGrid>
          </div>
        </div>
      </MainWrapper>
    </footer>
  )
}

export default Footer
