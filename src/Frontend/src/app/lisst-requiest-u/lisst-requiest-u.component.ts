import { Component, OnInit } from '@angular/core';
import { request } from '../models/request';

@Component({
  selector: 'app-lisst-requiest-u',
  templateUrl: './lisst-requiest-u.component.html',
  styleUrls: ['./lisst-requiest-u.component.css']
})
export class LisstRequiestUComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  async obtenerSolisitudes(id:string): Promise<request[]>{

    let url = "http://localhost:3000/clientes/"+ id + "/solicitud-clientes"
    const respuesta = await fetch(url)
    const datos = await respuesta.json() as request[]
    return datos
  }

}
