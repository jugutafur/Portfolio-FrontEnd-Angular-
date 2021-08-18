import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ContactModule } from './components/contact/contact.module';
import { HomeModule } from './components/home/Home.module';
import { portfolioModule } from './components/portfolio/portfolio.module';
import { ResumeModule } from './components/resume/Resume.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactModule,
    HomeModule,
    portfolioModule,
    ResumeModule,
  ]
})
export class CoreModule { }
