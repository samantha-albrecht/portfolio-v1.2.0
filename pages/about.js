import AboutView from '@components/pages/about/AboutView/AboutView'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>
          About Samantha Albrecht | Designer, developer, creative problem solver
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutView />
    </>
  )
}
