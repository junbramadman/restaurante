import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
})
export class CompraComponent implements OnInit {
  carrito = [];
  total = 0;
  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.carrito = this.carritoService.numeroProductos;
    console.log(this.carrito);
    this.calcularTotal();
  }
  calcularTotal(){
    for(let i = 0; i < this.carrito.length; i++){
      this.total = this.total + (this.carrito[i].precio * this.carrito[i].cantidad);
    }
    this.carritoService.total = this.total;
  }

}
