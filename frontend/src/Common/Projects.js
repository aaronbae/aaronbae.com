import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          'id': 1,
          'title': "aaronbae.com",
          "img_url": "assets/projects/website-thumbnail.png",
          "alt": "aaronbae.com",
          'description': "This is the website that I use as a platform to showcase my work and experiences. Intended for professors or technical recruiters to evaluate my software engineering and resarch skills.",
          'list_title': "Engineering Technologies Used",
          'list':
            [
              "ReactJS",
              "Node.JS",
              "MongoDB",
              "Bootstrap 4",
              "Hosted on Amazon AWS EC2"
            ]
        },
        {
          'id': 2,
          'title': "competitive",
          "img_url": "assets/projects/codejam_thumbnail.png",
          "alt": "codejam",
          'description': "As an amateur programming competitor, Competitive is an ongoing compilation of all the products from past competitive programming contests. Many use Python and use complex algorithmic ideas along with strict efficiency requirements.",
          'list_title': "Competitions I Participated In",
          'list':
            [
              "CodeJam",
              "HashCode",
              "KickStart"
            ]
        }
      ]
    };
  }
  render() {
    return (
      <div className="row">
        <a href="#projects" name="projects" className="nav-anchor"></a>
        <div className="col-12 projects-container">
          <div className="row">
            <p className="col h1">Projects</p>
          </div>
          <div className="row">  
            {this.state.projects.map(item =>
              <div key={item.id} className="individual-project roundedCard col-4">
                <div className="row">
                  <div className="col-10 offset-1">
                    <div className="row title">
                      <p className="col h1">{item.title}</p>
                    </div>
                    <div className="row">
                      <img src={item.img_url} alt={item.alt} className="thumbnail" />
                    </div>
                    <div className="row"><p className="h4">Description:</p></div>
                    <div className="row">{item.description}</div>
                    <div className="row project-spacing"></div>
                    <div className="row"><p className="list-title h4">{item.list_title}:</p></div>
                    <div className="row">
                      <ul>
                        {item.list.map(inner_item => <li key={inner_item}>{inner_item}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
