import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    standalone: false
})
export class LayoutComponent implements OnInit {

  public variable: string;
  constructor() {
    this.variable='Layout Principal';
   }

  ngOnInit(): void {
  }

}
