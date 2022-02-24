import Layout from '@components/Layout/layout'
import '@styles/globals.css'

function Application({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Application
