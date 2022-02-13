import styles from './Footer.module.css'

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with{' '}
        <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} />{' '}
        for you
      </footer>
    </>
  )
}

export default Footer
