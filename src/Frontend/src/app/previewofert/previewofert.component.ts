import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inmueble } from '../models/inmueble';

@Component({
  selector: 'app-previewofert',
  templateUrl: './previewofert.component.html',
  styleUrls: ['./previewofert.component.css']
})
export class PreviewofertComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  // @ts-ignore
  dates: Inmueble;

  async ngOnInit(): Promise<void> {
    this.dates= await this.obtenerInmueble(await this.get())
  }

  async obtenerInmueble(id:string): Promise<Inmueble> {
    let url = 'http://localhost:3000/inmuebles/'+id;
    const respuesta = await fetch(url);
    const datos = (await respuesta.json()) as Inmueble;
    return datos;
  }
  
  async get (): Promise <string>{
    // @ts-ignore: Object is possibly 'null'
    return this.route.snapshot.paramMap.get('id');
  }
}
