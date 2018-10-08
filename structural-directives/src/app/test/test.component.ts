import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

  <div align="left" *ngFor="let color of colors; index as i; first as f; last as l; odd as o">
    <h2>index={{i}} first={{f}} last={{l}} odd={{o}} color={{color}}</h2>
  </div>

  `,
  styles: []
})
export class TestComponent implements OnInit {

  public colors= ["red","blue","green","yellow"];
  constructor() { }

  ngOnInit() {
  }

}
