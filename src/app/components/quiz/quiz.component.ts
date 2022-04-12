import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/quiz.model';
import { QuizService } from 'src/app/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
quizes: any[]= [];

currentQuiz= 0;
answerSelected= false;
correctAnswer= 0;
incorrectAnswer= 0;
result:boolean= false;

constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.quizes = this.quizService.getQuizes(1);
    console.log("quizes",this.quizService.getQuizes(1));


  }
  

  onAnswer(option:any){
    this.answerSelected= true;
      setTimeout(() => {
        this.currentQuiz++;
        this.answerSelected= false;
      }, 3000);

      if(option){
        this.correctAnswer++;
      }
      else{
        this.incorrectAnswer++;
      }
      
  }
  showResult(){
    this.result = true;
  }


  endTest(){
   let data =JSON.parse(localStorage.getItem('mappingData'));
   console.log("mappingData",data);
   let studentAssignmentIndex=data.findIndex((obj=>obj.studentId==1));
   console.log("studentAssignmentIndex",studentAssignmentIndex);

   data[studentAssignmentIndex].assignmentIds[0].status=true;

  localStorage.setItem('mappingData', JSON.stringify(data));

    
  }
  
}
