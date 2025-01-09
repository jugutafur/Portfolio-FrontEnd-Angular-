import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mi-cuenta',
    templateUrl: './mi-cuenta.component.html',
    styleUrls: ['./mi-cuenta.component.scss'],
    standalone: false
})
export class MiCuentaComponent implements OnInit {

  public confirmarQuitar: string;

  constructor() { 
    this.confirmarQuitar='si';
  }

  ngOnInit(): void {
  }

}
