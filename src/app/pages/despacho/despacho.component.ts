import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-despacho',
  templateUrl: './despacho.component.html',
})
export class DespachoComponent implements OnInit {
  pedidos: any[];
  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.productoService.obtenerPedidos()
    .subscribe(
      (pedidos: any) => {
        this.pedidos = pedidos;
        this.productoService.setPedido(this.pedidos);
      }
    );
  }
  onDespachar(index: number){
    this.productoService.Despachar(index);
  }

}
