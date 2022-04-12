// import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// import { isEmpty } from 'rxjs';
import { UserInfoService } from 'src/app/user-info.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

import { FormGroup, FormControl } from '@angular/forms';
import * as info from '../../userdata.json';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  
  userId:number;
  firstName: string = '';
  lastName: string = '';
  gender: string = '';
  type: string = '';
  mailId: string = '';
  phoneNumber: string = '';
  password: string = '';
  confirmPassword: string = '';
  disabled: boolean = true;
  user!: any;
  myform!: any;
  loggedIn: any = [];
  answer:string;

  val = {
    isSelected:false,
    vuserId:false,
    vfirstName: false,
    vlastName: false,
    vgender: false,
    vmailId: false,
    vphoneNumber: false,
    vpassword: false,
    vconfirmPassword: false,
    vtype: false,
  };
  // getNewUser: any;

  constructor(
    private userService: UserInfoService,
    private s: SharedService,
    private router: Router
  ) {
    // console.log(this.getSaveData());
  }

  ngOnInit(): void {}

  storeUserInfo() {
    let newUser = {
      isSelected:false,
      userId:this.userId,
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      type: this.type,
      mailId: this.mailId,
      Number: this.phoneNumber,
      password: this.password,
      confirmPassword: this.confirmPassword,
      
    };

    //getItem from localStorage ..new user
    //if not present, create black array and push user element into it & set that array to the local storage
    //if present...convert string to array and push new user objet into that array

    const oldUsers = localStorage.getItem('users');
    if (oldUsers != null) {
      const users = JSON.parse(oldUsers);
      newUser.userId=users.length + 1;
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      let users = [];
      newUser.userId= 1;
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
    }

    // const loggedInUser = localStorage.getItem('loggedUser');
    // if(loggedInUser != null){
    // const loggedUser = JSON.parse(loggedInUser);
    // loggedUser.push(newUser);
    // localStorage.setItem('loggedUser',JSON.stringify(loggedUser));
    // }else{
    //   let loggedUser=[];
    //   loggedUser.push(newUser);
    //   localStorage.setItem('loggedUser',JSON.stringify())
    // }

    let flag = true;

    if (flag) {
      this.userService.addUser(newUser);
      this.userService.displayUsers();
    } else {
      alert('Somthing Misssing');
    }
    this.s.addUsers(newUser);
  }

  check() {
    if (
      this.val.vfirstName &&
      this.val.vlastName &&
      this.val.vgender &&
      this.val.vtype &&
      this.val.vphoneNumber &&
      this.val.vmailId &&
      this.val.vpassword &&
      this.val.vconfirmPassword
    ) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }

  switch() {
    // if(this.type.t)
  }

  validate(value: any) {
    switch (value) {
      case 'firstName':
        if (this.firstName.length > 0) {
          this.val.vfirstName = true;
          // console.log("first Name ",this.firstName)
          this.check();
        } else {
          this.val.vfirstName = false;
          this.check();
        }
        // console.log("this.val.vfirstName ",this.val.vfirstName)
        break;

      case 'lastName':
        if (this.lastName.length > 0) {
          this.val.vlastName = true;
          // console.log("last Name ",this.lastName)
          this.check();
        } else {
          this.val.vlastName = false;
          this.check();
        }
        // console.log("this.val.vlastName ",this.val.vlastName)
        break;

      case 'gender':
        if (!this.gender) {
          this.val.vgender = false;
          // console.log("gender ",this.gender)
          this.check();
        } else {
          this.val.vgender = true;
          this.check();
        }
        // console.log("this.val.vgender ",this.val.vgender);
        break;

      case 'type':
        if (!this.type) {
          this.val.vtype = false;
          // console.log("type ",this.type)
          this.check();
        } else {
          this.val.vtype = true;
          this.check();
        }
        // console.log("this.val.vtype ",this.val.vtype);
        break;

      case 'email':
        if (this.mailId.indexOf('@gmail.com') == -1) {
          this.val.vmailId = true;
          // console.log("email ",this.email )
          this.check();
        } else {
          this.val.vmailId = false;
          this.check();
        }
        // console.log("this.val.vemail ",this.val.vemail)
        break;

      case 'phoneNumber':
        if (this.phoneNumber.length < 11) {
          this.val.vphoneNumber = true;
          // console.log("phone Number ",this.phoneNumber )
          this.check();
        } else {
          this.val.vphoneNumber = false;
          this.check();
        }
        // console.log("this.val.phoneNumber ",this.val.vphoneNumber)
        break;

      case 'password':
        if (this.password.length < 10) {
          this.val.vpassword = true;
          // console.log("password ",this.password )
          this.check();
        } else {
          this.val.vpassword = false;
          this.check();
        }
        // console.log("this.val.vpassword ",this.val.vpassword)

        break;

      case 'confirmPassword':
        if (
          this.confirmPassword.length < 10 &&
          this.password == this.confirmPassword
        ) {
          this.val.vconfirmPassword = true;
          // console.log("confirm password ",this.confirmPassword )
          this.check();
        } else {
          this.val.vconfirmPassword = false;
          this.check();
        }
        // console.log("this.val.confirmPassword ",this.val.vconfirmPassword)

        break;
    }
  }

  alphaBitOnly(e: any) {
    let regex = new RegExp('^[a-zA-Z]+$');
    let str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
      return true;
    }
    e.preventDefault();
    return false;
  }
  numberOnly(e: any) {
    let regex = new RegExp('^[0-9]+$');
    let str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
      return true;
    }
    e.preventDefault();
    return false;
  }
}
