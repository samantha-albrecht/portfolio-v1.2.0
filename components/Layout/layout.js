import Footer from '@components/blocks/Footer'
import Header from '@components/blocks/Header'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
