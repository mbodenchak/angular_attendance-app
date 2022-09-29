import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class AttendanceService {
  private students = [
    { name: 'Michael S', attendance: '' },
    { name: 'Sarah J', attendance: '' },
    { name: 'Evan M', attendance: '' },
    { name: 'Tommy W', attendance: '' },
  ];

  private logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
  }

  getStudents(chosenAttendance) {
    //use slice to return copy to prevent editing original array
    if (chosenAttendance === 'all') {
      return this.students.slice();
    }
    return this.students.filter((student) => {
      return student.attendance === chosenAttendance;
    });
  }

  onAssignAttendance(studentInfo) {
    const pos = this.students.findIndex((student) => {
      return student.name === studentInfo.name;
    });
    this.students[pos].attendance = studentInfo.attendance;
    this.logService.writeLog(
      'Changed side of ' +
        studentInfo.name +
        ', new attendance: ' +
        studentInfo.attendance
    );
  }

  addStudent(name, attendance) {
    const pos = this.students.findIndex((student) => {
      return student.name === name;
    });
    if (pos !== -1) {
      return;
    }
    const newStudent = { name: name, attendance: attendance };
    this.students.push(newStudent);
  }
}
