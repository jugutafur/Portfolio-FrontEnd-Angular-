import { NgModule } from '@angular/core';

import { BannerProjectsComponent } from './BannerProjects/BannerProjects.component';
import { footerProjectsComponent } from './footerProjects/footerProjects.component';
import { MainProjectsComponent } from './main-projects/main-projects.component';
import { OnlineStoreComponent } from './online-store/online-store.component';

import { CommonModule } from '@angular/common';
import { OnlineStoreRoutingModule } from './online-store-routing.module';

@NgModule({
    declarations:[
        BannerProjectsComponent,
        footerProjectsComponent,
        MainProjectsComponent,
        OnlineStoreComponent
    ],
    imports:[
        CommonModule,
        OnlineStoreRoutingModule
    ],
    exports:[]
})

export class OnlineStoreModule { }