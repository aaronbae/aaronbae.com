import Introduction from '../components/Home/Introduction'
import Education from '../components/Home/Education'
import TechnicalExperiences from '../components/Home/TechnicalExperiences'
import '../styles/home.css'

function Home() {
  return (
    <div id="home">
      <div id="home-side">
        <Introduction />
      </div>
      <div id="home-main">
        <Education />
        <TechnicalExperiences />
      </div>
    </div>
  )
}
export default Home