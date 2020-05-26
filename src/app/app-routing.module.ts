import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { AdminProductosComponent } from './pages/admin-productos/admin-productos.component';
import { LoginComponent } from './pages/login/login.component';
import { CompraComponent } from './pages/compra/compra.component';
import { DespachoComponent } from './pages/despacho/despacho.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'promociones', component: PromocionesComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'despacho', component: DespachoComponent},
  {path: 'compra', component: CompraComponent},
  {path: 'admin-productos', component: AdminProductosComponent},
  {path: 'contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
