import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/user-info.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css'],
})
export class StudentLoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  vemail: boolean = false;
  vpassword: boolean = false;

  constructor(private userService: UserInfoService, private router: Router) {}

  ngOnInit(): void {}

  StudentSignIn() {
    const user = this.userService.findUser(this.email, this.password);
    if (user == true) {
      this.router.navigate(['student']);
    } else {
      alert('invalid username and passsword');
    }
  }

  validate(value) {
    switch (value) {
      case 'email':
        if (this.email.indexOf('@gmail.com') == -1) {
          this.vemail = true;
        } else {
          this.vemail = false;
        }
        break;
    }

    switch (value) {
      case 'password':
        if (this.password.length < 10) {
          this.vpassword = true;
        } else {
          this.vpassword = false;
        }
        break;
    }
  }
}
