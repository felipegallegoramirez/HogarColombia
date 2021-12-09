import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import{ Inmueble } from '../models/inmueble'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  type:string;
  price:string;
  state:string;
  ubication:string;
  size:string;

  constructor() {
    this.type="Apartament"
    this.state="Sale"
    this.price="123124143"
    this.ubication="Medellin"
    this.size="128"
   }

   cat: Array<Inmueble> = [];

   async ngOnInit(): Promise<void> {
    this.cat = await this.obtenerCateogry();
  }


  redirect(id:string):void {
    window.location.replace("http://localhost:4200/view/"+id);
  }


  async obtenerCateogry(): Promise<Inmueble[]> {
    let url = 'http://localhost:3000/inmuebles';
    const respuesta = await fetch(url);
    const datos = (await respuesta.json()) as Inmueble[];
    return datos;
  }
}
