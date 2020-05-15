import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Productos } from '../modelo/productos';
import { ProductosService } from './productos.service';
import { Subscriber } from 'rxjs';
import Swal from 'sweetalert2';


@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient) { }

    cargarProductos(){
        return this.httpClient.get('https://restaurante-83087.firebaseio.com/productos.json');
    }

    guardarProducto(producto: Productos[]) {
      this.httpClient.put('https://restaurante-83087.firebaseio.com/productos.json', producto)
            .subscribe(
                (response) => {
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'creado con exito',
                    showConfirmButton: false,
                    timer: 1500
                  });
                },
                (error) => {
                  Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Erro al crear el producto con exito',
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
            );
    }

    guardarAlEliminar(producto: Productos[]) {
      this.httpClient.put('https://restaurante-83087.firebaseio.com/productos.json', producto)
            .subscribe(
                (response) => {}
            );
    }


    editarProducto(index:number, producto: Productos){
        let url: string;
        url = 'https://restaurante-83087.firebaseio.com' + '/productos/' + index + '.json';
        this.httpClient.put( url, producto)
            .subscribe(
                (response) => {
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Editado con exito',
                    showConfirmButton: false,
                    timer: 1500
                  });
                },
                (error) => {
                  Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Error al editar',
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
            );
    }

    eliminarProducto(index: number){
        let url: string;
        url = 'https://restaurante-83087.firebaseio.com' + '/productos/' + index + '.json';
        this.httpClient.delete( url)
            .subscribe(
                (response) => {
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Eliminado con exito',
                    showConfirmButton: false,
                    timer: 1500
                  });
                },
                (error) => {
                  Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Error al eliminar',
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
            );
    }

}