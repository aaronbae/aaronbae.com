import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="row all-home-container">
        <div className="side-panel center col-md-12 col-lg-3">
          <div className='row row-spacer'></div>
          <div className="row">
            <img className='round profile-img' src="assets/profile2.jpg" alt="profile" />
          </div>
          <div className='row row-spacer'></div>
          <div className="row">
            <ul className="col">
              <li className='row name-item'><span className="h2 my-name">Aaron Beomjun Bae</span></li>
              <li className="row bio-one-liner"><span>Masters in Computer Science</span></li>
              <li className="row bio-one-liner"><span>UC Irvine Class of 2021</span></li>
              <li className="row bio-one-liner"><span>Focus on Natural Language Processing</span></li>
              <li className="row bio-one-liner"><span>Bachelor of Science in Mathematics</span></li>
              <li className="row bio-one-liner"><span>University of Washington Class of 2019</span></li>
              <li className="row bio-one-liner">
                <a href="assets/downloadables/resume.pdf" download>Download a copy of my resume</a>
              </li>
            </ul>
          </div>
          <div className='row row-spacer'></div>
          <div className='row'>
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
          <div className='row row-spacer'></div>
        </div>


        <div className="main-panel col-md-12 col-lg-9">
          <div className="row total-section">
            <div className="col">
              <div className="row title-section">
                <p className="col h3">Education</p>
              </div>
              <div className="row">
                <div className="col">
                  <div className="row content-section">
                    <div className="col-md-12 col-lg-3 center">
                      <img className="education-img" src="assets/uci_seal_500.png" alt="University of California Irvine" />
                    </div>
                    <div className="col-md-12 col-lg-9">
                      <span><span  className="h6">Masters in Computer Science</span>, <i>University of California - Irvine</i></span>
                      <ul className="education-bullets">
                        <li>Started attending since September 2019.</li>
                        <li>Focus in natural language processing using transformer based models.</li>
                        <li>Participating in Center for Machine Learning and Intelligent Systems.</li>
                        <li>Looking for full time software engineering or data scientist role after graduation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="row content-section">
                    <div className="col-md-12 col-lg-3 center">
                      <img className="education-img" src="assets/uw_seal_500.jpg" alt="University of Washington" />
                    </div>
                    <div className="col-md-12 col-lg-9">
                      <span><span  className="h6">Bachelor of Science in Mathematics</span>, <i>University of Washington</i></span>
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
                    <div className="col logo-col center no-padding">
                      <div className="logo-wrapper"><img src="assets/icons/uci.png" alt="university of california, irvine logo" className="company-logo"/></div>
                    </div>
                    <div className="col experience-col">
                      <div className="row experience-title">
                        <div><span className="h5">Graduate Student Researcher</span></div>
                        <div className="support-info ml-auto">
                          <span>- University of California, Irvine</span>
                          <span className="float-right">March 2020 - Present</span>    
                        </div>
                      </div>
                      <div className="row">
                        <p className="h6">Professor Padhraic Smyth Research Team</p>
                        <p>As a graduate researcher for Professor Padhraic Smyth, I am working on ways to analyze dialogue 
                          dataset. Datasets like Switchboard Corpus and ICSI Meeting Recording Corpus contains a 
                          turn-by-turn grouped utterances along with semantic annotations. The goal of the project is to 
                          analyze this conversational dataset to identify questions in any group conversations and possibly
                          classify person-to-person dynamics like leadership qualities.
                        </p>
                      </div>
                    </div>
                  </div>


                  <div className="row individual-experience">
                    <div className="col logo-col center no-padding">
                      <div className="logo-wrapper"><img src="assets/icons/uw_logo.png" alt="university of washington logo" className="company-logo"/></div>
                    </div>
                    <div className="col experience-col">
                      <div className="row experience-title">
                        <div><span className="h5">Undergraduate Researcher</span></div>
                        <div className="support-info ml-auto">
                          <span>- University of Washington</span>
                          <span className="float-right">Jun 2018 - Jun 2019</span>    
                        </div>
                      </div>
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
                    <div className="col logo-col center no-padding">
                      <div className="logo-wrapper"><img src="assets/icons/dapper.jpg" alt="dapper company logo" className="company-logo"/></div>
                    </div>
                    <div className="col experience-col">
                      <div className="row experience-title">
                        <div><span className="h5">Backend Software Engineer</span></div>
                        <div className="support-info ml-auto">
                          <span>- Dapper Grooming</span>
                          <span className="float-right">Jun 2018 - August 2019</span> 
                        </div>   
                      </div>
                      <div className="row">
                        <p className="h6">Dapper Grooming | Backend Server Development Team</p>
                        <p>Continuing my intersets in backend web development, I worked with a University 
                          of Washington alumn who was starting a company called Dapper. The company
                          needed a basic web based platform to launch their project, and I helped them 
                          by creating an AWS server to handle their client traffic.
                        </p>
                      </div>
                    </div>
                  </div>




                  <div className="row individual-experience">
                    <div className="col logo-col no-padding center">
                      <div className="logo-wrapper"><img src="assets/icons/crowdcow.jpg" alt="crowd cow company logo" className="company-logo"/></div>
                    </div>
                    <div className="col experience-col">
                      <div className="row experience-title">
                        <div><span className="h5">Software Engineering Intern</span></div>
                        <div className="support-info ml-auto">
                          <span>- Crowd Cow</span>
                          <span className="float-right">Jun 2017 - August 2017</span>
                        </div>  
                      </div>
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
