import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, public formBuilder: FormBuilder) { }
  
  registros = this.formBuilder.group({
    email : [''],
    password : [''],
  });

  ngOnInit(): void {
  }

  login(){
    const email = this.registros.value.email;
    const password = this.registros.value.password;
    this.loginService.login(email, password);
  }
}
