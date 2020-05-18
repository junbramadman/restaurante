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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductosService } from './servicios/productos.service';
import { DataService } from './servicios/data.service';
import { CompraComponent } from './pages/compra/compra.component';


const configfire = {
  apiKey: "AIzaSyCUKpcFQK1huDeX078nTkZyNLAAgqKE1_g",
  authDomain: "restaurante-83087.firebaseapp.com",
  databaseURL: "https://restaurante-83087.firebaseio.com",
  projectId: "restaurante-83087",
  storageBucket: "restaurante-83087.appspot.com",
  messagingSenderId: "846653633214",
  appId: "1:846653633214:web:406e099f84b8c49839a4ef",
  measurementId: "G-C6SMP0X2X4"
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
    CompraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService, ProductosService, DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
