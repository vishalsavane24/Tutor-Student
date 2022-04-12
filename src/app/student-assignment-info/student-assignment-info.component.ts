import { getLocaleCurrencyCode } from '@angular/common';
import { Component, IterableDiffers, OnInit } from '@angular/core';
import { ItemsList } from '@ng-select/ng-select/lib/items-list';
// import { map } from 'rxjs';

@Component({
  selector: 'app-student-assignment-info',
  templateUrl: './student-assignment-info.component.html',
  styleUrls: ['./student-assignment-info.component.css'],
})
export class StudentAssignmentInfoComponent implements OnInit {
  studData: any;
  currentAssignemntName: any;
  currentMappingUser: any;
  mappingData: any;
  assignmentData: any;
  studentAssignmentInfo:any;
  // studData:any;

  constructor() {}

  ngOnInit(): void {


//STUDENT ASSIGNMENT INFO..........
var arr=[];
let mapData = JSON.parse(localStorage.getItem('mappingData'));
for(let studName of mapData){
  for(let y of studName.assignmentIds){
    var v={sName:studName.studentName,aName:y.NAME,status:y.status ? "Completed":" Not Completed"}
    arr.push(v);
  }
}
this.mappingData=arr;
console.log("vishal",arr);


// let mapData = JSON.parse(localStorage.getItem('mappingData'));
// for(let i=0; i<mapData.length;i++){
//   let userData = JSON.parse(localStorage.getItem('users')).find((item) => item.userId==mapData[i].studentId);
//   console.log("userData",userData);
//   mapData[i].studName=userData.firstName;

  
//   let assData = JSON.parse(localStorage.getItem('assingment')).find((item) => item.assigmentId==mapData[i].assigmentId);
//   mapData[i].assName=assData.assingmentName;
//   console.log("DATA",JSON.parse(localStorage.getItem('assingment')).find((item) => item.assigmentId==mapData[i].assigmentId));

  // let assData = JSON.parse(localStorage.getItem('assingment'));
  // mapData[i].assName=assData.assingmentName;
//   console.log("mapData[i].assName",mapData[i].assName);
//   console.log("mapData11",mapData);

// }
// this.mappingData=mapData;
// localStorage.setItem('mappingData',JSON.stringify(mapData));

// console.log('mapData', mapData);

  //       console.log('userData', userData);
    
  //       let assData = JSON.parse(localStorage.getItem('assingment')).find(
  //         (item) => item.studentId,
  //         userData.firstName
  //       );
  //       console.log('assDataa', assData);

   }
   
} 

   

    
// let mapData = JSON.parse(localStorage.getItem(this.mappingData)).filter((studentId) => {
// for (let i = 0; i < mapData.studentId.length; i++){
//   if(studentId.studentName == assData.studentId.studentName ){}
// }
    
// }       
// );
//     // localStorage.setItem('assData', JSON.stringify(studentAssignmentInfo));

//     // console.log('mappingData', this.mappingData);


//     // for (let i = 0; i < mappingData.length; i++) {
//     //   let currentMappingUser = userData.filter(
//     //     (user) => user.userId == mappingData[0].studentId
//     //   );

//       // console.log('currentMappingUser', currentMappingUser);

//       // for (let j = 0; j < mappingData[i].assignment.length; j++) {
//       //   this.currentAssignemntName = assignmentData.filter(
//       //     (assignment) =>
//       //       assignment.assingmentId == assignmentData[0].assingment

//       //   );
//       //   this.currentAssignemntName=this.currentAssignemntName.assingmentName;
//       //   console.log('currentAssignemntName', this.currentAssignemntName);

