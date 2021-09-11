//Importación de componentes
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { HomeComponent } from './pages/home/home.component';

//Rutas de comunicación para las diferentes acciones
const routes: Routes = [
  {
    path: '',
    //ruta padre
    component: HomeComponent,
    //rutas hijas
    children: [

      { path: 'listado', component: ListadoComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'editar/:id', component: AgregarComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: ':id', component: ProductoComponent },
      { path: '**', redirectTo: 'listado' } 

    ]
  }
]

//Importación y exportación de componentes
@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class ProductosRoutingModule { }
