import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../common.css']
})
export class HomeComponent implements OnInit {
  isSideBar = false;

  constructor() { }

  ngOnInit() {
  }

}
