import { Component, OnInit } from '@angular/core';
import Post from '../Post';
import { PostService } from  '../post.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  
  posts: Post[];

  constructor(private ps: PostService) { }

  ngOnInit() {
    this.ps.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }

}
