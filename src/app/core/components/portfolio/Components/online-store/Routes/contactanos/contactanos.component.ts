import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnInit {

  public confirmarQuitar: string;

  constructor() { 
    this.confirmarQuitar='si';
  }

  ngOnInit(): void {
  }

}
