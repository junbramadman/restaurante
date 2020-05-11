import { Injectable } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string;

  login(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password).
    then(reponse => {
      firebase.auth().currentUser.getIdToken().then(
        token => {
          this.token = token;
          alert('logueado correctamente');
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
