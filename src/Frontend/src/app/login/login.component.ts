import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Cliente} from '../models/Cliente'
import {Asesor} from '../models/Asesor';
import { AppComponent } from '../app.component';
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


  formExample = new FormGroup({

    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    rol: new FormControl('',[Validators.required])
  });
  formRegistro = new FormGroup({
    Remail: new FormControl('',[Validators.required,Validators.email]),
    Rpassword: new FormControl('',[Validators.required]),
  });


  async send(){
    let email:string = this.formExample.value.email

    
    let datos: Array<any> =[]
    switch (this.formExample.value.rol){
      case 'advisor':
        datos = await this.obtenerAsesores()
        break
      case 'customer':
        datos = await this.obtenerClientes()
        break
    }

    let resultado = datos.find(function(element) {
      return element.correo == email;
    });
    
    if (resultado) {
      if (resultado.contrasena == this.formExample.value.password) {
        window.location.replace("http://localhost:4200/search");
        localStorage.setItem('persona', JSON.stringify(resultado));
        //persona = JSON.parse(localStorage.getItem('persona'))
      }else{
        console.log("la contraseña es incorrecta"
        )
      }
    }else{
        console.log("no existe algun " + this.formExample.value.rol + " con el correo digitado")
    }
    console.log(resultado)
    console.log(datos)
    this.formExample.reset()
  }
  
  RegistroAsesor(){
    console.log("hola")
    window.location.replace("http://localhost:4200/dateAssesor");
  }
  RegistroCliente(){
    window.location.replace("http://localhost:4200/dateUser");
  }

  async obtenerClientes(): Promise<Cliente[]>{
    
    let url = "http://localhost:3000/clientes"
    const respuesta = await fetch(url)
    const datos = await respuesta.json() as Cliente[]
    return datos
  
  }
  async obtenerAsesores(): Promise<Asesor[]>{
    
    let url = "http://localhost:3000/asesors"
    const respuesta = await fetch(url)
    const datos = await respuesta.json() as Asesor[]
    return datos
  
  }
}
