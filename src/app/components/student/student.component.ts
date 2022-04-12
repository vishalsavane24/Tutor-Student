import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  constructor(private router: Router) {}
  username: string = '';
  assignAssignment: any;
  assignmentName: any;

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('loggedInUser'));

    if (user == null) {
      this.router.navigate(['login']);
    }
     else {
      this.username = user.firstName;

      this.assignAssignment = JSON.parse(
        localStorage.getItem('mappingData')).find((item) => item.studentId == user.userId);
      console.log('assignAssignment', this.assignAssignment);
      
      this.assignmentName = JSON.parse(localStorage.getItem('assingment')
      ).filter((assingmentId) => {
        for (let i = 0; i < this.assignAssignment.assignmentIds.length; i++) {
          // console.log('data5', this.assignAssignment.assignmentIds[i]);
          // console.log('data6', assingmentId.assingmentId);
          // console.log('data7',this.assignAssignment.assignmentIds[i].assigmentId);
          
          if (
            assingmentId.assingmentId ==
            this.assignAssignment.assignmentIds[i].assigmentId
          ) {
            // console.log('boolean');
            assingmentId.dueDate = this.assignAssignment.assignmentIds[i].dueDate;
            
            return true;
          } else {
            continue;
          }
        }
        return false;
      });
      console.log('data3', this.assignmentName);
    }
  }

  removeUser() {
    localStorage.removeItem('loggedInUser');
  }

 
}
