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
        <div className="col">
          <div className="row experience-title">
            <img className="company-logo" src={this.state.logo} alt={this.state.logo_alt} />
            <div className="company-info-wrapper">
              <span className="h5 position-title-span">{this.state.position}</span>
              <span className="time-worked-span">{this.state.date_formatted}</span>
              <span className="company-name-span">{this.state.company}</span>
            </div>
          </div>
          <div className="row experience-description">
            {this.state.roles.map((item, index)=> {
              return (
                <div key={index}>
                  <p className="role-title">{item.title}:</p>
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
