import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {administrador} from '../models/administrador'

@Component({
  selector: 'app-date-admon',
  templateUrl: './date-admon.component.html',
  styleUrls: ['./date-admon.component.css']
})
export class DateAdmonComponent implements OnInit {
   
  admins: administrador[] = []
  constructor() { }

  ngOnInit(): void {
    this.obtenerAdmin()
  }
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
    genero: new FormControl(''),

  });

  send():any{
    let email:string = this.formExample.value.email
    
    this.obtenerAdmin()
    
    let resultado = this.admins.find(function(element) {
      return element.correo == email;
    });
    
    if (resultado) {
      console.log("el usuario ya existe")
    }else{
      this.registrarAdmin()
    }
    console.log(this.admins)
    this.formExample.reset()
  }
  
  obtenerAdmin(): void{
    
    let url = "http://localhost:3000/administradors"
    fetch(url).then(response => response.json())
    .then(data => {
      this.admins = data
    })

  }

  registrarAdmin(): void{
    let url = "http://localhost:3000/administradors"
    let date = {
      nombre: this.formExample.value.name,
      apellido: this.formExample.value.lastName,
      celular: this.formExample.value.number,
      correo: this.formExample.value.email,
      contrasena: this.formExample.value.password,
      genero: this.formExample.value.genero,
      edad: this.formExample.value.edad
    }
    
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(date),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json())
    .then(mensaje => {
      console.log(mensaje)
    })
  }
}
