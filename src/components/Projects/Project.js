import Mapper from "./UrlMapper"
import '../../styles/Projects/project.css'

export default function Project(props) {
  return (
    <div className="project-container card-wrapper">
      {props.section_title && 
        <p className="card-title project-section-header">
          {props.section_title}
        </p> 
      }
      <div className="project-header">
        <div className="project-title">
          <a href={props.title_url} target="_blank" title={props.section_title}>
            {props.title}
          </a>
        </div>
        <div className="icon-wrapper">  
          <a href={props.github_url} target="_blank" className="github-icon" title="Visit GitHub Repo for this Project">
            <img src="icons/github.png" />
          </a>
          {props.private && <img src="icons/lock-icon.svg" className="lock-icon" title="This is a Private Project" alt="private project"/>}
        </div>
      </div>
      <div className="project-content">
        {props.children}
      </div>
      <div className="tech-tags">
        {props.tech_tags.split(",").map((item, index)=>
          <a key={item} href={Mapper[item.trim()]} target="_blank" >{item}</a>
        )}
      </div>
    </div>
  )
}