import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './Components/portfolio/portfolio.component';


import { BrowserComponent } from './Components/browser/browser.component';
import { CalculatorComponent } from './Components/calculator/calculator.component';
import { DrawCssComponent } from './Components/draw-css/draw-css.component';
import { GaleyImagesComponent } from './Components/galey-images/galey-images.component';
import { MathFunctionsComponent } from './Components/math-functions/math-functions.component';
import { MobileFirstComponent } from './Components/mobile-first/mobile-first.component';
// import { OnlineStoreComponent } from './Components/online-store/online-store/online-store.component';

const routes : Routes = [
    {
        path:'',
        component: PortfolioComponent
    },
    {
        path: 'Browser',
        component: BrowserComponent
    },
    {
        path: 'Calculator',
        component: CalculatorComponent
    },
    {
        path: 'DrawCss',
        component: DrawCssComponent
    },
    {
        path: 'GaleyImages',
        component: GaleyImagesComponent
    },
    {
        path: 'mathFunctions',
        component: MathFunctionsComponent
    },
    {
        path: 'Browser',
        component: BrowserComponent
    },
    {
        path: 'MobileFirst',
        component: MobileFirstComponent
    },
    {
        path: 'OnlineStore',
        loadChildren: () => import('./Components/online-store/online-store.module').then(m =>m.OnlineStoreModule)
    }
]

@NgModule({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})

export class PortfolioRoutingModule { }
