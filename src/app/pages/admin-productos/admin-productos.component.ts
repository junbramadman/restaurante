import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProductosService } from '../../servicios/productos.service';
import { Productos } from 'src/app/modelo/productos';
import { NgForm, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
})
export class AdminProductosComponent implements OnInit {

  tituloInput: string;
  descripcionInput: string;
  precioInput: number;
  indexInput: number;
  productos: Productos[] = [];
  btnAgregar: boolean;
  url: string;
  barra: boolean = true;
  imagen: string;

  constructor(private productoService: ProductosService,
              private router: Router,
              private route: ActivatedRoute ){}

  ngOnInit() {
    this.btnAgregar = true;
    this.productoService.obtenerProductos()
    .subscribe(
      (producto: Productos[]) => {
        this.productos = producto;
        this.productoService.setProducto(this.productos);
      }
    );
  }
  onGuardarImagen(event){
    this.imagen = event.target.files[0].name;
    this.productoService.agregarImagen(event);
    this.barra = false;
  }

  onGuardarProducto(){
    if (this.tituloInput != null && this.descripcionInput != null && this.precioInput != null){
      let producto1: Productos = new Productos(this.tituloInput, this.descripcionInput, this.precioInput, this.productoService.getUrl());
      this.productoService.agregarProducto(producto1);
    }

  }

  onEditarProducto(i: number){
    let producto1: Productos = new Productos(this.tituloInput, this.descripcionInput, this.precioInput, this.productoService.getUrl());
    this.productoService.editarProducto( i, producto1 );
    this.btnAgregar = true;
  }

  funcionBotones(i: number){
    this.btnAgregar = false;

    let producto = this.productoService.encontrarProducto(i);
    this.indexInput = i;
    this.tituloInput = producto.titulo;
    this.descripcionInput = producto.descripcion;
    this.precioInput = producto.precio;
  }

  onEliminarProducto(index: number){
    this.productoService.eliminarProducto(index);
  }


}
