import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3an';
  user:string="Hello World";
  srce:string="assets/943350.png";
  Call(){
    this.srce="assets/935767.jpg"
  }
}

