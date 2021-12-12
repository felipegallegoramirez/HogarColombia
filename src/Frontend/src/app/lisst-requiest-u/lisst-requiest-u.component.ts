import { Component, OnInit } from '@angular/core';
import { request } from '../models/request';
import { Inmueble } from '../models/inmueble';

@Component({
  selector: 'app-lisst-requiest-u',
  templateUrl: './lisst-requiest-u.component.html',
  styleUrls: ['./lisst-requiest-u.component.css']
})
export class LisstRequiestUComponent implements OnInit {

  constructor() { }
  cat: Array<request> = [];
  rar: Array<Inmueble> = [];
  async ngOnInit(): Promise<void> {
    let data= localStorage.getItem('persona')
    //@ts-ignore
    let asesor=JSON.parse(data)
    this.cat = await this.obtenerSolisitudes(asesor.id);
    for (let i=0;i>=this.cat.length-1;i++){
      this.rar[i]= await this.obtenerInmueble(this.cat[i].inmuebleId)
    }
    console.log(this.rar)
    
  }

  
  async obtenerSolisitudes(id:string): Promise<request[]>{

    let url = "http://localhost:3000/clientes/"+ id + "/solicitud-clientes"
    const respuesta = await fetch(url)
    const datos = await respuesta.json() as request[]
    return datos
  }

  
  async obtenerInmueble(id:string): Promise<Inmueble> {
    let url = 'http://localhost:3000/inmuebles/'+id;
    const respuesta = await fetch(url);
    const datos = (await respuesta.json()) as Inmueble;
    return datos;
  }


  

}
