import { Component } from '@angular/core';
import { proyects } from '../../../../models/proyectos.model';

@Component({
  selector: 'app-projects-web',
  templateUrl: './projects-web.component.html',
  styleUrl: './projects-web.component.scss'
})
export class ProjectsWebComponent {

  menus: proyects []=[
    {
      id: '1',
      project: 'Marvel characteres',
      imagen: 'assets/OnlineStore.png',
      title: 'Online Web',
      descripcion: 'This Web was designed to get characteres'
    }
  ];

}
