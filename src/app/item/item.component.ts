import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() student;
  @Output() assignedAttendance = new EventEmitter<{
    name: string;
    attendance: string;
  }>();
  constructor() {}

  ngOnInit(): void {}

  onAssign(attendance) {
    // this.student.attendance = attendance;
    this.assignedAttendance.emit({
      name: this.student.name,
      attendance: attendance,
    });
  }
}
