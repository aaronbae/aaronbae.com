import { Component, OnInit } from '@angular/core';
/*
import Post from '../Post';
import { PostService } from  '../post.service';
*/

@Component({
  selector: 'app-post-viewer',
  templateUrl: './post-viewer.component.html',
  styleUrls: ['./post-viewer.component.css']
})
export class PostViewerComponent implements OnInit {

  //post: Post;

  //constructor(private ps: PostService) { }
  constructor() { }

  ngOnInit() {
    /*
    this.ps.getPost().subscribe((data: Post[]) => {
      this.post = data;
    });
    */
  }
}
