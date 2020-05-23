import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
})
export class PromocionesComponent implements OnInit {
  promos: any[] = [];
  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.obtenerPromos()
    .subscribe(
      (promo: any[]) => {
        this.promos = promo;
        this.productosService.setPromo(this.promos);
      }
    );
  }

}
