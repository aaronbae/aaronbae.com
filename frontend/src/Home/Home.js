import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          'id': 1,
          'title': "aaronbae.com",
          "img_url": "assets/projects/website-thumbnail.png",
          "alt": "aaronbae.com",
          'description': "This is the website that I use as a platform to showcase my work and experiences. Intended for professors or technical recruiters to evaluate my software engineering and research skills.",
        },
        {
          'id': 2,
          'title': "competitive",
          "img_url": "assets/projects/codejam_thumbnail.png",
          "alt": "codejam",
          'description': "As an amateur programming competitor, Competitive is an ongoing compilation of all the products from past competitive programming contests. Many use Python and use complex algorithmic ideas along with strict efficiency requirements.",
        }
      ]
    };
  }
  render() {
    return (
      <div className="row all-panel-container">
        <div className="side-panel center col-md-12 col-lg-3">
          <div className="row">
            <img className='round profile-img' src="assets/profile.jpg" alt="profile" />
          </div>
          <div className="row">
            <ul className="col">
              <li className='name-item row'><span className="h2">Aaron Beomjun Bae</span></li>
              <li className="row"><span>Masters in Computer Science</span></li>
              <li className="row"><span>UC Irvine Class of 2021</span></li>
              <li className="row"><span>Focus in Artificial Intelligence</span></li>
              <li className="row"><span>Bachelor of Science in Mathematics</span></li>
              <li className="row"><span>University of Washington Class of 2019</span></li>
              <li className="row">
                <a href="assets/downloadables/resume.pdf" download>Download a copy of my resume</a>
              </li>
            </ul>
          </div>
          <div className='row external-link-container'>
            <div className="col-12">
              <a href="https://github.com/aaronbae" title="GitHub">
                <img src="assets/icons/github.png" alt="GitHub" className='external-link-icon' />
              </a>
              <a href="https://www.linkedin.com/in/aaron-bae/" title="LinkedIn">
                <img src="assets/icons/linkedin.png" alt="LinkedIn" className='external-link-icon' />
              </a>
              <a href="mailto:aaronbae@uw.edu" title="email">
                <img src="assets/icons/gmail.png" alt="Email" className='external-link-icon' />
              </a>
            </div>
          </div>
        </div>


        <div className="main-panel col-md-12 col-lg-8">
          <div className="row total-section">
            <div className="col">
              <div className="row title-section">
                <p className="col h3">Education</p>
              </div>
              <div className="row content-section">
                <div className="col-md-12 col-lg-4">
                  <img className="education-img" src="assets/uwcampus.jpg" alt="University of Washington" />
                </div>
                <div className="col-md-12 col-lg-8">
                  <span><span  className="h6">Bachelor of Science in Mathematics</span>, <i>Seattle</i>, <i>University of Washington</i></span>
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
          </div>


          <div className="row total-section">
            <div className="col">
              <div className="row title-section">
                <p className="col h3">Projects</p>
              </div>
              <div className="row content-section">
                {this.state.projects.map(item =>
                  <div key={item.id} className="individual-project roundEasy col-2">
                    <div className="row">
                      <div className="col-10 offset-1">
                        <div className="row title">
                          <p className="col h4">{item.title}</p>
                        </div>
                        <div className="row">
                          <img src={item.img_url} alt={item.alt} className="thumbnail picture-shadow bounded" />
                        </div>
                        <div className="row">{item.description}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="row total-section">
            <div className="col">
              <div className="row title-section">
                <p className="col h3">Technical Experiences</p>
              </div>
              <div className="row content-section">
                <div className="col">



                  <div className="row individual-experience">
                    <div className="col-1 logo-col center">
                      <div className="logo-wrapper"><img src="assets/icons/uw.png" alt="university of washington logo" className="company-logo"/></div>
                    </div>
                    <div className="col-10">
                      <div className="row experience-title"><p className="h5">Undergraduate Researcher</p></div>
                      <div className="row organization-name">University of Washington</div>
                      <div className="row timeline-info">Jun 2018 - Jun 2019</div>
                      <div className="row">
                        <p className="h6">Washington Experimental Mathematics Lab</p>
                        <p>I was invited to work with Professor Christopher Hoffman to participate on his Mathematics 
                          in Gerrymandering Project. He works to analyze search the state space for the ways to draw 
                          out the districts. We used C++ and Python as the engine of the project, and built NodeJS 
                          servers to distribute, visualize, and explain the political data we mined.
                        </p>
                        <p className="h6">Assitantship to Emisa Nateigh, Ph.D:</p>
                        <p>As a lab assistant to Emisa Nateigh, a Ph.D student at the University of Washington Foster 
                          School of business, I helped to create a machine learning system to perform Multi-Tasking 
                          Gaussian Process learning algorithm on the collected medical data. Mainly, used Python and 
                          NumPy to carry out the statistical process. Used MatplotLib and D3.js to visualize the 
                          information.
                        </p>
                      </div>
                    </div>
                  </div>




                  <div className="row individual-experience">
                    <div className="col-1 logo-col center">
                      <div className="logo-wrapper"><img src="assets/icons/dapper.jpg" alt="dapper company logo" className="company-logo"/></div>
                    </div>
                    <div className="col-10">
                      <div className="row experience-title"><p className="h5">Backend Software Engineer</p></div>
                      <div className="row organization-name">Dapper Grooming</div>
                      <div className="row timeline-info">Jun 2018 - August 2018</div>
                      <div className="row">
                        <p className="h6">Dapper Grooming | Backend Server Development Team</p>
                        <p>I was invited to work with Professor Christopher Hoffman to participate on his Mathematics 
                          in Gerrymandering Project. He works to analyze search the state space for the ways to draw 
                          out the districts. We used C++ and Python as the engine of the project, and built NodeJS 
                          servers to distribute, visualize, and explain the political data we mined.
                        </p>
                      </div>
                    </div>
                  </div>




                  <div className="row individual-experience">
                    <div className="col-1 logo-col center">
                      <div className="logo-wrapper"><img src="assets/icons/crowdcow.jpg" alt="crowd cow company logo" className="company-logo"/></div>
                    </div>
                    <div className="col-10">
                      <div className="row experience-title"><p className="h5">Software Engineering Intern</p></div>
                      <div className="row organization-name">Crowd Cow</div>
                      <div className="row timeline-info">Jun 2017 - August 2017</div>
                      <div className="row">
                        <p className="h6">Frontend Developer:</p>
                        <p>As a frontend developer, I worked on improving CrowdCow's private e-commerce platform by 
                          changing the client purchase UI pipeline. Also, worked on various features like in-house 
                          data visualization dashboard that displays company statistics.
                        </p>
                        <p className="h6">Backend Developer:</p>
                        <p>As a backend developer, I worked on middlman the information between the database and the 
                          client servers. Main technologies that I used were MySQL, Ruby on Rails, Git, Budler, RuboCop, 
                          Stripe, and Puma.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
