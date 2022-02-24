import Home from '@components/pages/home/Home/Home'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>
          Samantha Albrecht | Designer, developer, creative problem solver
        </title>
        <meta name="description" content="" />
        <meta name="robots" content="noindex" />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.samanthaalbrecht.com"
        />
        <link rel="canonical" href="https://www.samanthaalbrecht.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}
