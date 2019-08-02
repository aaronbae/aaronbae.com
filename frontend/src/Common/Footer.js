import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="row footer">
        <div className="col">
          <div className='row'>
            <div className="col-12">
              <a href="https://github.com/aaronbae" title="GitHub">
                <img src="assets/icons/github.png" alt="GitHub" className='footer-link-icon' />
              </a>
              <a href="https://www.linkedin.com/in/aaron-bae/" title="LinkedIn">
                <img src="assets/icons/linkedin.png" alt="LinkedIn" className='footer-link-icon' />
              </a>
              <a href="mailto:aaronbae@uw.edu" title="email">
                <img src="assets/icons/gmail.png" alt="Email" className='footer-link-icon' />
              </a>
            </div>
          </div>
          <div className="row"><p>Designed and Built by Aaron Bae</p></div>  
        </div>
      </div>
    );
  }
}

export default Footer;
