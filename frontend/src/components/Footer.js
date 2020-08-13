import Link from 'next/link'
import '../styles/footer.css'

export default function Footer() {
  return (
    <div id="footer">
      <div className="link_container">  
        <a href="https://github.com/aaronbae" title="GitHub" target="_blank">
          <img src="/icons/github.png" alt="GitHub" className="footer-link" />
        </a>
        <a href="https://www.linkedin.com/in/aaron-bae/" title="LinkedIn" target="_blank">
          <img src="/icons/linkedin.png" alt="LinkedIn" className="footer-link" />
        </a>
        <a href="mailto:aaronbae@uw.edu" title="email">
          <img src="/icons/gmail.png" alt="Email" className="footer-link" />
        </a>
      </div>
      <div className="bottom-text-container">
        <p>Dessigned and Built by Aaron Bae</p>
      </div>
    </div>
  )
}