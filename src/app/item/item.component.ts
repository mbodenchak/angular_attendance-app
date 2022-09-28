import { Component, OnInit, Input } from '@angular/core';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() student;
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
  }
}
