import { Component } from '@angular/core';

@Component({
  templateUrl: './employee.component.html'
})

export class EmployeeComponent
{

  public mgrs:any[]=[
    {mgname:"manager1",mob:"9471931157",email:"manager1@gmail.com",loc:"Hyd_1"},
    {mgname:"manager2",mob:"9371931333",email:"manager2@gmail.com",loc:"Pune_2"},
    {mgname:"manager3",mob:"9171931123",email:"manager3@gmail.com",loc:"Patna_3"},
    {mgname:"manager4",mob:"9671931321",email:"manager4@gmail.com",loc:"Delhi_4"}

        ];


  public selectItem(n:number):void
  {
    let obj=this.mgrs[n];
    
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





  public emps:any[]=
[
  {ename:"employee_1",desig:"developer",mob:9471931608,email:"employee1@gmail.com",loc:"saharsa_1",mgrname:"manager1"},
  {ename:"employee_2",desig:"developer",mob:9371932347,email:"employee2@gmail.com",loc:"saharsa_2",mgrname:"manager2"},
  {ename:"employee_3",desig:"programmer",mob:8871931623,email:"employee3@gmail.com",loc:"saharsa_3",mgrname:"manager4"},
  {ename:"employee_4",desig:"developer",mob:9477771608,email:"employee4@gmail.com",loc:"saharsa_4",mgrname:"manager4"},
  {ename:"employee_5",desig:"programmer",mob:9471881611,email:"employee5@gmail.com",loc:"saharsa_5",mgrname:"manager3"},
  {ename:"employee_6",desig:"programmer",mob:9471931608,email:"employee6@gmail.com",loc:"saharsa_6",mgrname:"manager3"},
  {ename:"employee_7",desig:"designer",mob:9471931608,email:"employee7@gmail.com",loc:"saharsa_7",mgrname:"manager3"},
  {ename:"employee_8",desig:"designer",mob:9471931123,email:"employee8@gmail.com",loc:"saharsa_8",mgrname:"manager1"},
  {ename:"employee_9",desig:"developer",mob:9471931656,email:"employee9@gmail.com",loc:"saharsa_9",mgrname:"manager2"},
  {ename:"employee_10",desig:"designer",mob:9471931543,email:"employee10@gmail.com",loc:"saharsa_10",mgrname:"manager1"}
];
    
}