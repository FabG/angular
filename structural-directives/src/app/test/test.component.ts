import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>Codevolution (thenBlock)</h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>Hidden (elseBlock)</h2>
    </ng-template>

  `,
  styles: []
})
export class TestComponent implements OnInit {

  public displayName=false;
  constructor() { }

  ngOnInit() {
  }

}
