import Guides from '@components/foundation/Guides'
import MainWrapper from '@components/foundation/MainWrapper'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import cn from 'classnames'

const Overlay = ({ show, click }) =>
  show ? <div className={styles.overlay} onClick={click} /> : null

function Header() {
  const [showHeader, setShowHeader] = useState(false)
  const [headerState, setHeaderState] = useState('initial')
  const [animateSlideIn, setAnimateSlideIn] = useState(false)
  const navToggle = () => {
    setShowHeader((prev) => !prev)
  }

  useEffect(() => {
    let lastScrollPosition = window.scrollY

    const showHideHeader = () => {
      const currentScrollPosition = window.scrollY

      if (currentScrollPosition > 60) {
        setAnimateSlideIn(true)
      } else {
        setAnimateSlideIn(false)
      }

      if (currentScrollPosition < 60) {
        setHeaderState('initial')
      } else if (currentScrollPosition < lastScrollPosition) {
        setHeaderState('show')
      } else {
        setHeaderState('hide')
        setShowHeader(false)
      }

      lastScrollPosition = currentScrollPosition
    }
    document.addEventListener('scroll', showHideHeader)
    return () => document.removeEventListener('scroll', showHideHeader)
  }, [headerState])

  return (
    <>
      <header>
        <MainWrapper>
          <div className={styles.mainGrid}>
            <div className={styles.guideLayout}>
              <Guides />
            </div>
            <div
              className={cn(styles.header, {
                [styles.visible]: headerState === 'show',
                [styles.hide]: headerState === 'hide',
                [styles.animateSlideIn]: animateSlideIn,
              })}
            >
              <div className={styles.innerWrapper}>
                <div className={cn(styles.navItem, styles.siteTitle)}>
                  <Link href="/">
                    <a title="Go to home page">Samantha Albrecht</a>
                  </Link>
                </div>
                <button
                  className={styles.navOpen}
                  onClick={navToggle}
                  title="Open navigation"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1.5rem"
                    width="1.5rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <div
                  className={cn(styles.navWrapper, {
                    [styles.visible]: showHeader,
                  })}
                >
                  <nav>
                    <ul className={styles.navList}>
                      <li className={styles.navItem}>
                        <Link href="/#work">
                          <a title="Go to work section">Work</a>
                        </Link>
                      </li>
                      <li className={styles.navItem}>
                        <Link href="/about">
                          <a title="Go to about page">About</a>
                        </Link>
                      </li>
                      <li className={styles.navItem}>
                        <a
                          href="https://www.linkedin.com/in/samantha-albrecht-%F0%9F%91%A9%E2%80%8D%F0%9F%92%BB-998053156/"
                          title="Contact me on LinkedIn"
                          rel="noopener noreferrer nofollow"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <button
                    className={styles.navClose}
                    onClick={navToggle}
                    title="Close navigation"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="24px"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                  </button>
                </div>
                <Overlay show={showHeader} onClick={navToggle} />
              </div>
            </div>
          </div>
        </MainWrapper>
      </header>
    </>
  )
}

export default Header
