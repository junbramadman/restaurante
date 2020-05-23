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
  btnPromo: boolean;
  url: string;
  barra: boolean = true;
  imagen: string;
  tituloPromocionInput: string;
  indexInputPromo: number;
  promos: any[] = [];

  constructor(private productoService: ProductosService,
              private router: Router,
              private route: ActivatedRoute ){}

  ngOnInit() {
    this.btnAgregar = true;
    this.btnPromo = true;
    this.productoService.obtenerProductos()
    .subscribe(
      (producto: Productos[]) => {
        this.productos = producto;
        this.productoService.setProducto(this.productos);
      }
    );
    this.productoService.obtenerPromos()
    .subscribe(
      (promos: any[]) => {
        this.promos = promos;
        this.productoService.setPromo(this.promos);
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
  funcionBotonesPromo(i: number){
    this.btnPromo = false;

    let promo = this.productoService.encontrarPromo(i);
    this.indexInputPromo = i;
    this.tituloPromocionInput = promo.titulo;
  }

  onEliminarProducto(index: number){
    this.productoService.eliminarProducto(index);
  }

  onCrearPromo(){
    if (this.tituloPromocionInput != null){
      let urlPromo = this.productoService.getUrl();
      let arrayPromo = {
        titulo: this.tituloPromocionInput,
        url: urlPromo
      };
      this.productoService.agregarPromo(arrayPromo);
    }
  }

  onEditarPromo(i){
    let arrayPromo = {
      titulo: this.tituloPromocionInput,
      url: this.productoService.getUrl()
    };
    this.productoService.editarPromo( i, arrayPromo );
    this.btnPromo = true;
  }
  onEliminarPromo(i){
    this.productoService.eliminarPromo(i);
  }

}
