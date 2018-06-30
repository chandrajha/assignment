import { Component } from '@angular/core';

@Component({
  
  templateUrl: './manager.component.html'
})

export class ManagerComponent
{
  public x:boolean=true;
    
    public mgrs:any[]=[
      {mgname:"manager1",mob:"9471931157",email:"manager1@gmail.com",loc:"Hyd_1"},
      {mgname:"manager2",mob:"9371931333",email:"manager2@gmail.com",loc:"Pune_2"},
      {mgname:"manager3",mob:"9171931123",email:"manager3@gmail.com",loc:"Patna_3"},
      {mgname:"manager4",mob:"9671931321",email:"manager4@gmail.com",loc:"Delhi_4"}

          ];
}