import { Component, OnInit } from '@angular/core';
import { RequiredValidator } from '@angular/forms';
import { Router } from '@angular/router';
// import { ConstructorProvider } from '@angular/core';
import * as questionsData from '../../que.json';
//  import * as studentinfo from '../../studentInfo.json'
import { SharedService } from '../../shared.service';

// const questionData = require('../../que.json');

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css'],
})
export class TutorComponent implements OnInit {
  id: number;
  question: string = '';
  options: any[];
  answer: string = '';
  name: string;
  isSelected: boolean;
  studentlist: any[];
  studentInfo: any;
  questionConfig: any;
  username: string = '';
  studentId: any;
  assingmentId: number;
  assignments: any;
  assingmentName: string = '';
  studentAssignments: any;
  student: any;
  assignId: number;
  studId: any;
  subjectName: string = '';
  studName: string = '';
  userId: number;
  studentsId: any;
  assId: any;
  dueDate:any;
  studData:any;

  
//   json= {
//     "assingmentId": 1,
// "questions_master":[{options: [{id: 1, name: "Mexico"}, {id: 2, name: "Asmara"}, {id: 4, name: "Los Angeles"}],
//  "id": 3,
// "question": "What is the capital of Somalia",
// "answer": "Mexico"}]
    
  

  constructor(private sharedService_: SharedService, private router: Router) {}

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user == null) {
      this.router.navigate(['login']);
    } else {
      this.username = user.firstName;
    }

    this.studentInfo = this.sharedService_.getInfo();
    console.log(this.studentInfo);

    // this.questionConfig = this.sharedService_.getQuestion();
    // console.log(this.questionConfig);

    this.questionConfig = this.sharedService_.getAnswer();
    console.log(this.questionConfig);

    // this.assignAssingment=this.sharedService_.getAssingment();

    this.assignments = this.sharedService_.getAssingments();
    console.log(this.assignments);

    // this.subjectName = this.sharedService_.getAssingments();
    // console.log(this.subjectName);

    // GIVE LOCAL STORAGE ID

    // this.student = this.sharedService_.getStudent();
    // console.log(this.)

    // this.studAssing = this.sharedService_.getStudAssing(data);
    // console.log(this.studAssing);
  }

  createAssingment() {
    let assignment1 = {
      assingmentId: this.assingmentId,
      options: [{question: this.question, options:this.options}],
      assingmentName: this.assingmentName,
      subjectName: this.subjectName,
      studQue: this.studentAssignments,
      answer:this.answer,
      status:false
    };

    const assingData = localStorage.getItem('assingment');
    if (assingData != null) {
      const assingment = JSON.parse(assingData);
      assignment1.assingmentId = assingment.length + 1;
      assingment.push(assignment1);
      localStorage.setItem('assingment', JSON.stringify(assingment));
    } else {
      let assingment = [];
      assignment1.assingmentId = 1;
      assingment.push(assignment1);
      localStorage.setItem('assingment', JSON.stringify(assingment));
    }
  }

  getAssignment() {
    let studAssinment = {
      studName: this.studName,
    };
    const studAssData = localStorage.getItem('questions');
    if (studAssData != null) {
      const student = JSON.parse(studAssData);
      student.push(studAssinment);
      localStorage.setItem('questions', JSON.stringify(student));
      
    } else {
      let student = [];
      student.push(studAssinment);
      localStorage.setItem('questions', JSON.stringify(student));
      
    }

    
  }

  getStudAssingID() {
    var s=this.studentAssignments
    let studentAssinmentMapping = [];
    let studId = this.studentInfo.filter((userId) => {
      return userId.isSelected;
    });
    // studId = studId.map((user) => user.userId);
    console.log(studId);
    for (let id of studId) {
      // console.log("info1",this.studentInfo);
    // console.log("infoooo",this.studentInfo.map(user =>{ if(user.userId==id)return user.firstName}));

      // ORIGNAL CODE................
      let x = {
        studentId: id.userId,
        studentName:id.firstName,
        assignmentIds: this.studentAssignments.map(user => ({'dueDate': this.dueDate,'assigmentId':user.assingmentId,'NAME':user.assingmentName,status:false})),
       
    }
    studentAssinmentMapping.push(x);

    // let x = {
    //       studentId: id,
    //       assignmentIds: this.studentAssignments.map(user => ({'dueDate': this.dueDate,'assigmentId':user.assingmentId})),
         
    //   }

  }
    
    localStorage.setItem('mappingData',JSON.stringify(studentAssinmentMapping));

    // console.log('student data', studId);

    // console.log('student info', this.studentInfo);
    // console.log('assignment info', this.assignments);
    console.log('studentAssinmentMapping', studentAssinmentMapping);
    // console.log('dattaa', this.studQue);
    const studData = localStorage.getItem('mappingData');
    // if (studData != null) {
    //   const info = JSON.parse(studData);
    //   info.push(studentAssinmentMapping);
    //   localStorage.setItem('mappingData', JSON.stringify(info));
    //   } else {
    //     let info = [];
    //     info.push(studentAssinmentMapping);
    // localStorage.setItem('mappingData', JSON.stringify(info));
    //   }
  }

  setQuestion(setVal: any) {
    this.question = setVal.value;
  }

  setAnswer(setValue: any) {
    this.answer = setValue.value;
  }

  // studentAssinmentMapping() {
  //   console.log('student info', this.studentInfo);
  //   console.log('assignment info', this.assignments);

  //   let usersId=this.studentInfo.isSelected;
  //   let assId=this.assignments.assingmentId;

  //   const mapping = [{usersId:'',
  //                     assId:''}];

  //     // const mapped=mapping.filter()
  //     // console.log("mapped",mapping);
  //   }

  removeUser() {
    localStorage.removeItem('loggedInUser');
  }

  getInfo(){
    this.studData = JSON.parse(localStorage.getItem('mappingData'));
    console.log("data 11",this.studData);
 }

 tp(values){
  console.log("hi iam shweta",values);
 }
}
