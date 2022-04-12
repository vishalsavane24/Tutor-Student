import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  getInfo() {
    // return this.STUDINFO;
    return JSON.parse(localStorage.getItem('users'));
  }

  getQuestion() {
    return this.QUESTIONS_CONFIG;
    // return JSON.parse(localStorage.getItem('users'));
  }

  getOption() {
    return this.QUESTIONS_CONFIG;
  }

  getAnswer(){
    return this.QUESTIONS_CONFIG;
  }

  addUsers(data) {
    this.STUDINFO.push(data);
    console.log(this.STUDINFO);
    console.log(data);
  }

  // getStudAssing(data){
  //   this.STUDINFO.push(data);
  //   console.log(this.STUDINFO);
  //   console.log(data);
  // }
  getAssingments(){
    return JSON.parse(localStorage.getItem('assingment'));
  }

  // GET DATA FROM LOCAL STORAGE.....

  // getStudent(){
  //   return JSON.parse(localStorage.getItem(''))
  // }
  // getAssingment(){
  //   return JSON.parse(localStorage.getItem('assingment'));
  // }

  // addUser(){
  //   return JSON.parse(localStorage.getItem('users'));
  // }

  // assingmentId=[
  //   {assingment_Id:1},
  //   {assingment_Id:2},
  //   {assingment_Id:3},
  //   {assingment_Id:4},
  //   {assingment_Id:5}
  // ]

  studentAssinmentMapping = [
    {studID:0, assId:'0'},
    {studId:1, assId:'1'},
    {studId:2, assId:'2'},
    {studId:3, assId:'3'},
    {studId:4, assId:'4'}
];

  STUDINFO = [
    {
      userId:1,
      id: 1,
      firstName: 'ganesh',
      lastName: 'gaitonde',
      Number: '9096969696',
      mailId: 'ganesh@gmail.com',
      gender: 'male',
      type: 'Tutor',
      isSelected:false
    },

    {
      userId:2,
      id: 2,
      firstName: 'ramesh',
      lastName: 'thakur',
      Number: '9096985696',
      mailId: 'ramesh@gmail.com',
      gender: 'male',
      type: 'Student',
      isSelected:false
    },

    {
      userId: 3,
      firstName: 'suresh',
      lastName: 'chopra',
      Number: '9085969696',
      mailId: 'suresh@gmail.com',
      gender: 'male',
      type: 'Tutor',
      isSelected:false
    },

    {
      userId: 4,
      firstName: 'mangesh',
      lastName: 'rao',
      Number: '9096969620',
      mailId: 'mangesh@gmail.com',
      gender: 'male',
      type: 'Student',
      isSelected:false
    },

    {
      userId: 5,
      firstName: 'pritam',
      lastName: 'rajwade',
      Number: '8020969696',
      mailId: 'pritam@gmail.com',
      gender: 'male',
      type: 'Student',
      isSelected:false
    },
  ];

  QUESTIONS_CONFIG = {
    questionList: [
      { id: 0, name: 'Select Question' },
      { id: 1, name: 'What is the capital of Somalia' },
      { id: 2, name: 'What is the capital of Maxico' },
      { id: 3, name: 'What is the capital of UK' },
      { id: 4, name: 'What is the capital of USA' },
    ],

    optionsList: [
      { id: 1, name: 'Mexico' },
      { id: 2, name: 'Asmara' },
      { id: 3, name: 'London' },
      { id: 4, name: 'Los Angeles' },
      { id: 5, name: 'New York' },
      { id: 6, name: 'Washington DC' },
      { id: 7, name: ' Guadalajar City' },
    ],

    answerList: [
      { id: 0, answer: 'Select Answer' },
      { id: 1, answer: 'Mexico' },
      { id: 2, answer: 'Asmara' },
      { id: 3, answer: 'Londom' },
      { id: 4, answer: 'Los Angeles' },
      { id: 5, answer: 'New York' },
      { id: 5, answer: 'Washington DC' },
      { id: 5, answer: 'Guadalajar City' },
    ],

  

  };


  // QUESTIONS = [
  //   {
  //     questionId: 1,
  //     question: 'what is the captial of india1',
  //     options: ['pune', 'kolkatta', 'mumbai', 'chennai'],
  //     answer: 'pune',
  //   },

  //   {
  //     questionId: 2,
  //     question: 'what is the captial of india2',
  //     options: ['pune', 'kolkatta', 'mumbai', 'chennai'],
  //     answer: 'kolkatta',
  //   },

  //   {
  //     questionId: 1,
  //     question: 'what is the captial of india3',
  //     options: ['pune', 'kolkatta', 'mumbai', 'chennai'],
  //     answer: 'mumbai',
  //   },
  // ];
}
