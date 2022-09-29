import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HeaderComponent } from './header/header.component';

import { AttendanceService } from './attendance.service';
import { LogService } from './log.service';

const routes: Routes = [
  {
    path: 'students',
    component: TabsComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      {
        path: ':attendance',
        component: ListComponent,
      },
    ],
  },
  {
    path: 'new-student',
    component: AddStudentComponent,
  },
  {
    path: '**',
    redirectTo: '/students',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    AddStudentComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [AttendanceService, LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
