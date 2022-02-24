import HeadlineStudioView from '@components/pages/work/WorkViews/HeadlineStudioView'
import Head from 'next/head'

export default function HeadlineStudio() {
  return (
    <>
      <Head>
        <title>Samantha Albrecht | Work - Headline Studio</title>
        <meta name="description" content="" />
        <meta name="robots" content="noindex" />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.samanthaalbrecht.com"
        />
        <link
          rel="canonical"
          href="https://www.samanthaalbrecht.com/work/headline-studio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeadlineStudioView />
    </>
  )
}
