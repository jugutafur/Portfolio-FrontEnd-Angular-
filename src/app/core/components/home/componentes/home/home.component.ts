import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public variable: string;
  public imagen: string;
  
  constructor() { 
    this.imagen='assets/webDeveloper.jpg';
    this.variable='Home';
  }

  ngOnInit(): void {
  }

}
