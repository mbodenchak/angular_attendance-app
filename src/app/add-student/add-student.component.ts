import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
