import Project from '../../components/Projects/Project'
import Carousel from "../../components/Projects/Carousel"
import '../../styles/Projects/non-highlighted-projects.css'

export default function HighlightedProjects(props) {
  return (
    <div className={`highlighted-projects ${props.className}`}>
      <Project 
        section_title="Featured Projects"
        title="AaronBae.com" 
        tech_tags="NextJS, Express, MongoDB" 
        title_url="https://www.aaronbae.com"
        github_url="https://github.com/aaronbae/aaronbae.com"
      >
        <div className="aaronbae-top">
          <img src="/projects/aaronbae/main.png" className="aaronbae-img" alt="aaronbae.com project screenshot" />
          <ul className="aaronbae-list">
            <li>A personal website built on NextJS and React</li>
            <li>Includes a custom blog feature that was built from ground up</li>
            <li>MongoDB backend to handle the blog posts</li>
            <li>AWS EC2 to host the website</li>
            <li>AWS S3 to host the images to the blog</li>
            <li>ExpressJS to handle the backend</li>
            <li>SEO functionality possible via NextJS</li>
            <li>Intended for collaborators and recruiters to learn more about me</li>
          </ul>
        </div>
        <div className="aaronbae-bottom">
          <div className="bottom-description">
            Built with Responsive Concepts in Mind
          </div>
          <Carousel className="bottom-carousel">
            {[...Array(5)].map((_, index) => 
              <img key={index} src={`/projects/aaronbae/${index}.jpg`} 
                className="aarombae-mobile-img" alt="AaronBae Project Mobile Screenshots" />
            )}
          </Carousel>
        </div>
      </Project>
    </div>
  )
}