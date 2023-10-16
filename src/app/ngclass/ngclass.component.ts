import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent {
  mycls="rec square";
  mycls1=false

  checks:boolean=false
  ApplyClass(){
    let clas ={
      cls:true,
      clss:true,
      
    }
    return clas;
  }
  applyclass(){
    let clse={
      'background-color': "black"
    }
    return clse;
  }
}

