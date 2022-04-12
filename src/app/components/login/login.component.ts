import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/user-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  mailId: string = '';
  password: string = '';

  vmailId: boolean = false;
  vpassword: boolean = false;

  constructor(private userService: UserInfoService, private router: Router) {}

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user == null) {
      return;
    }
    if (user.type == 'Tutor') {
      this.router.navigate(['tutor']);
    } else {
      this.router.navigate(['student']);
    }
  }

  findUser(user) {
    if (user.mailId == this.mailId && user.password == this.password) {
      return user;
    } else {
      return null;
    }
  }

  signIn() {
    let users = JSON.parse(localStorage.getItem('users'));
    let user = users.find((user) => {
      return this.findUser(user);
    });
    if (!user) {
      alert('Invalid Email And Password or Signup');
      return;
    }
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    if (user.type == 'Tutor') {
      this.router.navigate(['tutor']);
    } else {
      this.router.navigate(['student']);
    }
  }

  validate(value) {
    switch (value) {
      case 'mailId':
        if (this.mailId.indexOf('@gmail.com') == -1) {
          this.vmailId = true;
        } else {
          this.vmailId = false;
        }
        break;

      case 'password':
        if (this.password.length <= 0) {
          this.vpassword = true;
        } else {
          this.vpassword = false;
        }
        break;
    }
  }
}
