import { Injectable } from '@angular/core';
import { Productos } from '../modelo/productos';
import { DataService } from './data.service';
import Swal from 'sweetalert2';

@Injectable()
export class ProductosService {
  producto: Productos[] = [];

  constructor(private dataService: DataService){}

  setProducto(producto: Productos[]){
    this.producto = producto;
  }

  agregarProducto(producto: Productos){
    let confirmacion= false;
    if (this.producto == null){
          this.producto = [];
      }
    this.producto.push(producto);
    confirmacion = this.dataService.guardarProducto(this.producto);
    console.log(confirmacion);
    if (confirmacion === true){

    }


  }


  obtenerProductos(){
    return this.dataService.cargarProductos();
  }

  editarProducto(index: number, producto: Productos){
    let producto1 = this.producto[index];
    producto1.titulo = producto.titulo;
    producto1.descripcion = producto.descripcion;
    producto1.precio = producto.precio;
    this.dataService.editarProducto(index, producto1);

  }
  actualizarTabla(){
    if(this.producto != null) {
      this.dataService.guardarAlEliminar(this.producto);
    }
  }

  encontrarProducto(index: number){
    let producto: Productos = this.producto[index];
    return producto;
  }

  eliminarProducto(index:number){
    this.producto.splice(index,1);
    this.dataService.eliminarProducto(index);
    this.actualizarTabla();
  }
}
