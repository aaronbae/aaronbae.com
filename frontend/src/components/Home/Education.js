import '../../styles/Home/education.css'

export default function Education() {
  return (
    <div className="card-wrapper title-section">
      <p className="card-title">Education</p> 
      <div className="education-section">
        <img className="education-img" src="/uci_seal_200.png" alt="University of California Irvine" />
        <div>
          <span>Masters in Computer Science</span>, <i className="italicized">University of California - Irvine</i>
          <ul className="education-bullets">
            <li>Started attending since September 2019.</li>
            <li>Focus in natural language processing using transformer based models.</li>
            <li>Participating in Center for Machine Learning and Intelligent Systems.</li>
            <li>Looking for full time software engineering or data scientist role after graduation</li>
          </ul>
        </div>
      </div>
      <div className="education-section">
        <img className="education-img" src="/uw_seal_200.jpg" alt="University of Washington" />
        <div>
          <span>Bachelor of Science in Mathematics</span>, <i className="italicized">University of Washington</i>
          <ul className="education-bullets">
            <li>Attended from September 2015 until June 2019</li>
            <li>Applicable Mathematics classes such as Matrix Algebra, Differential Equations, and Mathematical Reasoning </li>
            <li>Applicable Data Science classes such as Database Management, Data Structures and Algorithms, and Artificial Intelligence </li>
            <li>Efficient in Python, Java, JavaScript, MySQL, AWS, D3, NodeJS, React, AJAX, Ruby, Sparks</li>
            <li>Abundant research experience from Washington Experimental Mathematics Lab (WXML) and assistantship to graduate researcher at Foster School of Business.</li>
            <li>Member of the Sigma Nu Fraternity Gamma Chi Chapter.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}