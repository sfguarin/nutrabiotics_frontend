
//Sistema de ruta principal

//Impotación de componentes que necesito 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { ProductosModule } from './productos/productos.module';

const routes: Routes = [
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosModule )
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: 'productos'
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot( routes, {
      useHash: true
    } )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
