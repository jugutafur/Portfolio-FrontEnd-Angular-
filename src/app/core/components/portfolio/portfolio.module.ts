import { NgModule } from '@angular/core';

import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { ProjectsWebComponent } from './Components/projects-web/projects-web.component';
import { BrowserComponent } from './Components/browser/browser.component';
import { CalculatorComponent } from './Components/calculator/calculator.component';
import { DrawCssComponent } from './Components/draw-css/draw-css.component';
import { GaleyImagesComponent } from './Components/galey-images/galey-images.component';
import { MathFunctionsComponent } from './Components/math-functions/math-functions.component';
import { MobileFirstComponent } from './Components/mobile-first/mobile-first.component';


import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { OnlineStoreModule } from './Components/online-store/online-store.module';


@NgModule({
    declarations:[
        BrowserComponent,
        PortfolioComponent,
        CalculatorComponent,
        DrawCssComponent,
        GaleyImagesComponent,
        MathFunctionsComponent,
        MobileFirstComponent,
        ProjectsWebComponent
    ],
    imports:[
        CommonModule,
        PortfolioRoutingModule,
        OnlineStoreModule
    ],
    exports:[]
})

export class portfolioModule { }
