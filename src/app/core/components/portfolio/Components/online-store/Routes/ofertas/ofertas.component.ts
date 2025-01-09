import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ofertas',
    templateUrl: './ofertas.component.html',
    styleUrls: ['./ofertas.component.scss'],
    standalone: false
})
export class OfertasComponent implements OnInit {

  public confirmarQuitar: string;

  constructor() { 
    this.confirmarQuitar='si';
  }

  ngOnInit(): void {
  }

}
