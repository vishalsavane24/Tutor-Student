import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TutorComponent } from './components/tutor/tutor.component';
import { StudentComponent } from './components/student/student.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { TutorLoginComponent } from './components/tutor-login/tutor-login.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { StudentAssignmentInfoComponent } from './student-assignment-info/student-assignment-info.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    TutorComponent,
    StudentComponent,
    QuizComponent,
    StudentLoginComponent,
    TutorLoginComponent,
    HomeComponent,
    StudentAssignmentInfoComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
    
 
    
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
