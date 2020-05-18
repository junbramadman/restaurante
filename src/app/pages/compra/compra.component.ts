import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductosService } from '../../servicios/productos.service';
@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
})
export class CompraComponent implements OnInit {
  carrito = [];
  pedidoTotal = [];
  total = 0;
  constructor(private carritoService: CarritoService, private productosService: ProductosService) { }

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
  }
  calcularTotal(){
    for(let i = 0; i < this.carrito.length; i++){
      this.total = this.total + (this.carrito[i].precio * this.carrito[i].cantidad);
    }
    this.carritoService.total = this.total;
  }

  onRealizarPedido(){
    this.pedidoTotal = this.carrito;
    this.pedidoTotal.push(this.total);
    this.productosService.enviarPedido(this.pedidoTotal);
  }

}
