import React, { Component } from 'react';
import './TechnicalExperienceEntry.scss';

class TechnicalExperienceEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: props.logo,
      logo_alt: props.logo_alt,
      position: props.position,
      company: props.company,
      date_formatted: props.date_formatted,
      roles: props.roles
    }
  }
  render() {
    return (
      <div className="row individual-experience">
        <div className="col logo-col no-padding center">
          <div className="logo-wrapper">
            <img src={this.state.logo} alt={this.state.logo_alt} className="company-logo" />
          </div>
        </div>
        <div className="col experience-col">
          <div className="row experience-title">
            <div><span className="h5">{this.state.position}</span></div>
            <div className="support-info ml-auto">
              <span>- {this.state.company}</span>
              <span className="float-right">{this.state.date_formatted}</span>
            </div>
          </div>
          <div className="row">
            {this.state.roles.map((item, index)=> {
              return (
                <div key={index}>
                  <p className="h6">{item.title}:</p>
                  <p>{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default TechnicalExperienceEntry;
