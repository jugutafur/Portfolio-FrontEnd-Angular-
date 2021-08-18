import { Component } from '@angular/core';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.scss']
})
export class TiendasComponent{

  public confirmarQuitar: string;

  constructor() { 
    this.confirmarQuitar='si';
  }

}
