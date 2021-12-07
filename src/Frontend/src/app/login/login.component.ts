import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Cliente} from '../models/Cliente'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    // @ts-ignore: Object is possibly 'null'
    
    signUpButton.addEventListener('click', () => {
      // @ts-ignore: Object is possibly 'null'
      container.classList.add("right-panel-active");
    });
    // @ts-ignore: Object is possibly 'null'
    signInButton.addEventListener('click', () => {
      // @ts-ignore: Object is possibly 'null'
      container.classList.remove("right-panel-active");
    });
  }

  clientes: Cliente[] = []

  formExample = new FormGroup({

    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
  });


  send(){
    let email:string = this.formExample.value.email
    
    this.obtenerClientes()
    
    let resultado = this.clientes.find(function(element) {
      return element.correo == email;
    });
    
    if (resultado) {
      if (resultado.contrasena == this.formExample.value.password) {
        window.location.replace("http://localhost:4200/search");
        localStorage.setItem("id",resultado.id)
      }else{
        console.log("la contraseña es incorrecta"
        )
      }
    }else{
        console.log("no existe usuario con el correo digitado")
    }
    console.log(resultado)
    console.log(this.clientes)
    this.formExample.reset()
  }


  obtenerClientes(): void{
    
    let url = "http://localhost:3000/clientes"
    fetch(url).then(response => response.json())
    .then(data => {
      this.clientes = data
    })
  }
}
