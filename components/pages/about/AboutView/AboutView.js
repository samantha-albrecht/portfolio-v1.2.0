import Cta from '@components/blocks/Cta'
import PageWrapper from '@components/foundation/PageWrapper'
import Bio from '../Bio'
import Books from '../Books'
import Experience from '../Experience'

function AboutView() {
  return (
    <PageWrapper>
      <Bio />
      <Experience />
      <Books />
      <Cta currentPage="about" />
    </PageWrapper>
  )
}

export default AboutView
