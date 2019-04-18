import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  uri = 'http://localhost:4000/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${this.uri}`);
  }
  getPost(id: Number) {
    return this.http.get(`${this.uri}`)
  }
}
