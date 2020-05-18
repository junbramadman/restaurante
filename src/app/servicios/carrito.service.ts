import { Injectable } from '@angular/core';
import { Productos } from '../modelo/productos';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  numeroProductos = [];
  total: number;
  constructor() { }

}
