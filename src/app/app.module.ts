import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from "@angular/router";

import { AppComponent } from './app.component';

import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import{DataService} from './service/data.service';

const appRoutes:Routes=[
  
  {path:"",component:EmployeeComponent},
  {path:"Manager",component:ManagerComponent},
];

@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,ManagerComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
