import '../../styles/Home/introduction.css'

export default function Introduction() {
  return (
    <div className="card-wrapper introduction-container">
      <div>
        <img id='profile-img' src="profile-small.jpg" alt="profile" />
      </div>
      <ul id="bio-info">
        <li >Aaron Beomjun Bae</li>
        <li >Masters in Computer Science</li>
        <li >UC Irvine Class of 2021</li>
        <li >Focus on Natural Language Processing</li>
        <li >Bachelor of Science in Mathematics</li>
        <li >University of Washington Class of 2019</li>
      </ul>
      <div className="card-section-break" />
      <div className="resume-link"><a href="downloadables/resume.pdf" download>Download a copy of my resume</a></div>
      <div className="card-section-break" />
      <div className="intro-link-wrapper">
        <a href="https://github.com/aaronbae" target="_blank" title="GitHub">
          <img src="/icons/github.png" alt="GitHub" className='intro-icon' />
        </a>
        <a href="https://www.linkedin.com/in/aaron-bae/" target="_blank" title="LinkedIn">
          <img src="/icons/linkedin.png" alt="LinkedIn" className='intro-icon' />
        </a>
        <a href="mailto:aaron@aaronbae.com" title="email" target="popup" >
          <img src="/icons/gmail.png" alt="Email" className='intro-icon' />
        </a>
      </div>
    </div>
  )
}