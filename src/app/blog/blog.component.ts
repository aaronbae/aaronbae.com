import { Component, OnInit } from '@angular/core';
import Post from '../Post';
import { PostService } from  '../post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  posts: Post[];

  constructor(
    private ps: PostService
  ) { }

  ngOnInit() {
    this.ps.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }
}
