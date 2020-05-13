import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string;

  constructor(private router: Router){}

  login(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password).
    then(reponse => {
      firebase.auth().currentUser.getIdToken().then(
        token => {
          this.token = token;
          Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Logueado con exito',
          showConfirmButton: false,
          timer: 1700
          });
          this.router.navigate(['/']);
        }
      );
    });
  }

  getIdToken(){
    return this.token;
  }

  isAutenticado(){
    return this.token != null;
  }

  logout(){
    firebase.auth().signOut().then(
      () => {
        this.token = null;

      }).catch(error => console.log('error de logout: ' + error));
  }

}
