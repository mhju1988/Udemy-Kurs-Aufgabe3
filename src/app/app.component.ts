import { Component } from '@angular/core';
import {Timestamp} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`.mytext {
    color: white;
  }
  `]
})
export class AppComponent {
  display = false;
  hide = false;
  title = 'Aufgabe3';
  logs:Date[]=[];
  counter = 0;

  time: Date= new Date();

  isTheButtonClicked() {
    this.counter++;
    this.time = new Date();
    this.logs.push(this.time);
    this.display =true;
  }

  hideTheDetails() {
    this.logs.pop();
    this.display =false;
    if(this.counter > 0){
      this.counter--;
    }
  }
  // getColor(){
  //   return this.counter % 2 === 0 ? 'green' : 'red';
  // }


}
