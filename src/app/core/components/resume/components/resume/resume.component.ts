import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
    standalone: false
})
export class ResumeComponent implements OnInit {

  public variable: string;
  
  constructor() { 
    this.variable='Resume';
  }


  ngOnInit(): void {
  }

}
