import HeadlineStudioView from '@components/pages/work/HeadlineStudioView'
import Head from 'next/head'

export default function HeadlineStudio() {
  return (
    <>
      <Head>
        <title>
          Samantha Albrecht | Web Designer + Developer | Work - Headline Studio
        </title>
        <meta name="description" content="" />
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
