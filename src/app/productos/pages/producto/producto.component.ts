import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {switchMap} from 'rxjs/operators'
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/productos.interface';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class ProductoComponent implements OnInit {

  producto!: Producto;

  //activación de ruta para llamar al backend
  constructor( private activatedRoute: ActivatedRoute,
               private productosService: ProductosService,
               private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.productosService.getProductoPorId(id))
    )
     .subscribe( producto => this.producto = producto );
  }

  regresar(){
    this.router.navigate(['/productos/listado']);
  }

}
