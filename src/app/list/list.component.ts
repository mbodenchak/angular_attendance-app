import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  students = [];
  activatedRoute: ActivatedRoute;
  attndService: AttendanceService;
  loadedAttendance = 'all';

  constructor(activatedRoute: ActivatedRoute, attndService: AttendanceService) {
    this.activatedRoute = activatedRoute;
    this.attndService = attndService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.students = this.attndService.getStudents(params.attendance);
      this.loadedAttendance = params.attendance;
    });
    this.attndService.studentsUpdated.subscribe(() => {
      this.students = this.attndService.getStudents(this.loadedAttendance);
    });
  }
}
