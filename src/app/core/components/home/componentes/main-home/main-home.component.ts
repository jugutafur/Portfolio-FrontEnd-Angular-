import { Component, OnInit } from '@angular/core';
import { modelo } from './tecnologias.mode';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

  tecnologias: modelo[]= [
    {
      imagen: 'assets/html.png',
      title: 'FrontEnd',
      parrafo: 'Implementacion de HTML5, CC3, Grid Layout, Responsive Web Desing, Angular, Software de Diseño: Figma, Scketch'
    },
    {
      imagen: 'assets/java.png',
      title: 'BackEnd',
      parrafo: 'Programacion en JAVA, Entornos de Desarrollo: Eclipse, Netbeans, Editores de Codigo: VSCode, Brackets, sublime Text'
    },
    {
      imagen: 'assets/sql.jpg',
      title: 'BD',
      parrafo: 'Administracion de BD mySql, sqlServe'
    },
    {
      imagen: 'assets/matlab.png',
      title: 'Mathematical logic',
      parrafo: 'Implementacion de Control de versiones: GitHub,  implementado Scrum y Jira'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
