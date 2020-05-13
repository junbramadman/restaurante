import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }



  isAutenticado(){
    return this.loginService.isAutenticado();
  }

}
