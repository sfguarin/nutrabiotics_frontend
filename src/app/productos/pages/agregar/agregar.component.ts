import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';


import { Producto } from '../../interfaces/productos.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  // Opciones para el select
  monedas = [
    {
      id: 0,
      desc: 'COP'
    },
    {
      id: 1,
      desc: 'USD'
    },
    {
      id: 2,
      desc: 'CAD'
    }
  ];

  categorias = [
    {
      id: 'ACEITES ESENCIALES',
      desc: 'ACEITES ESENCIALES'
    },
    {
      id: 'ALIMENTO',
      desc: 'ALIMENTO'
    },
    {
      id: 'FITOTERAPÉUTICO',
      desc: 'FITOTERAPÉUTICO'
    },
    {
      id: 'MEDICAMENTO',
      desc: 'MEDICAMENTO'
    },
    {
      id: 'NUTRACÉUTICO',
      desc: 'NUTRACÉUTICO'
    },
    
  ]

  // Inicialización del producto
  producto: Producto = {
    precio: 0,
    moneda: '',
    nombre: '',
    categoria: '',
    presentacion:'',
    descripcion: '',
    img: ''
  }

  constructor( private productosService: ProductosService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               public dialog: MatDialog) { }

  ngOnInit(): void {

    if ( !this.router.url.includes('editar') ) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.productosService.getProductoPorId(id) )
      )
      .subscribe( producto => this.producto = producto );
  }

  guardar() {

    if( this.producto.nombre.trim().length === 0 ){
      return;
    }

    if( this.producto.img?.trim().length===0){
      this.producto.img = 'assets/undefined.jpeg';
    }
    
    //Para diferenciar si estoy guardando o actualizando
    if( this.producto._id ){
      //Actualizar
      this.productosService.actualizarProducto(this.producto)
        .subscribe( producto =>  {
          this.router.navigate(['/productos/listado']);
          this.mostrarSnackbar('Producto actualizado')
        })

    } else {
      //Crear
      this.productosService.agregarProducto(this.producto)
        .subscribe( producto => {
          //Mirar aca para redirigirlo al listado principal
          this.router.navigate(['/productos/listado']);
          this.mostrarSnackbar('Producto creado');
        } )
    }

  }

  borrarProducto() {


    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.producto
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if( result ){
          this.productosService.borrarProducto( this.producto._id! )
            .subscribe( resp => {
              this.router.navigate(['/productos']);
            })
        }
      }
    )

  }

  mostrarSnackbar( mensaje : string ) {

    this.snackBar.open( mensaje, 'Cerrar', {
      duration: 3000
    })

  }

}
