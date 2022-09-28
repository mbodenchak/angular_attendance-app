import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  students = [
    { name: 'Michael S', attendance: '' },
    { name: 'Sarah J', attendance: '' },
    { name: 'Evan M', attendance: '' },
    { name: 'Tommy W', attendance: '' },
  ];
  chosenAttendance = 'all';

  constructor() {}

  ngOnInit(): void {}

  onChoose(attendance) {
    this.chosenAttendance = attendance;
  }

  getStudents() {
    //use slice to return copy to prevent editing original array
    if (this.chosenAttendance === 'all') {
      return this.chosenAttendance.slice();
    }
    return this.students.filter((student) => {
      return student.attendance === this.chosenAttendance;
    });
  }
}
