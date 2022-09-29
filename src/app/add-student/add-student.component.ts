import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  availableAttendance = [
    { display: 'None', value: '' },
    { display: 'Present', value: 'Present' },
    { display: 'Absent', value: 'Absent' },
  ];

  attndService: AttendanceService;

  constructor(attndService: AttendanceService) {
    this.attndService = attndService;
  }

  ngOnInit(): void {}

  onSubmit(submittedForm) {
    console.log(submittedForm.value);
    this.attndService.addStudent(
      submittedForm.value.name,
      submittedForm.value.attendance
    );
  }
}
