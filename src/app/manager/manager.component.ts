import { Component } from '@angular/core';
import{DataService} from '../service/data.service';

@Component({
   templateUrl: './manager.component.html'
})

export class ManagerComponent
{
  isHide1:boolean=true; 
  isHide2:boolean=true; 
  isHide3:boolean=true;  
   
  constructor(private obj1:DataService){}
 
 
 fun1()
 {
  this.isHide1=!this.isHide1;
 }

 
 fun2()
 {
  this.isHide2=!this.isHide2;
 }

 
 fun3()
 {
  this.isHide3=!this.isHide3;
 }
    
}