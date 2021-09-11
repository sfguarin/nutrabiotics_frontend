import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/productos.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  
  // Opciones para el select
  datos = [
    {
      id: '10',
      desc: '10'
    },
    {
      id: '50',
      desc: '50'
    },
    {
      id: '100',
      desc: '100'
    }
  ];
  
  opcionSeleccionado: string = '10';
  verSeleccion: string = '10';


  productos: Producto[] = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {

    this.productosService.getProductos(this.verSeleccion)
    .subscribe( productos => this.productos = productos);
  }

  //datos de opción seleccionada en la busqueda
  cambio( ){

    this.verSeleccion = this.opcionSeleccionado;

    //Ya se esta capturando cambio
    this.productosService.getProductos(this.verSeleccion)
      .subscribe( productos => {
        this.productos = productos;
      });

  }

}
