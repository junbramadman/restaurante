import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { AdminProductosComponent } from './pages/admin-productos/admin-productos.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin-productos', component: AdminProductosComponent},
  {path: 'contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
