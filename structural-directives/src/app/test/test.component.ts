import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You Picked red color</div>
    <div *ngSwitchCase="'blue'">You Picked blue color</div>
    <div *ngSwitchCase="'green'">You Picked green color</div>
    <div *ngSwitchDefault>Pick Again</div>
  </div>

  `,
  styles: []
})
export class TestComponent implements OnInit {

  public color="orange";
  constructor() { }

  ngOnInit() {
  }

}
