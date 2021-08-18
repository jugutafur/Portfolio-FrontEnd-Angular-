import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'Home',
                pathMatch: 'full',
            },
            {
                path: 'Home',
                loadChildren: ()=> import('./core/components/home/Home.module').then(m =>m.HomeModule)
            },
            {
                path: 'Portfolio',
                loadChildren: () => import ('./core/components/portfolio/portfolio.module').then(m => m.portfolioModule)
            },
            {
                path: 'Resume',
                // component: ResumeComponent
                loadChildren: ()=> import('./core/components/resume/Resume.module').then(m =>m.ResumeModule)
            },
            {
                path: 'Contact',
                loadChildren: () => import('./core/components/contact/contact.module').then(m => m.ContactModule)
            },
        

            // // Routes of onlineStore Pages
        
            // {
            //     path: 'INICIO',
            //     component: OnlineStoreComponent
            // },
            // {
            //     path: 'CATEGORIAS',
            //     component: CategoriasComponent  
            // },
            // {
            //     path: 'CATEGORIAS/:id',
            //     component: DetailsComponent  
            // },
            // {
            //     path: 'TIENDAS',
            //     component: TiendasComponent
            // },
            // {
            //     path: 'OFERTAS',
            //     component: OfertasComponent
            // },
            // {
            //     path: 'CONTACTANOS',
            //     component: ContactanosComponent
            // },
            // {
            //     path: 'MICUENTA',
            //     component: MiCuentaComponent
            // }
            // {
            //     path: '**',
            //     component: HomeComponent
            // },

        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
