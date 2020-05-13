import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Productos } from '../modelo/productos';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  // servicio para crear, editar y borrar productos
  // aun en trabajo, varios errores
  
  
  // selectedProducto: Productos = new Productos();
  // listaProductos: AngularFireList<any>;


  // constructor(private firebase = AngularFireDatabase) { }

  // // getProductos(){
  // //   return this.listaProductos = this.firebase.list('productos');
  // // }


  // insertProductos(producto: Productos){
  //   this.listaProductos.push({
  //     titulo: producto.titulo,
  //     descripcion: producto.descripcion,
  //     precio: producto.precio
  //   });
  // }

  // editarProducto(producto: Productos){
  //   this.listaProductos.update(producto.$idRegistro, {
  //     titulo: producto.titulo,
  //     descripcion: producto.descripcion,
  //     precio: producto.precio
  //   });
  // }

  // borrarProducto($idRegistro: string){
  //   this.listaProductos.remove($idRegistro);
  // }
}
