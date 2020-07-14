import React, { Component } from 'react';
import Intro from './Intro';
import Education from './Education';
import './Home.scss';
import TechnicalExperiences from './TechnicalExperiences';

class Home extends Component {
  render() {
    return (
      <div className="row home-container">
        <Intro />
        <div className="main-panel col-md-12 col-lg-9">
          <Education />
          <TechnicalExperiences />
        </div>
      </div>
    );
  }
}

export default Home;
