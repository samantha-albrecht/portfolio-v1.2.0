import MainGrid from '@components/foundation/MainGrid'
import Typography from '@components/foundation/Typography'
import styles from './Cta.module.scss'

function Cta({ currentPage }) {
  const ctaContent = {
    home: {
      text: 'Find out more',
      linkText: 'about me',
      href: '/about',
      title: 'Go to about page',
    },
    about: {
      text: 'Message me with your favorite book or',
      linkText: 'say hello',
      href: 'https://www.linkedin.com/in/samantha-albrecht-%F0%9F%91%A9%E2%80%8D%F0%9F%92%BB-998053156/',
      title: 'Contact me on LinkedIn',
    },
  }

  const getCtaContent = () => {
    if (currentPage === 'about') {
      return ctaContent.about
    }
    return ctaContent.home
  }

  const { text, linkText, href, title } = getCtaContent()

  return (
    <MainGrid color="dkBackground">
      <div className={styles.innerWrapper}>
        <Typography variant="title3xl" color="text3">
          {text}
          <a href={href} title={title} className={styles.link}>
            {linkText}
          </a>
        </Typography>
      </div>
    </MainGrid>
  )
}

export default Cta
