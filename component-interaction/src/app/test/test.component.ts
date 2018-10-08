import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{"Hello " + name}}</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  //@Input() public parentData;
  @Input('parentData') public name;   // Data from Parent Component to Child

  @Output() public childEvent = new EventEmitter();  // Custom Event to send data to Parent

  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit("Hey Codevolution");
  }

}
