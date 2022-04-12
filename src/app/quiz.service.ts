import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  // quizes: Quiz[] = [
  //   {
  //     question: 'What is the capital of Somalia',
  //     answer: [
  //       { option: 'Nairobi',correct: false},
  //       { option: 'Asmara' ,correct: false},
  //       { option: 'Mogadishu',correct: true}
  //     ]
  //   },

  //   {
  //     question: 'What is the capital of Maxico',
  //     answer: [
  //       { option: 'Mexico',correct: true},
  //       { option: 'Guadalajar City' ,correct: false},
  //       { option: 'Puebla City',correct:false}
  //     ]
  //   },

  //   {
  //     question: 'What is the capital of UK',
  //     answer: [
  //       { option: 'Mexico',correct: false},
  //       { option: 'Asmara' ,correct: false},
  //       { option: 'Londom',correct:true}
  //     ]
  //   },

  //   {
  //     question: 'What is the capital of USA',
  //     answer: [
  //       { option: 'Los Angeles',correct: false},
  //       { option: 'New York' ,correct: false},
  //       { option: 'Washington DC',correct:true}
  //     ]
  //   },

  //   {
  //     question: 'What is the capital of Somalia',
  //     answer: [
  //       { option: 'Nairobi',correct: false},
  //       { option: 'Asmara' ,correct:false},
  //       { option: 'Mogadishu',correct:true}
  //     ]
  //   },

  //   {
  //     question: 'What is the capital of Somalia',
  //     answer: [
  //       { option: "Nairobi", correct: false},
  //       { option: "Asmara" , correct: false},
  //       { option: "Mogadishu",correct:true}
  //     ]
  //   },

  //   {
  //     question: 'What is the capital of Somalia',
  //     answer: [
  //       { option: 'Nairobi',correct: false},
  //       { option: 'Asmara' ,correct: false},
  //       { option: 'Mogadishu',correct:true}
  //     ]
  //   },
  // ]

  constructor() {}

  getQuizes(studentId: number) {
    let userAssignment = JSON.parse(localStorage.getItem('assingment'));
    let mapQueStud = JSON.parse(localStorage.getItem('mappingData'));
    console.log('dattaa', userAssignment, mapQueStud);

    let currentAssignment = mapQueStud.find(o => o.studentId === studentId);
    let currentOptions = userAssignment.find(o => o.assingmentId === currentAssignment.assignmentIds[0].assigmentId);
    console.log("md",currentAssignment.assignmentIds[0]);
    console.log("md2",currentOptions);

    
    let ans = [];

    for (let i = 0; i < currentOptions.options[0].options.length; i++) {
      let correct = false;
      console.log("current options",currentOptions.answer,currentOptions.options[0].options[i].name);
      if (currentOptions.answer == currentOptions.options[0].options[i].name) {
        correct = true;
      }
      
      let temp = { options: currentOptions.options[0].options[i].name, correct: correct };

      ans.push(temp);
    }
    console.log("anss",ans);

    let question = [
      {
        question: currentOptions.options[0].question,
        answer: ans,
      },
    ];
    console.log('dataaaaa', question);
    return question;
  }
}
