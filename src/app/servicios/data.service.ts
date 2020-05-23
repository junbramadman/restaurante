import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Productos } from '../modelo/productos';
import { ProductosService } from './productos.service';
import { Subscriber } from 'rxjs';
import Swal from 'sweetalert2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'firebase';


@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient) { }
    uploader: number = 0;
    url: any;

    cargarProductos(){
        return this.httpClient.get('https://restaurante-83087.firebaseio.com/productos.json');
    }
    guardarImagen(event){
      let url2: any;
      let archivo= event.target.files[0];
      let storageRef = firebase.storage().ref('mis_fotos/' + archivo.name);
      let subir= storageRef.put(archivo);
      let response = subir.on('state_changed', snapshot => {
        let porcentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.uploader = porcentage;
      }, error => {
        console.log(error);
      },
      () => {
          subir.snapshot.ref.getDownloadURL().then((url) => {
            this.url = url;
            console.log('Url ya tiene el valor: ' + this.url);
        });
      });
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
    guardarAlEliminarPedido(pedido: any[]) {
      this.httpClient.put('https://restaurante-83087.firebaseio.com/pedidos.json', pedido)
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
    eliminarPedido(index: number){
      let url: string;
      url = 'https://restaurante-83087.firebaseio.com' + '/pedidos/' + index + '.json';
      this.httpClient.delete( url)
          .subscribe(
              (response) => {
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Despachado con exito',
                  showConfirmButton: false,
                  timer: 1500
                });
              },
              (error) => {
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Error al despachar pedido',
                  showConfirmButton: false,
                  timer: 1500
                });
                console.log(error);
              }
          );
  }

    enviarPedido(pedido){
      this.httpClient.put('https://restaurante-83087.firebaseio.com/pedidos.json', pedido)
      .subscribe(
          (response) => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Pedido creado con exito, un agente nuestro se pondra en contacto',
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
    personaPedido(persona){
      this.httpClient.put('https://restaurante-83087.firebaseio.com/persona.json', persona)
      .subscribe(
          (response) => {
            console.log('Exito persona');
          },
          (error) => {
            console.log('error persona' +  error);
          }
      );
    }

    cargarPedidos(){
      return this.httpClient.get('https://restaurante-83087.firebaseio.com/pedidos.json');
    }

    cargarPersona(){
      return this.httpClient.get('https://restaurante-83087.firebaseio.com/persona.json');
    }

}