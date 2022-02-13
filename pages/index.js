import Home from '@components/pages/home/Home/Home'
import Head from 'next/head'

export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </div>
  )
}
