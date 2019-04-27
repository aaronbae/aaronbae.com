import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authentication: UserService) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector("#email").value;
    const password = target.querySelector("#password").value;

    this.authentication.getUserDetails(username, password).subscribe(data => {
      console.log(data);
      console.log("SHITTTTTTT");
    });
  }

}
