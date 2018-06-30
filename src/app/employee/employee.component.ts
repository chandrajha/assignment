import { Component } from '@angular/core';
import {DataService} from '../service/data.service';

@Component({
  templateUrl: './employee.component.html'
})

export class EmployeeComponent
{
  
  constructor(private obj1:DataService) { }

  

  public selectItem(n:number):void
  {
    let obj=this.obj1.mgrs[n];
    
    alert("Manager Details\n\nManager Name: "+obj.mgname+"\nMobile No: "+obj.mob+"\nEmail_id: "+obj.email+"\nLocation: "+obj.loc);
  }

  public gointo(str:string):void
  {
    if(str=="manager1")
    {
      this.selectItem(0);
    }
    if(str=="manager2")
    {
      this.selectItem(1);
    }
    if(str=="manager3")
    {
      this.selectItem(2);
    }
    if(str=="manager4")
    {
      this.selectItem(3);
    }
  }
  
}