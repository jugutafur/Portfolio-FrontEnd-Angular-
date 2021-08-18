import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  today = new Date();
  public imagen: string;
  public variable: string;

  paginas=['Home', 'Portfolio', 'Resume','Contact'] ;

  constructor() { 
    this.variable= 'desde banner';
  }

  ngOnInit(): void {
  }

}
