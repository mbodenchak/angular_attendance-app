import { Component, OnInit } from '@angular/core';

import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [AttendanceService],
})
export class TabsComponent implements OnInit {
  students = [];

  chosenAttendance = 'all';
  attndService: AttendanceService;

  constructor(attndService: AttendanceService) {
    this.attndService = attndService;
  }

  ngOnInit(): void {}

  onChoose(attendance) {
    this.chosenAttendance = attendance;
  }

  getStudents() {
    this.students = this.attndService.getStudents(this.chosenAttendance);
    return this.students;
  }
}
