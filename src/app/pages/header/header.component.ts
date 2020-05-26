import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  autenticacion: boolean;
  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }
  salir(){
    this.loginService.logout();
  }
  isAutenticado(){
    this.autenticacion = this.loginService.autenticado;
    return this.loginService.isAutenticado();
  }


}
