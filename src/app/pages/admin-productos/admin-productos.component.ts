import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProductosService } from '../../servicios/productos.service';
import { Productos } from 'src/app/modelo/productos';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
})
export class AdminProductosComponent implements OnInit {
  // // listaProductos: Productos[];
  // // constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
  }

  // // crearProducto(productoForm: NgForm){
  // //   //this.productoService.getProductos();
  // //   if (productoForm.value.$idRegistro == null){
  // //     this.productoService.insertProductos(productoForm.value);
  // //     Swal.fire({
  // //       position: 'top-end',
  // //       icon: 'success',
  // //       title: 'creado con exito',
  // //       showConfirmButton: false,
  // //       timer: 1500
  // //     });
  // //   } else {
  // //     this.productoService.editarProducto(productoForm.value);
  // //     Swal.fire({
  // //       position: 'top-end',
  // //       icon: 'success',
  // //       title: 'Modificado con exito',
  // //       showConfirmButton: false,
  // //       timer: 1500
  // //     });
  // //   }
  // }

}
