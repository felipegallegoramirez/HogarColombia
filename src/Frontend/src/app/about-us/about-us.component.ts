import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import{ Inmueble } from '../models/inmueble'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
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

   inmueblesSale: Array<Inmueble> = [];
   inmueblesRent: Array<Inmueble> = [];

   async ngOnInit(): Promise<void> {
    let inmuebles:Array<Inmueble> = await this.obtenerInmuebles();
    let cantS=0
    let cantR=0
    console.log(inmuebles)
    for(let inmueble of inmuebles) {
      if(cantS<9 || cantR<9) {
        console.log(inmueble.categoria)
        if(cantS<9 && inmueble.categoria == "Vent"){
          this.inmueblesSale.push(inmueble)
        }
        if(cantS<9 && inmueble.categoria == "rent") {
          this.inmueblesRent.push(inmueble)
        }
      }else{
        break;
      }
    }
  }


  redirect(id:string):void {
    window.location.replace("http://localhost:4200/view/"+id);
  }
  async obtenerInmuebles(): Promise<Inmueble[]> {
    let url = 'http://localhost:3000/inmuebles';
    const respuesta = await fetch(url);
    const datos = (await respuesta.json()) as Inmueble[];
    return datos;
  }



}