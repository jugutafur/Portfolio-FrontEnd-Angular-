import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './Home-routing.module';
import { CommonModule } from '@angular/common';


import { MainHomeComponent } from './componentes/main-home/main-home.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule ({
    declarations:[
        MainHomeComponent,
        HomeComponent
    ],
    imports:[
        HomeRoutingModule,
        CommonModule
    ],
    providers:[],
    bootstrap:[]

})

export class HomeModule {

}