import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAssignmentInfoComponent } from './student-assignment-info.component';

describe('StudentAssignmentInfoComponent', () => {
  let component: StudentAssignmentInfoComponent;
  let fixture: ComponentFixture<StudentAssignmentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAssignmentInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAssignmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
