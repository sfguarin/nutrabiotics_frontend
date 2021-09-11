import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/productos.interface';
import { ProductosService } from '../../services/productos.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  productos: Producto[] = [];
  productoSeleccionado: Producto | undefined;

  constructor( private productosService: ProductosService) { }

  ngOnInit(): void {
  }

  buscando(){

    //sugerencias de busqueda
    this.productosService.getSugerencias( this.termino.trim() )
      .subscribe( productos => this.productos = productos );

  }

  //datos de opción seleccionada en la busqueda
  opcionSeleccionada( event: MatAutocompleteSelectedEvent ){

    if(!event.option.value){
      this.productoSeleccionado = undefined;
      return;
    }

    const producto: Producto = event.option.value;
    this.termino = producto.nombre;

    this.productosService.getProductoPorId( producto._id! )
      .subscribe( producto => this.productoSeleccionado = producto )

  }

}
