import { Component } from '@angular/core';
import { proyects } from '../../../../models/proyectos.model'

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    standalone: false
})
export class PortfolioComponent{

  // public quitarBanner: string;

  menus: proyects []=[
    {
        id: '1',
        project: 'OnlineStore',
        imagen: 'assets/OnlineStore.png',
        title: 'Online Store',
        descripcion: 'texto restaurantes'
    },
    {
        id: '2',
        project: 'Calculator',
        imagen: 'assets/projects/OnlineStore/Calculator.jpg',
        title: 'Calculator',
        descripcion: 'texto Belleza'
    },
    {
        id: '3',
        project: 'DrawCss',
        imagen: 'assets/projects/DrawCss/Bob.PNG',
        title: 'Draw with CSS',
        descripcion: 'texto tecnologias'
    },
    {
        id: '4',
        project: 'GaleyImages',
        imagen: 'assets/projects/OnlineStore/galery.jpg',
        title: 'Galery Imagens',
        descripcion: 'texto deportes'
    },
    {
      id: '5',
      project: 'mathFunctions',
      imagen: 'assets/projects/OnlineStore/functionsMath.jpg',
      title: 'math Functions',
      descripcion: 'texto deportes'
    },
    {
      id: '6',
      project: 'Browser',
      imagen: 'assets/browser.PNG',
      title: 'Browser',
      descripcion: 'texto Browser'
    },
    {
      id: '7',
      project: 'MobileFirst',
      imagen: 'assets/projects/MobileFirst/MobileFirst.PNG',
      title: 'Mobile first',
      descripcion: 'texto Mobile first'
    },
    {
      id: '8',
      project: 'Projects Web',
      imagen: 'assets/projectsWeb.jpg',
      title: 'Online Store',
      descripcion: 'texto projects web'
  }
];

}
