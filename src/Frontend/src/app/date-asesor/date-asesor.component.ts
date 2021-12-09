import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Asesor} from '../models/Asesor';

@Component({
  selector: 'app-date-asesor',
  templateUrl: './date-asesor.component.html',
  styleUrls: ['./date-asesor.component.css']
})
export class DateAsesorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
    genero: new FormControl('',[Validators.required]),

  });

  // metodo del boton login

  async send(): Promise<void>{
    let email:string = this.formExample.value.email
    console.log("hola")
    let datos: Asesor[]= await this.obtenerAsesores()
    
    let resultado = datos.find(function(element) {
      return element.correo == email;
    });
    
    if (resultado) {
      console.log("el usuario ya existe")
    }else{
      this.registrarAsesor()
    }
    console.log(datos)
    this.formExample.reset()
  }



  //metodo para obtener todos los asesores

  async obtenerAsesores(): Promise<Asesor[]>{
    
    let url = "http://localhost:3000/asesors"
    const respuesta = await fetch(url)
    const datos = await respuesta.json() as Asesor[]
    return datos
  
  }

  //metodo para guardar un nuevo asesor

  registrarAsesor(): void{
    let url = "http://localhost:3000/asesors"
    let date=  {
      rol: "asesor",
      nombre: this.formExample.value.name,
      apellido: this.formExample.value.lastName,
      celular: this.formExample.value.number,
      correo: this.formExample.value.email,
      contrasena: this.formExample.value.password,
      genero: this.formExample.value.genero,
      edad: this.formExample.value.edad,
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
    window.location.replace("http://localhost:4200/login");
  }

}
