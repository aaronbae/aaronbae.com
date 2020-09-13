import HighlightedProjects from '../../components/Projects/HighlightedProjects'
import NonHighlightedProjects from '../../components/Projects/NonHighlightedProjects'
import '../../styles/Projects/index.css'

export default function Projects() {
  return (
    <div id="projects-container">
      <HighlightedProjects className="projects-top"/>
      <NonHighlightedProjects className="projects-bottom" />
    </div>
  )
}