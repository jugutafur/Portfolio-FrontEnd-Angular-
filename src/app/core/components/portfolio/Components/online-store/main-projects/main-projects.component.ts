import { Component, OnInit } from '@angular/core';
import { menu } from '../../../../../models/menus.model';

@Component({
  selector: 'app-mainProjects',
  templateUrl: './main-projects.component.html',
  styleUrls: ['./main-projects.component.scss']
})
export class MainProjectsComponent implements OnInit {

  public variable: String;
  public promo1: string;
  public papa: string;
  public mama: string;
  public bole: boolean;

  menus: menu []=[
    {
        id: '1',
        imagen: 'assets/projects/OnlineStore/1.jpg',
        title: 'RESTAURANTES',
        price: 45,
        descripcion: 'texto restaurantes'
    },
    {
        id: '2',
        imagen: 'assets/projects/OnlineStore/2.jpg',
        title: 'BELLEZA',
        price: 45,
        descripcion: 'texto Belleza' 
    },
    {
        id: '3',
        imagen: 'assets/projects/OnlineStore/3.jpg',
        title: 'TECNOLOGIAS',
        price: 45,
        descripcion: 'texto tecnologias' 
    },
    {
        id: '4',
        imagen: 'assets/projects/OnlineStore/4.jpg',
        title: 'DEPORTES',
        price: 45,
        descripcion: 'texto deportes' 
    }
  ];
  
  constructor() {

    this.promo1= 'assets/projects/OnlineStore/publicidad.jpg';
    this.papa= 'assets/projects/OnlineStore/papa.jpg';
    this.mama= 'assets/projects/OnlineStore/mama.jpg';
    this.variable= 'MAIN';
    this.bole= true;

  }

  ngOnInit(): void {
  }

}
