import { Component, OnInit, Injectable } from '@angular/core';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})

@Injectable({
  providedIn: 'root'
})
export class UsuarioComponent implements OnInit {
  nombreInput: string;
  apellidoInput: string;
  cedulaInput: string;
  direccionInput: string;
  telefonoInput: string;
  correoInput: string;
  passwordInput: string;
  tipoUsuarioInput: boolean;
  usuario: any[] = [];

  constructor(private login: LoginService) { }

  ngOnInit(): void {
    this.obtenerUsuarios()
    .subscribe(
      (usuario: any[]) => {
        this.usuario = usuario;
        this.setUsuario(this.usuario);
      }
    );
  }

  registrarUsuario(){
    if (this.usuario == null){
        this.usuario = [];
    }
    let usuarioFinal: any = {
      nombre: this.nombreInput,
      apellido: this.apellidoInput,
      cedula: this.cedulaInput,
      direccion: this.direccionInput,
      telefono: this.telefonoInput,
      correo: this.correoInput,
      isAdmin: this.tipoUsuarioInput,
    };
    this.usuario.push(usuarioFinal);
    this.login.agregarUsuario(this.usuario, this.passwordInput);

  }

  obtenerUsuarios(){
    return this.login.cargarUsuarios();
  }

  setUsuario(usuario: any[]){
    this.usuario = usuario;
  }
  actualizarTabla(){
    if(this.usuario != null) {
      this.login.guardarAlEliminar(this.usuario);
    }
  }

  encontrarUsuario(index: number){
    let usuario = this.usuario[index];
    return usuario;
  }

  onEliminar(index:number){
    this.usuario.splice(index, 1);
    this.login.eliminarUsuario(index);
    this.actualizarTabla();
  }

  estaAutenticado(){
    console.log('Solo usuario: ' + this.login.userId + 'Este el numero de array: ' + this.usuario.length + ' '+this.usuario );
    for(let i = 0; i < this.usuario.length ;  i++){
      console.log(this.login.userId + ' y ' + this.usuario[i].isAdmin );
      if (this.login.userId === this.usuario[i].correo){
        this.login.rol = this.usuario[i].isAdmin;
      }
    }
  }

}
