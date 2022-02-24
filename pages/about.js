import AboutView from '@components/pages/about/AboutView/AboutView'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>Samantha Albrecht | About</title>
        <meta name="description" content="" />
        <meta name="robots" content="noindex" />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.samanthaalbrecht.com"
        />
        <link rel="canonical" href="https://www.samanthaalbrecht.com/about" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutView />
    </>
  )
}
