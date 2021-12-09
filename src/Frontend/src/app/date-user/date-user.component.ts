import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Cliente} from '../models/Cliente'

@Component({
  selector: 'app-date-user',
  templateUrl: './date-user.component.html',
  styleUrls: ['./date-user.component.css']
})
export class DateUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clientes: Cliente[] = []

  formExample = new FormGroup({

    name: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    departament: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    number: new FormControl('',[Validators.required]),
    Identification: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    edad: new FormControl('',[Validators.required]),
    genero: new FormControl('',[Validators.required]),

  });

  // metodo del boton login
  send():any{
    let email:string = this.formExample.value.email
    
    this.obtenerClientes()
    
    let resultado = this.clientes.find(function(element) {
      return element.correo == email;
    });
    
    if (resultado) {
      console.log("el usuario ya existe")
    }else{
      this.registrarAdmin()
    }
    console.log(this.clientes)
    this.formExample.reset()
  }
  
  //metodo para obtener todos los clientes
  obtenerClientes(): void{
    
    let url = "http://localhost:3000/clientes"
    fetch(url).then(response => response.json())
    .then(data => {
      this.clientes = data
    })

  }

  //metodo para guardar un nuevo cliente
  registrarAdmin(): void{
    let url = "http://localhost:3000/clientes"
    let date=  {
      rol: "client",
      nombre: this.formExample.value.name,
      apellido: this.formExample.value.lastName,
      celular: this.formExample.value.number,
      correo: this.formExample.value.email,
      contrasena: this.formExample.value.password,
      genero: this.formExample.value.genero,
      edad: this.formExample.value.edad,
      activo: false,
      departamento: this.formExample.value.departament,
      ciudad: this.formExample.value.city,
      direccion: this.formExample.value.address

    }
    
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(date),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(mensaje => {
      console.log(mensaje)
    })
  }

}
