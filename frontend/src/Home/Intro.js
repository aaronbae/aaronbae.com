import React, { Component } from 'react';
import './Intro.scss';

class Intro extends Component {
  render() {
    return (
      <div id="introduction-container" className="center col-md-12 col-lg-3">
        <div className="row introduction-content-row">
          <img className='round profile-img' src="assets/profile2.jpg" alt="profile" />
        </div>
        <div className="row introduction-content-row">
          <ul id="bio-info" className="col">
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
        <div className='row introduction-content-row'>
          <div id="link-info" className="col-12">
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
    );
  }
}

export default Intro;
