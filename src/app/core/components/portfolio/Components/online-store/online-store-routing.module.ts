import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlineStoreComponent } from './online-store/online-store.component';

import { CategoriasComponent } from './Routes/categorias/categorias.component';
import { TiendasComponent } from './Routes/tiendas/tiendas.component';
import { OfertasComponent } from './Routes/ofertas/ofertas.component';
import { ContactanosComponent } from './Routes/contactanos/contactanos.component';
import { MiCuentaComponent } from './Routes/mi-cuenta/mi-cuenta.component';

const routes : Routes = [
    {
        path:'',
        redirectTo: 'INICIO',
        pathMatch: 'full'
    },
    {
        path:'INICIO',
        component: OnlineStoreComponent
    },
    {
        path: 'CATEGORIAS',
        component: CategoriasComponent
    },
    {
        path: 'TIENDAS',
        component: TiendasComponent
    },
    {
        path: 'OFERTAS',
        component: OfertasComponent
    },
    {
        path: 'CONTACTANOS',
        component: ContactanosComponent
    },
    {
        path: 'MICUENTA',
        component: MiCuentaComponent
    },
]

@NgModule({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})

export class OnlineStoreRoutingModule { } 