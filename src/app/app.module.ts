import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//firebase
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'firebase';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { LoginComponent } from './pages/login/login.component';
import { environment } from '../environments/environment';
import { LoginService } from './servicios/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminProductosComponent } from './pages/admin-productos/admin-productos.component';


const configfire = {
  apiKey: "AIzaSyCUKpcFQK1huDeX078nTkZyNLAAgqKE1_g",
  authDomain: "restaurante-83087.firebaseapp.com",
  databaseURL: "https://restaurante-83087.firebaseio.com",
  projectId: "restaurante-83087",
  storageBucket: "restaurante-83087.appspot.com",
  messagingSenderId: "846653633214",
};

firebase.initializeApp(configfire);


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    ProductosComponent,
    ContactoComponent,
    NosotrosComponent,
    LoginComponent,
    AdminProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
