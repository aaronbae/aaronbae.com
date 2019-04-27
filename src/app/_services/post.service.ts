import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    console.log(`${environment.mongoUrl}/posts`);
    return this.http.get(`${environment.mongoUrl}/posts`);
  }
  getPost(id: Number) {
    return this.http.get(`${environment.mongoUrl}/posts/${id}`)
  }
}
