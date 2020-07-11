import React, { Component } from 'react';
import Intro from './Intro';
import Education from './Education';
import './About.scss';
import TechnicalExperiences from './TechnicalExperiences';

class About extends Component {
  render() {
    return (
      <div className="row about-container">
        <div className="side-panel center col-md-12 col-lg-3">
          <Intro />
        </div>
        <div className="main-panel col-md-12 col-lg-9">
          <Education />
          <TechnicalExperiences />
        </div>
      </div>
    );
  }
}

export default About;
