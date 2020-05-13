import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

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
