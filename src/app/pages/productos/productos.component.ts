import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/modelo/productos';
import { ProductosService } from '../../servicios/productos.service';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
})
export class ProductosComponent implements OnInit {
  productos: Productos[] = [];
  carrito = [];
  cantidades = 0;
  contadorCarrito = 0;
  total = 0;
  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.productoService.obtenerProductos()
    .subscribe(
      (producto: Productos[]) => {
        this.productos = producto;
        this.productoService.setProducto(this.productos);
      }
    );
    this.productoService.getUrl();
  }

  agregarCarrito(index){
    if(this.carrito != null ){
      this.cantidades= this.cantidades +1;
      this.carrito.push(this.productos[index]);
      this.carrito[this.carrito.length-1].cantidad = 1;
      this.total = this.carrito[this.carrito.length-1].precio + this.total;
    }

  }
  agregarCantidad(index){
    this.cantidades= this.cantidades +1;
    for(let i = 0; i < this.carrito.length; i++){
      if(this.carrito[i].titulo === this.productos[index].titulo){
        this.carrito[i].cantidad = this.carrito[i].cantidad + 1;
        this.total = this.carrito[i].precio + this.total;
      }
    }

  }
  botonAgregar(i){
    let elemento1 = document.getElementById(i);
    let elemento2 = document.getElementById('c'+ i);
    elemento1.hidden =true;
    elemento2.hidden =false; 
  }


}
