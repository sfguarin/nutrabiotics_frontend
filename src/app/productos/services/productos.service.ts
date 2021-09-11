import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/productos.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  getProductos(limite: string ){
    return this.http.get<Producto[]>(`${ this.baseUrl }/api/productos?limite=${limite}&desde=0`)
  }

  getProductoPorId( id: string ){
    return this.http.get<Producto>(`${ this.baseUrl }/api/productos/${ id }`);
  }

  getSugerencias( termino: string ){

    return this.http.get<Producto[]>(`${ this.baseUrl }/api/buscar/productos/${termino}`)

  }

  agregarProducto( producto: Producto ) {
    return this.http.post<Producto>(`${ this.baseUrl }/api/productos`, producto);
  }

  actualizarProducto( producto: Producto ) {
    return this.http.put<Producto>(`${ this.baseUrl }/api/productos/${producto._id}`, producto);
  }

  borrarProducto( id: string ) {
    return this.http.delete<any>(`${ this.baseUrl }/api/productos/${id}`);
  }

}
