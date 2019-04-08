import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  posts = [
    {
      "_id":1,
      "author":1,
      "title":"First Post through Angular and MongoDB",
      "content":"Last day of Spring Break in his room in University District, Aaron Bae is finally able to finish the Angular Project that he has be dreaming to complete. Discipline is difficult, but I'm glad that I am making progress. Nonetheless slowly.",
    },
    {
      "_id":1,
      "author":1,
      "title":"Second Post is not even in Mongo, but making progress.",
      "content": "I realize web dev is just a grunt work. But nontheless, progress."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  

}
