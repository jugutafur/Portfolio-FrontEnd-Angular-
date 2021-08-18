import { NgModule } from '@angular/core';

import { ContactComponent } from './contact/contact.component';

import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule ({
    declarations:[
        ContactComponent,
    ],
    imports:[
        ContactRoutingModule,
        CommonModule
    ],
    providers:[],
    bootstrap:[]

})

export class ContactModule { }