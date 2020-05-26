import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  autenticado: boolean;
  usuario: any[] = [];
  userId: string;
  rol: boolean;
  constructor(private router: Router, private http: HttpClient){}


  setUsuario(usuario: any[]){
    this.usuario = usuario;
  }

  login(email: string, password: string, usuario: any[]){
    firebase.auth().signInWithEmailAndPassword(email, password).
    then(reponse => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.userId = user.email;
          this.autenticado = true;
          this.verificacionRol(usuario);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Logueado con exito',
            showConfirmButton: false,
            timer: 1700
          });
          this.router.navigate(['/']);

        } else {

        }
      });
    });
  }

  verificacionRol(usuario){
    if (this.userId){
      for(let i = 0; i < usuario.length ;  i++){
        if(this.userId === usuario[i].correo){
          this.rol = usuario[i].isAdmin;
        }
      }
    }
  }

  agregarUsuario(usuario: any[], password){
    firebase.auth().createUserWithEmailAndPassword(usuario[usuario.length - 1].correo, password).then
    (() => {
      this.http.put('https://restaurante-83087.firebaseio.com/usuarios.json', usuario)
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
    }, function (error){
      console.log(error);
    });
  }
  cargarUsuarios(){
    return this.http.get('https://restaurante-83087.firebaseio.com/usuarios.json');
  }

  guardarAlEliminar(usuario: any[]) {
    this.http.put('https://restaurante-83087.firebaseio.com/usuarios.json', usuario)
          .subscribe(
              (response) => {}
          );
  }

  eliminarUsuario(index: number){
    let url: string;
    url = 'https://restaurante-83087.firebaseio.com' + '/usuarios/' + index + '.json';
    this.http.delete( url)
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


  isAutenticado(){
    return this.rol != null;
  }

  logout(){
    firebase.auth().signOut().then(
      () => {
        this.rol = null;
        this.autenticado = false;

      }).catch(error => console.log('error de logout: ' + error));
  }

}
