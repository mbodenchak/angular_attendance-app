import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [AttendanceService],
})
export class ItemComponent implements OnInit {
  @Input() student;
  @Output() assignedAttendance = new EventEmitter<{
    name: string;
    attendance: string;
  }>();
  attndService: AttendanceService;

  constructor(attndService: AttendanceService) {
    this.attndService = attndService;
  }

  ngOnInit(): void {}

  onAssign(attendance) {
    this.attndService.onAssignAttendance({
      name: this.student.name,
      attendance: attendance,
    });
    // this.student.attendance = attendance;
    // this.assignedAttendance.emit({
    //   name: this.student.name,
    //   attendance: attendance,
    // });
  }
}
