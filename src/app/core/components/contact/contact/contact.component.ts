import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public variable: string;
  
  constructor() { 
    this.variable='ContactMe';
  }

  ngOnInit(): void {
  }

}
