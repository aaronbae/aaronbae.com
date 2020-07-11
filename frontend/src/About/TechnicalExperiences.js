import React, { Component } from 'react';
import './TechnicalExperiences.scss';

class TechnicalExperiences extends Component {
  render() {
    return (
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
    );
  }
}

export default TechnicalExperiences;
