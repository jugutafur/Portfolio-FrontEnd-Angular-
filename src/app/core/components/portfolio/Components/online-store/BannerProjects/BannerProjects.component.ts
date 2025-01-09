import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-BannerProjects',
    templateUrl: './BannerProjects.component.html',
    styleUrls: ['./BannerProjects.component.scss'],
    standalone: false
})
export class BannerProjectsComponent implements OnInit {

  public varible: String;
  public imagenLogo: String;
  today = new Date();
  
  @Input() quitarBanner: string;

  public imagenes: string[] = [
      'assets/projects/OnlineStore/promo1.jpg',
      'assets/projects/OnlineStore/promo2.jpg',
      'assets/projects/OnlineStore/promo3.jpg',
  ];

  paginas=['INICIO', 'CATEGORIAS', 'TIENDAS', 'OFERTAS','CONTACTANOS','MICUENTA'] ;
  
  constructor() {
    this.varible= 'BANNER';
    this.imagenLogo= 'assets/projects/OnlineStore/logoTienda.png';
    // this.quitarBanner='no';
  }


  ngOnInit(): void {
  }

}
