import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <input [id]="myId" type="text" value="Fabrice">
    <input [disabled]=isDisabled id="{{myId}}" type="text" value="Fabrice">

  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Fabrice";
  public myId = "testId";
  public isDisabled = false;
  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.name;
  }

}
