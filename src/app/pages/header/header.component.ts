import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  salir(){
    this.loginService.logout();
  }
  isAutenticado(){
    return this.loginService.isAutenticado();
  }


}
