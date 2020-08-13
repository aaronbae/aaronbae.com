import '../../styles/Home/technical-experience-entry.css'

export default function TechincalExperienceEntry({
  logo, logo_alt, position, company, date_formatted, roles
}) {
  // TODO: info validation
  return (
    <div className="individual-experience">
      <img className="company-logo" src={logo} alt={logo_alt} />
      <div className="company-info-wrapper">
        <span className="position-title-span">{position}</span>
        <span className="time-worked-span">{date_formatted}</span>
        <span className="company-name-span">{company}</span>
      </div>
      {roles.map((item, index)=> {
        return (
          <div key={index}>
            <p className="role-title">{item.title}:</p>
            <p>{item.description}</p>
          </div>
        )
      })}
    </div>
  )
}