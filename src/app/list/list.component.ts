import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  students = [];
  activatedRoute: ActivatedRoute;
  attndService: AttendanceService;
  loadedAttendance = 'all';
  subscription: Subscription;

  constructor(activatedRoute: ActivatedRoute, attndService: AttendanceService) {
    this.activatedRoute = activatedRoute;
    this.attndService = attndService;
  }

  ngOnInit(): void {
    this.attndService.fetchStudents();
    this.activatedRoute.params.subscribe((params) => {
      this.students = this.attndService.getStudents(params.attendance);
      this.loadedAttendance = params.attendance;
    });
    this.subscription = this.attndService.studentsUpdated.subscribe(() => {
      this.students = this.attndService.getStudents(this.loadedAttendance);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
