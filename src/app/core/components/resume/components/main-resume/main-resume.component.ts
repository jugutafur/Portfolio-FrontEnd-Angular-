import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-resume',
  templateUrl: './main-resume.component.html',
  styleUrls: ['./main-resume.component.scss']
})
export class MainResumeComponent implements OnInit {

  public imagenPrincipal: string;
  public imagenCertificado1: string;
  
  constructor() {
    // this.imagenCertificado1= 'assets/Certificado1.jpg';
    this.imagenCertificado1= 'assets/Certificado1.png';
    this.imagenPrincipal='assets/Principal.jpg';
  }

  ngOnInit(): void {
  }

}
