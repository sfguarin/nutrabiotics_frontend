import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/productos.interface';
import { error } from '@angular/compiler/src/util';

@Pipe({
  name: 'imagen',
  pure: false
})
export class ImagenPipe implements PipeTransform {

  //Mandar objeto por separado
  transform(producto: Producto): string {


    //Para cuando se esta creando el producto
    if( (!producto._id && !producto.img)  ) {
      return 'assets/undefined.jpeg';
    } else if (producto.img){
      return producto.img;
    } else {   
      return `assets/imagenes/${producto._id}.jpeg`;
    }

  }

}
