import React, { Component } from 'react';
import './Education.scss';

class Intro extends Component {
  render() {
    return (
      <div className="row total-section">
        <div className="col">
          <div className="row title-section">
            <p className="col h3">Education</p>
          </div>
          <div className="row">
            <div className="col">
              <div className="row content-section">
                <div className="col-md-12 col-lg-3 center education-img-wrapper">
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
                <div className="col-md-12 col-lg-3 center education-img-wrapper">
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
    );
  }
}

export default Intro;
