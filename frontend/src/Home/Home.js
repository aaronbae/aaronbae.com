import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
        <div id="home" class="home-container col-12">
            <div class="row">
                <img src="assets/profile.jpg" alt="profile" class='roundedCard profile-img' />
            </div>
            <div class="row">
                <ul>
                    <li class='name-item'>Aaron Beomjun Bae</li>
                    <li>Masters in Computer Science</li>
                    <li>UC Irvine Class of 2021</li>
                    <li>Focus in Artificial Intelligence</li>
                    <li>Bachelor of Science in Mathematics</li>
                    <li>University of Washington Class of 2019</li>
                </ul>
            </div>
            <div class='row external-link-container'>
                <div class="col-12">
                    <a href="https://github.com/aaronbae" title="GitHub">
                        <img src="assets/icons/github.png" alt="GitHub" class='external-link-icon' />
                    </a>
                    <a href="https://www.linkedin.com/in/aaron-bae/" title="LinkedIn">
                        <img src="assets/icons/linkedin.png" alt="LinkedIn" class='external-link-icon' />
                    </a>
                    <a href="mailto:aaronbae@uw.edu" title="email">
                        <img src="assets/icons/gmail.png" alt="Email" class='external-link-icon' />
                    </a>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;
