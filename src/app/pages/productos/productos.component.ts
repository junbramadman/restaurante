import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/modelo/productos';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
})
export class ProductosComponent implements OnInit {
  productos: Productos[] = [];
  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.productoService.obtenerProductos()
    .subscribe(
      (producto: Productos[]) => {
        //Cargamos los datos de la base de datos al arreglo de personas local 
        this.productos = producto;
        this.productoService.setProducto(this.productos);
        console.log("obtener productos suscriber:" + this.productos);
      }
    );
  }

}
