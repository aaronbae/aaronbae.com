import React, { Component } from 'react';
import TechnicalExperienceEntry from './TechnicalExperienceEntry';
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
              <TechnicalExperienceEntry 
                logo="assets/icons/uci.png"
                logo_alt="university of california, irvine logo"
                position="Graduate Student Researcher"
                company="University of California, Irvine"
                date_formatted="March 2020 - Present"
                roles={[
                  {title: "Professor Padhraic Smyth Research Team",
                  description: "As a graduate researcher for Professor Padhraic Smyth, I am working "
                  +"on ways to analyze dialogue dataset. Datasets like Switchboard Corpus and ICSI "
                  +"Meeting Recording Corpus contains a turn-by-turn grouped utterances along with "
                  +"semantic annotations. The goal of the project is to analyze this conversational"
                  +"dataset to identify questions in any group conversations and possibly classify"
                  +"person-to-person dynamics like leadership qualities."}]}
              /> 
              <TechnicalExperienceEntry 
                logo="assets/icons/uw_logo.png"
                logo_alt="university of washington logo"
                position="Undergraduate Researcher"
                company="University of Washington"
                date_formatted="Jun 2018 - Jun 2019"
                roles={[
                  {
                    title: "Washington Experimental Mathematics Lab",
                    description: "I was invited to work with Professor Christopher Hoffman to "
                    +"participate on his Mathematics in Gerrymandering Project. He works to analyze "
                    +"search the state space for the ways to draw out the districts. We used C++ and "
                    +"Python as the engine of the project, and built NodeJS servers to distribute, "
                    +"visualize, and explain the political data we mined."
                  },
                  {
                    title: "Assitantship to Emisa Nateigh, Ph.D",
                    description: "As a lab assistant to Emisa Nateigh, a Ph.D student at the "
                    +"University of Washington Foster School of business, I helped to create a "
                    +"machine learning system to perform Multi-Tasking Gaussian Process learning "
                    +"algorithm on the collected medical data. Mainly, used Python and NumPy to "
                    +"carry out the statistical process. Used MatplotLib and D3.js to visualize the"
                    +"information."
                  }
                ]}
              /> 
              <TechnicalExperienceEntry 
                logo="assets/icons/dapper.jpg"
                logo_alt="dapper company logo"
                position="Backend Software Engineer"
                company="Dapper Grooming"
                date_formatted="Jun 2018 - August 2019"
                roles={[
                  {
                    title: "Backend Server Development Team",
                    description: "Continuing my intersets in backend web development, I worked with a" 
                    +"University of Washington alumn who was starting a company called Dapper. The "
                    +"company needed a basic web based platform to launch their project, and I helped"
                    +"them by creating an AWS server to handle their client traffic."
                  }
                ]}
              /> 
              <TechnicalExperienceEntry 
                logo="assets/icons/crowdcow.jpg"
                logo_alt="crowd cow company logo"
                position="Software Engineering Intern"
                company="Crowd Cow"
                date_formatted="Jun 2017 - August 2017"
                roles={[
                  {
                    title: "Frontend Developer",
                    description: "As a frontend developer, I worked on improving CrowdCow's private"
                      +" e-commerce platform by changing the client purchase UI pipeline. Also, "
                      +"worked on various features like in-house data visualization dashboard that "
                      +"displays company statistics."
                  },
                  {
                    title: "Backend Developer",
                    description: "As a backend developer, I worked on middlman the information "
                      +"between the database and the client servers. Main technologies that I used "
                      +"were MySQL, Ruby on Rails, Git, Budler, RuboCop, Stripe, and Puma."
                  }
                ]}
              /> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TechnicalExperiences;
