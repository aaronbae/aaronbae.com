import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      'id': 1,
      'title': "aaronbae.com",
      "img_url": "assets/projects/website-thumbnail.png",
      "alt": "aaronbae.com",
      'description': "This is the website that I use as a platform to showcase my work and experiences. Intended for professors or technical recruiters to evaluate my software engineering and resarch skills.",
      'list_title': "Engineering Technologies Used",
      'list':
      [
        "Angular 7", 
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
      'list_title': "Competitions I Participated In:",
      'list':
      [
        "CodeJam", 
        "HashCode",
        "KickStart"
      ]
    },
  ];
  chosen = 0;

  constructor() { }

  ngOnInit() {
  }

  getProjects() {
    return this.projects;
  }

}
