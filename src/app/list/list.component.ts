import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() students;
  @Output() assignAttendance = new EventEmitter<{
    name: string;
    attendance: string;
  }>();
  constructor() {}

  ngOnInit(): void {}

  onAssignAttendance(studentInfo) {
    this.assignAttendance.emit(studentInfo);
  }
}
