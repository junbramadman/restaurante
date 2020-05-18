import { Injectable } from '@angular/core';
import { Productos } from '../modelo/productos';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  numeroProductos = 0;
  constructor() { }

  agregar(numero){
    this.numeroProductos = this.numeroProductos + 1;
    numero=this.numeroProductos;
  }
}
