//Module general de Productos

//Importación de componentes 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ProductosRoutingModule } from './productos-routing.module';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductoTarjetaComponent } from './components/producto-tarjeta/producto-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';


//Rutas hijas o componentes que voy a vincular
@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    ProductoComponent,
    HomeComponent,
    ListadoComponent,
    ProductoTarjetaComponent,
    ImagenPipe,
    ConfirmarComponent
  ],
  //Importación de componentes
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
