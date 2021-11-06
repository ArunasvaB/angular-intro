import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'seg3102-lab1';
  value1: any;
  value2: any;
  result: any;

  add() {
    this.result = this.value1 + this.value2
  }


  minus() {
     this.result = this.value1 - this.value2
  }

  multiply() {
     this.result = this.value1 * this.value2
  }

  divide() {
     this.result = this.value1/this.value2
  }
}
