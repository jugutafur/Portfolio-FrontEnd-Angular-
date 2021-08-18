import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit {

  public fotoPerfil: string;
  public fotoBrowser: string;
  public fotoGrid: string;

  constructor() {
    this.fotoPerfil='assets/projects/browser/fotoS.jpg';
    this.fotoBrowser='assets/projects/browser/google.jpg';
    this.fotoGrid='assets/projects/browser/gridGoogle.png';
  }

  ngOnInit(): void {
  }

}
