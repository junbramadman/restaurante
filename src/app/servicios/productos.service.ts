import { Injectable } from '@angular/core';
import { Productos } from '../modelo/productos';
import { DataService } from './data.service';
import Swal from 'sweetalert2';

@Injectable()
export class ProductosService {
  producto: Productos[] = [];
  pedido: any[] = [];
  persona: any[] = [];
  url: string;

  constructor(private dataService: DataService){
    this.dataService.cargarPedidos();
  }

  setProducto(producto: Productos[]){
    this.producto = producto;
  }

  setPersona(persona: any[]){
    this.persona = persona;
  }
  setPedido(pedido: any[]){
    this.pedido = pedido;
  }

  agregarProducto(producto: Productos){
    if (this.producto == null){
          this.producto = [];
      }
    this.producto.push(producto);
    this.dataService.guardarProducto(this.producto);
  }

  agregarImagen = async (event) =>{
    let call = await this.dataService.guardarImagen(event);
    this.url = this.dataService.url;
    console.log('desde productos: ' + this.url);
  }
  getUrl(){
    return this.dataService.url;
  }


  obtenerProductos(){
    return this.dataService.cargarProductos();
  }

  editarProducto(index: number, producto: Productos){
    let producto1 = this.producto[index];
    producto1.titulo = producto.titulo;
    producto1.descripcion = producto.descripcion;
    producto1.precio = producto.precio;
    producto1.url = producto.url;
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

  obtenerPedidos(){
    return this.dataService.cargarPedidos();
  }
  obtenerPersonas(){
    return this.dataService.cargarPersona();
  }
  enviarPedido(pedido: any){
    if (this.pedido == null){
      this.pedido = [];
    }
    this.pedido.push(pedido);
    this.dataService.enviarPedido(this.pedido);
  }
  Despachar(index:number){
    this.pedido.splice(index, 1);
    this.dataService.eliminarPedido(index);
    this.actualizarTablaPedidos();
  }
  actualizarTablaPedidos(){
    if(this.pedido != null) {
      this.dataService.guardarAlEliminarPedido(this.pedido);
    }
  }
}
