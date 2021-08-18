import { NgModule } from '@angular/core';
import { ResumeRoutingModule } from './Resume-routing.module';
import { CommonModule } from '@angular/common';

// components
import { MainResumeComponent } from './components/main-resume/main-resume.component';
import { ResumeComponent } from './components/resume/resume.component';

@NgModule ({
    declarations:[
        MainResumeComponent,
        ResumeComponent
    ],
    imports:[
        ResumeRoutingModule,
        CommonModule
    ],
    providers:[],
    bootstrap:[]

})

export class ResumeModule { }