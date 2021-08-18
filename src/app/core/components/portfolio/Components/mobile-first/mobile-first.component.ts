import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-first',
  templateUrl: './mobile-first.component.html',
  styleUrls: ['./mobile-first.component.scss']
})
export class MobileFirstComponent implements OnInit {

  public cambio: string;
  public logo: string;
  prueba='../../../../assets/projects/MobileFirst/Vector.svg';

  constructor() {
    this.logo='./assets/imgs/logo.svg';
    this.cambio='Mobile';
  }

  Mobile(){
    console.log('Mobile');
    this.cambio='Mobile';
    console.log(this.cambio);
  }

  Web(){
    console.log('Web');
    this.cambio='Web';
    console.log(this.cambio);
  }

  ngOnInit(): void {
  }

}
