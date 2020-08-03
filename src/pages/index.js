import Layout from "../components/Layout"
import Introduction from '../components/Home/Introduction'
import Education from '../components/Home/Education'
import TechnicalExperiences from '../components/Home/TechnicalExperiences'

function Home() {
  return (
    <Layout>
      <Introduction />
      <Education />
      <TechnicalExperiences />
    </Layout>
  )
}
export default Home