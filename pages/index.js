import Home from '@components/pages/home/Home/Home'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Samantha Albrecht | Designer & Developer</title>
        <meta
          name="description"
          content="I'm a web designer who solves complex problems with intuitive design solutions to deliver user-friendly web experiences that produce business results."
        />
        <meta
          property="og:description"
          content="I'm a web designer who solves complex problems with intuitive design solutions to deliver user-friendly web experiences that produce business results."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.samanthaalbrecht.com"
        />
        <link rel="canonical" href="https://www.samanthaalbrecht.com" />
        <meta property="og:url" content="https://www.samanthaalbrecht.com" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://www.samanthaalbrecht.com/images/meta/meta-image.png"
        />
      </Head>
      <Home />
    </>
  )
}
