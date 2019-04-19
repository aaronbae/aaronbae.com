import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Post  from '../_models/Post';
import { PostService } from  '../_services/post.service';


@Component({
  selector: 'app-post-viewer',
  templateUrl: './post-viewer.component.html',
  styleUrls: ['./post-viewer.component.css']
})
export class PostViewerComponent implements OnInit {

  post: Post;

  constructor(
    private route: ActivatedRoute,
    private ps: PostService
  ) { }
  //constructor() { }

  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.ps.getPost(id).subscribe((data: Post) => {
      this.post = data;
    });
  }
}
