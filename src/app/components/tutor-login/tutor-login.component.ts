import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/user-info.service';

@Component({
  selector: 'app-tutor-login',
  templateUrl: './tutor-login.component.html',
  styleUrls: ['./tutor-login.component.css']
})
export class TutorLoginComponent implements OnInit {
  email:string="";
  password:string="";   
  disabled:boolean=true;

  vemail: boolean= false;
  vpassword: boolean= false;

  constructor(private userService: UserInfoService, private router:Router) { }

  ngOnInit(): void {
    localStorage.setItem("id","10110");
  }

  display(){
    localStorage.getItem('id')
  }
 

  TutorSignin(){
    const user = this.userService.findUser(this.email, this.password);
    if( user == true) {
        this.router.navigate(['tutor'])
    }
    else{
        alert("Invalid User and Password");
    }
  }

  validate(value){
    switch(value){
      case "email" : 
      if(this.email.indexOf('@gmail.com') == -1){
        this.vemail=true;
        

      } 
      else{
        this.vemail= false;
       
      }
      break;
    }

    switch(value){
      case "password" : 
      if(this.password.length < 10){
        this.vpassword= true;
        
      }
      else{
        this.vpassword= false;
   
      }
    }
  }

}
