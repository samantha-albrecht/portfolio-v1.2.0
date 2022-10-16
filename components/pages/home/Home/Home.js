import Cta from '@components/blocks/Cta'
import PageWrapper from '@components/foundation/PageWrapper'
import Hero from '../Hero'
import Process from '../Process'
// import Quote from '../Quote'
import Work from '../Work'

function Home() {
  return (
    <PageWrapper>
      <Hero />
      {/* <Quote /> */}
      <Work />
      <Process />
      <Cta />
    </PageWrapper>
  )
}

export default Home
