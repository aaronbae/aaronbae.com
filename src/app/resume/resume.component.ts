import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css', '../common.css']
})
export class ResumeComponent implements OnInit {
  date = "4.13.2019";

  constructor() { }

  ngOnInit() {
  }

}
