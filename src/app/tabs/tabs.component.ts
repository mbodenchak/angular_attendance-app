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

  constructor() {}

  ngOnInit(): void {}
}
