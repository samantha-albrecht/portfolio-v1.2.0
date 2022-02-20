import Home from '@components/pages/home/Home/Home'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>
          Samantha Albrecht | Designer, developer, creative problem solver
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}
