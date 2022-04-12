import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { StudentComponent } from './components/student/student.component';
import { TutorLoginComponent } from './components/tutor-login/tutor-login.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { HomeComponent } from './home/home.component';
import { StudentAssignmentInfoComponent } from './student-assignment-info/student-assignment-info.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tutor', component: TutorComponent },
  { path: 'student', component: StudentComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'tutor-login', component: TutorLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'student-assignment-info', component:StudentAssignmentInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
