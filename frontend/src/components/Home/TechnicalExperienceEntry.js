import '../../styles/Home/technical-experience-entry.css'

export default function TechincalExperienceEntry(props) {
  // TODO: info validation
  return (
    <div className="individual-experience">
      <a href={props.url} target="_blank" title="More About Washington Experimental Mathematics Lab">
        <img className="company-logo" src={props.logo} alt={props.logo_alt} />
      </a>
      <div className="company-info-wrapper">
        <span className="position-title-span">{props.position}</span>
        <span className="time-worked-span">{props.date_formatted}</span>
        <a href={props.url} target="_blank" className="te-company-link"
          title="More about the Company">
          <span className="company-name-span">{props.company}</span>
        </a>
      </div>
      {props.children}
    </div>
  )
}