import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductosService } from '../../servicios/productos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
})
export class CompraComponent implements OnInit {
  carrito = [];
  pedidoTotal = [];
  total = 0;
  nombreInput: string;
  apellidoInput: string;
  cedulaInput: string;
  direccionInput: string;
  telefonoInput: string;
  datosEnvio = {};
  persona: any[];

  constructor(private carritoService: CarritoService, private productosService: ProductosService, private router: Router) { }

  ngOnInit(): void {
    this.carrito = this.carritoService.numeroProductos;
    this.calcularTotal();
    this.productosService.obtenerPedidos()
    .subscribe(
      (pedidos: any[]) => {
        this.pedidoTotal = pedidos;
        this.productosService.setPedido(this.pedidoTotal);
      }
    );
    this.productosService.obtenerPersonas()
    .subscribe(
      (persona: any) => {
        this.persona = persona;
        this.productosService.setPersona(this.persona);
      }
    );
  }
  calcularTotal(){
    for(let i = 0; i < this.carrito.length; i++){
      this.total = this.total + (this.carrito[i].precio * this.carrito[i].cantidad);
    }
    this.carritoService.total = this.total;
  }

  onRealizarPedido(){
    this.pedidoTotal = this.carrito;
    let titulo: string;
    for(let i = 0; i < this.pedidoTotal.length ; i++){
      if (!titulo){
        titulo = this.pedidoTotal[i].titulo + ': ' + this.pedidoTotal[i].cantidad;
      }else{
        titulo = titulo + ', ' + this.pedidoTotal[i].titulo + ': ' + this.pedidoTotal[i].cantidad;
      }
    }
    this.datosEnvio = {
      productos: titulo,
      nombre: this.nombreInput,
      apellido: this.apellidoInput,
      cedula: this.cedulaInput,
      direccion: this.direccionInput,
      telefono: this.telefonoInput,
      total: this.total
    };
    this.productosService.enviarPedido(this.datosEnvio);
    this.router.navigate(['/']);
  }


}
