import React, { Component } from 'react';
import Intro from './Intro';
import Education from './Education';
import './Home.scss';
import TechnicalExperiences from './TechnicalExperiences';

class Home extends Component {
  render() {
    return (
      <div className="row home-container">
        <div id="introduction-container" className="center col-md-12 col-lg-3">
          <Intro />
        </div>
        <div className="col-md-12 col-lg-9">
          <Education />
          <TechnicalExperiences />
        </div>
      </div>
    );
  }
}

export default Home;
