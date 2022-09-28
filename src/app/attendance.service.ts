export class AttendanceService {
  private students = [
    { name: 'Michael S', attendance: '' },
    { name: 'Sarah J', attendance: '' },
    { name: 'Evan M', attendance: '' },
    { name: 'Tommy W', attendance: '' },
  ];

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
  }
}
