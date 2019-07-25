import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="row">
        <a href="#home" name="home" className="nav-anchor"></a>
        <div className="home-container col">
          <div className="row">
            <img className='roundedCard profile-img' src="assets/profile.jpg" alt="profile" />
          </div>
          <div className="row">
            <ul>
              <li className='name-item'><p className="h1">Aaron Beomjun Bae</p></li>
              <li>Masters in Computer Science</li>
              <li>UC Irvine Class of 2021</li>
              <li>Focus in Artificial Intelligence</li>
              <li>Bachelor of Science in Mathematics</li>
              <li>University of Washington Class of 2019</li>
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
      </div>
    );
  }
}

export default Home;
